import Redis from "ioredis";
import normalizeRedisUrl from "../config/normalizeRedisUrl.js";

const redisUrlValue = process.env.REDIS_URL;

if (!redisUrlValue) {
  throw new Error("REDIS_URL is not defined");
}

const redisUrl = normalizeRedisUrl(redisUrlValue);

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