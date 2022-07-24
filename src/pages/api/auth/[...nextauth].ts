import { NextApiRequest, NextApiResponse } from "next";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";

import { getMongoClient } from "../../../middleware/mongodb";

async function auth(request: NextApiRequest, response: NextApiResponse) {
  return NextAuth(request, response, {
    providers: [
      CredentialsProvider({
        // The name to display on the sign in form (e.g. 'Sign in with...')
        name: "Credentials",
        // The credentials is used to generate a suitable form on the sign in page.
        // You can specify whatever fields you are expecting to be submitted.
        // e.g. domain, username, password, 2FA token, etc.
        // You can pass any HTML attribute to the <input> tag through the object.
        credentials: {
          username: {
            label: "Username",
            type: "text",
            placeholder: "username",
          },
          password: {
            label: "Password",
            type: "password",
          },
        },
        async authorize(credentials, req) {
          // You need to provide your own logic here that takes the credentials
          // submitted and returns either a object representing a user or value
          // that is false/null if the credentials are invalid.
          // e.g. return { id: 1, name: 'J Smith', email: 'jsmith@example.com' }
          // You can also use the `req` object to obtain additional parameters
          // (i.e., the request IP address)
          const res = await fetch(`${process.env.NEXTAUTH_URL}/api/hello`, {
            method: "POST",
            body: JSON.stringify(credentials),
            headers: { "Content-Type": "application/json" },
          });
          const user = await res.json();

          //   console.log(user);
          // If no error and we have user data, return it
          if (res.ok && user) {
            return user;
          }
          // Return null if user data could not be retrieved
          return null;
        },
      }),
    ],
    session: {
      strategy: "jwt",
    },
    adapter: MongoDBAdapter(getMongoClient()),
    callbacks: {
      async signIn({ account }) {
        if (account.provider === "credentials") {
          return true;
        }

        return false;
      },

      async session({ session }) {
        console.log(session);
        const client = await getMongoClient();
        const user = await client
          .db(process.env.MONGODB_NAME)
          .collection("users")
          .findOne({ email: session?.user?.email });

        if (!user) {
          const userToAdd = {
            name: session?.user?.name,
            email: session?.user?.email,
            image: session?.user?.image,
            updatedAt: new Date(),
          };

          await client
            .db(process.env.MONGODB_NAME)
            .collection("users")
            .updateOne(
              { email: session?.user?.email },
              { $set: { ...userToAdd } },
              { upsert: true }
            );
        }

        return session;
      },
    },
    secret: process.env.NEXT_AUTH_SECRET,
  });
}

export default auth;
