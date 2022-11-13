import nextAuth from "next-auth";
import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { ILoginRes } from "../../../helpers/types";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "Email",
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "Password",
        },
      },
      async authorize(credentials, req) {
        const dataToSend = {
          ...credentials,
          source: "1",
        };
        const res = await fetch("https://cloudart.com.au:3235/api/login", {
          method: "Post",
          body: JSON.stringify(dataToSend),
          headers: {
            "Content-Type": "application/json",
            token: "",
          },
        });
        const userDetails = (await res.json()) as ILoginRes;
        if (!userDetails?.status) throw new Error(userDetails?.message);
        const user = userDetails.body.profile;
        return { id: user.user_id, ...user };
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
  callbacks: {
    jwt: ({ token, user }) => {
      return { ...token, ...user };
    },
    session: async ({ session, token }) => {
      if (!token) return token;
      return { ...session, user: token };
    },
  },
};

export default nextAuth(authOptions);
