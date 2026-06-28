import { redis } from "@skalfa/skalfa-redis"
import { logger } from "@skalfa/skalfa-api-core"
import { queue } from "./index"

export async function retry(name: string) {
  const failedKey = queue.keyFailed(name);
  const jobs = await redis.lrange(failedKey, 0, -1);
  if (jobs.length === 0) return 0;

  for (const j of jobs) {
    const job = JSON.parse(j);
    try {
      await queue.add(name, job.payload, job.id);
      logger.queue(`${name} ${job?.id} success!`);
    } catch (err) {
      const em = err instanceof Error ? err.message : String(err)
      logger.queueError(`${name} ${job?.id} error : ${em}`, { error: em, feature: name });
    }
  }

  await redis.del(failedKey);

  return jobs.length;
}
