import NextAuth from "next-auth";
import Providers from "next-auth/providers";
import { signOut } from "next-auth/client";

export default NextAuth({
  providers: [
    Providers.Credentials({
      name: "credentials",
      async authorize(credentials, req) {
        const { username, password } = credentials;

        const response = await fetch("https://sr-fms-api.herokuapp.com/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ username, password }),
        });
        const user = await response.json();

        // If no error and we have user data, return it
        if (response.ok && user) {
          // req.headers.Authorization =  `Bearer ${user.token}`
          return user;
        }
        // Return null if user data could not be retrieved
        return null;
      },
    }),
  ],
  callbacks: {
    redirect: async (url, baseUrl) => {
      return baseUrl;
    },
    async session(session, token) {
      session.user = token.user;
      return { ...session };
    },
    async jwt(token, user) {
      if (user) token.user = user;
      return token;
    },
  },
  secret: process.env.JWT_SIGNING_PRIVATE_KEY,
  jwt: {
    secret: process.env.JWT_SIGNING_PRIVATE_KEY,
    encryption: true,
  },
  pages: {
    signIn: "/auth/signin",
    signOut: "/auth/signin",
  },
});
