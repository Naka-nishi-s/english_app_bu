import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID || "",
      clientSecret: process.env.GITHUB_SECRET || "",
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_SECRET || "",
    }),
  ],

  secret: process.env.SECRET,

  session: {
    strategy: "jwt",
  },

  jwt: {},

  pages: {
    signIn: "/login",
    error: "/error",
  },

  callbacks: {
    jwt: ({ token, user }) => {
      if (user) {
        return { ...token, id: user.id };
      }
      return token;
    },

    session: ({ session, token }) => {
      return { ...session, user: { ...session.user, id: token.id } };
    },
  },

  events: {},

  debug: false,

  logger: {},
});

export { handler as GET, handler as POST };
