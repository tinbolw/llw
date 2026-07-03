"use client";
import { authClient } from "@/app/lib/auth-client";
import { useRouter } from "next/navigation";
import { Redirecting } from "@/app/ui/redirecting";

export default function Page() {
  const router = useRouter();
  authClient.signOut({
    fetchOptions: {
      onSuccess: () => {
        router.push("/account");
      },
    },
  });
  return <Redirecting />;
}
