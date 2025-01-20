import type { NextAuthConfig } from 'next-auth';

export const authConfig = {
  pages: {
    signIn: '/login',
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = Boolean(auth?.user);
      const isOnLoginPage = nextUrl.pathname === '/login';

      if (isOnLoginPage && isLoggedIn) {
        return Response.redirect(new URL('/dashboard', nextUrl));
      }

      return isLoggedIn || nextUrl.pathname === '/login';
    },
  },
  providers: [], // Add providers with an empty array for now
} satisfies NextAuthConfig;
