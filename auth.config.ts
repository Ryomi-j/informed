import type { NextAuthConfig } from "next-auth";

export const authConfig = {
  pages: {
    signIn: "/sign-in",
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isOnSettingKeywords = nextUrl.pathname.startsWith("/keywords");
      const isOnSettingNotification =
        nextUrl.pathname.startsWith("/notifications");

      if (isOnSettingKeywords || isOnSettingNotification) {
        return isLoggedIn;
      }

      return true;
    },
    async jwt({ token, user, account }) {
      if (account && user) {
        return {
          ...token,
          provider: account.provider,
          providerId: account.providerAccountId,
        };
      }
      return token;
    },
    async session({ session, token }) {
      return {
        ...session,
        user: {
          ...session.user,
          provider: token.provider,
          providerId: token.providerId,
        },
      };
    },
  },
  providers: [],
} satisfies NextAuthConfig;
