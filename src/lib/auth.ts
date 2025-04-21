import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { User } from "@/models/user.model";
import { mongoDb } from "./dbConnect";
import GoogleProvider from "next-auth/providers/google";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "text",
          placeholder: "example@gmail.com",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        await mongoDb();

        if (!credentials?.email || !credentials?.password) return null;

        const user = await User.findOne({ email: credentials.email });
        if (!user) return null;

        const validPassword = await user.comparePassword(credentials.password);
        if (!validPassword) return null;

        return {
          id: user._id!.toString(),
          email: user.email,
          name: user.name,
          role: user.isAdmin ? "admin" : "user",
        };
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    async session({ session, token }) {
      session.user.id = token.id as string;
      session.user.role = token.role as string;
      return session;
    },
    async jwt({ token, user, account, profile }) {
      if (user) {
        await mongoDb();
        if (account?.provider === "google") {
          try {
            const existingUser = await User.findOne({ email: user.email });
            if (!existingUser) {
              const newUser = await User.create({
                email: user.email,
                name: user.name,
                image: user.image,
              });
              token.id = newUser.id;
              token.role = newUser.isAdmin ? "admin" : "user";
            } else {
              token.id = existingUser.id as string;
              token.role = existingUser.isAdmin ? "admin" : "user";
            }
          } catch (error) {
            console.log(error);
          }
        } else {
          token.id = user.id as string;
          token.role = user.role ?? "user" as string;
        }
      }
      return token;
    },
  },
  pages: {
    signIn: "/login",
    error: "/login",
  },
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  secret: process.env.NEXTAUTH_SECRET,
};
