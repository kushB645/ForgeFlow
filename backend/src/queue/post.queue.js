import { Queue } from "bullmq";
import connection from "./connection.js";

const postQueue = new Queue("postQueue", {
  connection,
});

connection.on("connect", () => {
  console.log("✅ Redis connected");
});

connection.on("ready", () => {
  console.log("✅ Redis ready");
});

connection.on("error", (error) => {
  console.error("❌ Redis error:", error);
});

connection.on("close", () => {
  console.log("⚠️ Redis connection closed");
});

export default postQueue;