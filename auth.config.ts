import type { NextAuthConfig } from 'next-auth';

export const authConfig = {
  pages: {
    signIn: '/login',
  },
  // Middleware(api的な)
  callbacks: {
    // ログイン認証を持ってるかチェック
    authorized({ auth, request: { nextUrl } }) {
        // authがtureなら（null、undefined）であっても
      const isLoggedIn = !!auth?.user;
      const isOnDashboard = nextUrl.pathname.startsWith('/dashboard');

      if (isOnDashboard) {
        if (isLoggedIn) return true;
        return false; // Redirect unauthenticated users to login page
        // NOTE： redirectするpathを下のアドレスに書く
      } else if (isLoggedIn) {
        return Response.redirect(new URL('/dashboard/overview', nextUrl));
      }
      return true;
    },
  },
  providers: [],secret:process.env.NODE_ENV // Add providers with an empty array for now
} satisfies NextAuthConfig;



/*

*/