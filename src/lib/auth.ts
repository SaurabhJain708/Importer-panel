import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { AppUser } from "@/models/user.model";
import { mongoDb } from "./dbConnect";
import GoogleProvider from "next-auth/providers/google";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import clientPromise from "./dbClient";

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

        const user = await AppUser.findOne({ email: credentials.email });
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
    async session({ session }) {
      const db = (await clientPromise).db();
      const newuser =await db
        .collection("users")
        .findOne({ email: session.user.email });
      if (newuser) {
        session.user.id = newuser._id.toString();
        session.user.role = newuser.isAdmin ?? "user";
      }
      return session;
    },
    async signIn({ user, account }) {
      const db = (await clientPromise).db();
      const updatedUser = await db.collection("users").updateOne(
        { email: user.email },
        {
          $setOnInsert: { isAdmin: false },
        },
        { upsert: true }
      );
      if(updatedUser){
        return true
      }
      return false
    },
  },
  pages: {
    signIn: "/login",
    error: "/login",
  },
  session: {
    strategy: "database",
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  adapter: MongoDBAdapter(clientPromise),
  secret: process.env.NEXTAUTH_SECRET,
};
