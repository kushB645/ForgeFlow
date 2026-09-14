import Redis from "ioredis";

const redisUrl = process.env.REDIS_URL;

if (!redisUrl) {
  throw new Error("REDIS_URL is not defined");
}

const connection = new Redis(redisUrl, {
  maxRetriesPerRequest: null,
  ...(redisUrl.startsWith("rediss://") ? { tls: {} } : {}),
});

connection.on("connect", () => {
  console.log("BullMQ Redis connected");
});

connection.on("ready", () => {
  console.log("BullMQ Redis ready");
});

connection.on("error", (error) => {
  console.error("BullMQ Redis error:", error);
});

connection.on("close", () => {
  console.log("BullMQ Redis connection closed");
});

export default connection;