import Redis from "ioredis";

const redisUrl = process.env.REDIS_URL;

if (!redisUrl) {
  throw new Error("REDIS_URL is not defined");
}

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