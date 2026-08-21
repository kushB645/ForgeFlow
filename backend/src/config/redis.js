import Redis from "ioredis";

const redis = new Redis(process.env.REDIS_URL, {
  tls: {},
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

export default redis;