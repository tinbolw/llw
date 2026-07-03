"use server";
import Redis from "ioredis";

const redis = new Redis(process.env.REDIS_URL!);

export async function deleteSession(username: string) {
  await redis.del(`guild-member:${username}`);
}
