import "server-only";
import { auth } from "@/auth";
import { headers } from "next/headers";
import { isAuthorized } from "@/app/lib/session";
import Link from "next/link";
import { TitledPage } from "../ui/titledpage";

export default async function Page() {
  const title = "Login";
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  const authorized = await isAuthorized(session?.user.name ?? "");
  return (
    <TitledPage title={title} backButton={true}>
      <div className="flex flex-col items-center justify-center">
        {session ? (
          <div className="flex flex-col items-center">
            Signed in as {session.user.name}. You are{" "}
            {authorized
              ? "cleared to access this website, as a member of Ling Ling."
              : "not authorized."}
            <Link href="/account/logout">Sign out</Link>
          </div>
        ) : (
          <Link href="/account/login">Sign in with Discord</Link>
        )}
      </div>
    </TitledPage>
  );
}
