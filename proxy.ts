import "server-only";
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import { auth } from "@/auth";
import { headers } from "next/headers";
import { isAuthorized } from "@/app/lib/session";

export async function proxy(request: NextRequest) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const authorized = await isAuthorized(session?.user.name ?? "");
  if (authorized) {
    return NextResponse.next();
  }

  return NextResponse.redirect(new URL("/account", request.url));
}

export const config = {
  matcher: "/((?!api|_next/static|_next/image|favicon.ico|account).*)",
};
