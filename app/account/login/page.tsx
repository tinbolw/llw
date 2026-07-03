"use client";
import { authClient } from "@/app/lib/auth-client";
import { Redirecting } from "@/app/ui/redirecting";

export default function Page() {
  authClient.signIn.social({
    provider: "google",
    callbackURL: "/account",
  });
  return <Redirecting />;
}
