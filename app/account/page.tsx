import { auth } from "@/auth";
import { headers } from "next/headers";
import { Header } from "@/app/ui/common";
import Link from "next/link";

export default async function Login() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  console.log(session);
  return (
    <main>
      <Header pageTitle="Login" />
      <div className="flex flex-col">
        <p className="text-center">
          Unless you have access, there is nothing to see here.
        </p>
        <br />
      </div>
      <div className="flex flex-col items-center justify-center">
        {session ? (
          <div className="flex flex-col items-center">
            Signed in as {session.user.email}.
            <Link href="/account/logout">Sign out</Link>
          </div>
        ) : (
          <Link href="/account/login">Sign in with Google</Link>
        )}
      </div>
    </main>
  );
}
