const upstashRedisRestUrl = process.env.UPSTASH_REDIS_REST_URL;
const authToken = process.env.UPSTASH_REDIS_REST_TOKEN;
console.log("url:", upstashRedisRestUrl, "authTokem:",authToken);

type command = "zrange" | "sismember" | "get" | "smembers";

export async function fetchRedis(
  command: command,
  ...args: (string | number)[]
) {
  const commandUrl = `${upstashRedisRestUrl}/${command}/${args.join("/")}`;
  const response = await fetch(commandUrl, {
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
    cache: "no-store",
  });
  if (!response.ok) {
    throw new Error(`Error executing redis command: ${response.statusText}`);
  }

  const data = await response.json();
  return data.result;
}
