import { auth } from "@/auth";
import { headers } from "next/headers";

export async function inGuild(): Promise<boolean> {
  const guilds = await getGuilds();
  for (const guild of guilds) {
    if ((guild.id as string) == (process.env.GUILD_ID as string)) return true;
  }
  return false;
}

async function getGuilds() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) return null;

  const tokenData = await auth.api.getAccessToken({
    body: {
      providerId: "discord",
      userId: session.user.id,
    },
    headers: await headers(),
  });

  if (!tokenData?.accessToken) return null;

  const endpoint = "https://discord.com/api/v10/users/@me/guilds";
  const response = await fetch(endpoint, {
    headers: {
      Authorization: `Bearer ${tokenData.accessToken}`,
    },
  });

  if (!response.ok) return null;

  return await response.json();
}
