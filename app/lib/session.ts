"use server";

import { inGuild } from "./discord/discord-actions";
import Redis from "ioredis";

const redis = new Redis(process.env.REDIS_URL!);
const TTL_SECONDS = 15 * 60;

/**
 * Returns whether or not the currently logged-in user is authorized to access the website.
 * Authorization status refreshes every 15 minutes.
 */
export async function isAuthorized(username: string): Promise<boolean> {
  const cacheKey = `guild-member:${username}`;
  const cached = await redis.get(cacheKey);
  if (cached !== null) return cached === "true";

  const result = await inGuild();
  await redis.set(cacheKey, String(result), "EX", TTL_SECONDS);
  return result;
}

export async function deleteSession(username: string) {
  await redis.del(`guild-member:${username}`);
}
