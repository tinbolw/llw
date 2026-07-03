"use client";
import { authClient } from "@/app/lib/auth-client";
import { useRouter } from "next/navigation";
import { Redirecting } from "@/app/ui/redirecting";
import { deleteSession } from "@/app/lib/delsession";

export default function Page() {
  const router = useRouter();
  (async () => {
    const { data: session, error } = await authClient.getSession();
    await deleteSession(session?.user.name ?? "");
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push("/");
        },
      },
    });
  })();
  return <Redirecting />;
}
