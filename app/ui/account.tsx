import "server-only";
import { auth } from "@/auth";
import { headers } from "next/headers";
import { isAuthorized } from "@/app/lib/session";
import Image from "next/image";
import Link from "next/link";

export async function AccountCard() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const authorized = await isAuthorized(session?.user.name ?? "");

  if (!session) {
    return (
      <div className="flex flex-col items-center">
        <Link href="/account/login" className="underline text-2xl">
          Login
        </Link>
      </div>
    );
  } else {
    return (
      <div className="flex flex-col items-center">
        <Card username={session.user.name} imageUrl={session.user.image} />
        You are{" "}
        {authorized
          ? "cleared to access this website, as a member of Ling Ling"
          : "not authorized"}
        .
        <Link href="/account/logout" className="underline text-2xl">
          Logout
        </Link>
      </div>
    );
  }
}

function Card({
  username,
  imageUrl,
}: {
  username: string;
  imageUrl: string | null | undefined;
}) {
  return (
    <div className="flex flex-row gap-2 items-center">
      {imageUrl && (
        <Image
          src={imageUrl}
          alt="Profile picture"
          width="30"
          height="30"
          className="rounded-full object-cover"
        ></Image>
      )}
      {username}
    </div>
  );
}
