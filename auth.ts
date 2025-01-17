import NextAuth, { DefaultSession } from "next-auth";
import { authConfig } from "./auth.config";
import Google from "next-auth/providers/google";
import Credentials from "next-auth/providers/credentials";
import { sql } from "@vercel/postgres";
import bcrypt from "bcryptjs";
import { z } from "zod";
import { ROUTES } from "@/lib/constants/routes";

export const getUser = async (email: string) => {
  try {
    const user = await sql`
      SELECT * FROM users 
      WHERE email = ${email} 
      AND auth_provider = 'email'
    `;

    return user.rows[0];
  } catch (error) {
    throw new Error("Failed to fetch user.");
  }
};

declare module "next-auth" {
  interface Session {
    user: {
      provider: string;
    } & DefaultSession["user"];
  }
}

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  ...authConfig,
  callbacks: {
    ...authConfig.callbacks,
    async signIn({ user, account }) {
      if (account?.provider === "google") {
        try {
          await sql`
            INSERT INTO users (
              email, 
              name, 
              profile_image, 
              auth_provider,
              auth_provider_id
            ) 
            VALUES (
              ${user.email}, 
              ${user.name}, 
              ${user.image}, 
              ${account.provider},
              ${account.providerAccountId}
            )
            ON CONFLICT (email) DO UPDATE SET
              name = EXCLUDED.name,
              profile_image = EXCLUDED.profile_image
          `;
        } catch (error) {
          console.error("Error saving social user:", error);
          return false;
        }
      }
      return true;
    },
  },
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    Credentials({
      async authorize(credentials) {
        try {
          const parsedCredentials = z
            .object({
              email: z.string().email(),
              password: z.string().min(8),
            })
            .safeParse(credentials);

          if (!parsedCredentials.success) return null;

          const { email, password } = parsedCredentials.data;
          const user = await getUser(email);

          if (!user) return null;

          const passwordsMatch = await bcrypt.compare(password, user.password);

          if (!passwordsMatch) return null;

          return {
            id: user.id,
            email: user.email,
            name: user.name,
            image: user.profile_image,
            provider: "email",
          };
        } catch (error) {
          console.error("Error during authentication:", error);
          return null;
        }
      },
    }),
  ],
  pages: {
    signIn: ROUTES.SIGN_IN,
  },
});
