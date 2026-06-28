import { redis } from "@skalfa/skalfa-redis"
import { queue } from "./index"

export async function pop(name: string, direction: "front" | "back" = "front", timeout = 0) {
  const key = queue.key(name);
  const cmd = direction === "front" ? "blpop" : "brpop";

  const result = await (redis as any)[cmd](key, timeout);
  if (!result) return null;

  try {
    return JSON.parse(result[1]);
  } catch {
    return null;
  }
}
