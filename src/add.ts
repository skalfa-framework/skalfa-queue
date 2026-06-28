import crypto from 'crypto'
import { redis } from "@skalfa/skalfa-redis"
import { queue } from "./index"

export async function add(name: string, jobPayload: any, uniq?: string) {
  const id = uniq ?? crypto.randomBytes(10).toString("hex");
  const payload = JSON.stringify({ id, payload: jobPayload });

  await redis.rpush(queue.key(name), payload);
  return id;
}
