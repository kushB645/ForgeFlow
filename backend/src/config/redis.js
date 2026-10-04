import Redis from "ioredis";
import normalizeRedisUrl from "./normalizeRedisUrl.js";

const redisUrlValue = process.env.REDIS_URL;

if (!redisUrlValue) {
  throw new Error("REDIS_URL is not defined");
}

const redisUrl = normalizeRedisUrl(redisUrlValue);

const redis = new Redis(redisUrl, {
  ...(redisUrl.startsWith("rediss://") ? { tls: {} } : {}),
});

redis.on("connect", () => {
  console.log("App Redis connected");
});

redis.on("ready", () => {
  console.log("App Redis ready");
});

redis.on("error", (error) => {
  console.error("App Redis error:", error);
});

redis.on("close", () => {
  console.log("App Redis connection closed");
});

export default redis;