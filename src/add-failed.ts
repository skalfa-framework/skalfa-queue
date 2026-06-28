import { redis } from "@skalfa/skalfa-redis"
import { queue } from "./index"

export async function addFailed(name: string, job: any, error: any) {
  const store = {
    id      : job.id,
    payload : job.payload,
    error   : error?.message || String(error),
    time    : new Date().toISOString(),
  };

  await redis.rpush(queue.keyFailed(name), JSON.stringify(store));
}
