import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import { auth } from "@/auth";
import { headers } from "next/headers";
import { inGuild } from "./app/lib/discord/discord-actions";

export async function proxy(request: NextRequest) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (session) {
    if (await inGuild()) {
      return NextResponse.next();
    }
  }

  return NextResponse.redirect(new URL("/account", request.url));
}

export const config = {
  matcher: "/((?!api|_next/static|_next/image|favicon.ico|account).*)",
};
