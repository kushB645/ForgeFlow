const normalizeRedisUrl = (redisUrl) => {
  const url = new URL(redisUrl);

  if (url.hostname.endsWith(".upstash.io") && url.protocol === "redis:") {
    url.protocol = "rediss:";
  }

  return url.toString();
};

export default normalizeRedisUrl;
