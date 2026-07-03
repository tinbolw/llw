import { auth } from "@/auth";
import { headers } from "next/headers";
import { Header } from "@/app/ui/common";
import { inGuild } from "../lib/discord/discord-actions";
import Link from "next/link";

export default async function Login() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  const authorized = session ? await inGuild() : false;
  return (
    <main>
      <Header pageTitle="Login" />
      <div className="flex flex-col items-center justify-center">
        {session ? (
          <div className="flex flex-col items-center">
            Signed in as {session.user.name}. You are {authorized ? "" : "not"}{" "}
            authorized.
            <Link href="/account/logout">Sign out</Link>
          </div>
        ) : (
          <Link href="/account/login">Sign in with Discord</Link>
        )}
      </div>
    </main>
  );
}
