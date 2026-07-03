"use client";
import { authClient } from "@/app/lib/auth-client";
import { Redirecting } from "@/app/ui/redirecting";
await authClient.signIn.social({
  provider: "google",
  callbackURL: "/account",
});

export default function Page() {
  return <Redirecting />;
}
