import { findUserByCredentials } from "@/lib/user";
import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"
 
export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {},
        active: {},
      },
      authorize: async (credentials) => {
        const user = await findUserByCredentials(
          credentials.email as string,
          credentials.password as string,
          credentials.active as boolean
        );

        if (!user) return null;

        return {
          id: user.id,
          name: user.name,         // <-- importante
          email: user.email,       // <-- importante
          image: user.image || null, // se tiver imagem
        };
      },
    }),
  ],
  pages: {
    error: "/invalidlogin",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.name = user.name;
        token.email = user.email;
        token.image = user.image ?? null;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id;
        session.user.name = token.name;
        session.user.email = token.email;
        session.user.image = token.image;
      }
      return session;
    },
  },
});