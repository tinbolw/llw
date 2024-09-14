import NextAuth from 'next-auth';
import { authConfig } from './auth.config';
// due to this being in middleware,
// should prevent protected routes from rendering until authorized, but could add second check
export default NextAuth(authConfig).auth;

export const config = {
  // https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
};