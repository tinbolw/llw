import { auth } from "@/auth";
import { headers } from "next/headers";

/**
 * Returns whether or not the currently logged-in user is in the Discord guild specified in .env.
 */
export async function inGuild(): Promise<boolean> {
  const guilds = await getGuilds();
  for (const guild of guilds) {
    if ((guild.id as string) == (process.env.GUILD_ID as string)) return true;
  }
  return false;
}

/**
 * Returns a list of Discord guilds the currently logged-in user is a member of.
 */
async function getGuilds() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) return [];

  const tokenData = await auth.api.getAccessToken({
    body: {
      providerId: "discord",
      userId: session.user.id,
    },
    headers: await headers(),
  });

  if (!tokenData?.accessToken) return [];

  const endpoint = "https://discord.com/api/v10/users/@me/guilds";
  const response = await fetch(endpoint, {
    headers: {
      Authorization: `Bearer ${tokenData.accessToken}`,
    },
  });

  if (!response.ok) return [];

  return await response.json();
}
