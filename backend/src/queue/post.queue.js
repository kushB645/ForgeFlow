import { Queue } from "bullmq";
import connection from "./connection.js";

const postQueue = new Queue("postQueue", {
  connection,
});

export default postQueue;