import { logger } from "@skalfa/skalfa-api-core"
import { queue } from "./index"

export async function worker(
  name: string,
  handler: (payload?: Record<string, any>, id?: string) => Promise<void>,
  opts?: {
    interval?: number;
    concurrency?: number;
    direction?: "front" | "back";
  }
) {
  const interval = opts?.interval ?? 100;
  const concurrency = opts?.concurrency ?? 1;
  const direction = opts?.direction ?? "front";

  const loop = async () => {
    try {
      const tasks: Promise<void>[] = [];

      // ambil beberapa job sekaligus
      for (let i = 0; i < concurrency; i++) {
        const job = await queue.pop(name, direction, 1);
        if (!job) break;

        const task = (async () => {
          try {
            await handler(job.payload, job.id);
            logger.queue(`${name} ${job.id} success!`);
          } catch (err) {
            await queue.addFailed(name, job, err);
            const em = err instanceof Error ? err.message : String(err)
            logger.queueError(`${name} ${job?.id} error : ${em}`, { error: em, feature: name });
          }
        })();

        tasks.push(task);
      }

      if (tasks.length > 0) {
        await Promise.all(tasks);
      }
    } catch (err) {
      const em = err instanceof Error ? err.message : String(err)
      logger.queueError(`${name} error : ${em}`, { error: em, feature: name });
    }

    setTimeout(loop, interval);
  };

  loop();
}
