import { add } from "./add";
import { addFailed } from "./add-failed";
import { pop } from "./pop";
import { worker } from "./worker";
import { retry } from "./retry";

export const queue = {
  // ===========================>
  // ## Queue: make redis key of job
  // ===========================>
  key : (name: string) => `queue:${name}`,

  // ===========================>
  // ## Queue: make redis key of job failed
  // ===========================>
  keyFailed : (name: string) => `queue-failed:${name}`,

  // ===========================>
  // ## Queue: add new job
  // ===========================>
  add,

  // ===========================>
  // ## Queue: add new job failed
  // ===========================>
  addFailed,

  // ===========================>
  // ## Queue: pop job from redis
  // ===========================>
  pop,

  // ===========================>
  // ## Queue: job worker
  // ===========================>
  worker,

  // ===========================>
  // ## Queue: retry job failed
  // ===========================>
  retry,
}
