import type { NextAuthConfig } from 'next-auth';

// can be used to specify custom login/out/error pages
export const authConfig = {
  pages: {
    signIn: '/login',
  },
  callbacks: {
    //called before request is completed
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isOnDashboard = nextUrl.pathname.startsWith('/about/create');
      if (isOnDashboard) {
        return isLoggedIn; // Redirect unauthenticated users to login page
      } else if (isOnDashboard && !isLoggedIn) {
        return Response.redirect(new URL('/', nextUrl));
      }
      return true;
    },
  },
  providers: [],
} satisfies NextAuthConfig;