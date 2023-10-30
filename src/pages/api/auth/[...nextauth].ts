import NextAuth from "next-auth";
import TwitterProvider from "next-auth/providers/twitter";

import type {AuthOptions} from 'next-auth';

export const authOptions: AuthOptions = {
  // Configure one or more authentication providers
  providers: [
    TwitterProvider({
      clientId: process.env.TWITTER_ID as string,
      clientSecret: process.env.TWITTER_SECRET as string,
      version: '2.0',
    })
    // ...add more providers here
  ],
  secret: process.env.SECRET as string,
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      return true
    },
    async redirect({ url, baseUrl }) {
      return url;
    },
    async session({ session, user, token }) {
      // Send properties to the client, like an access_token from a provider.
      // session.user.id_token = token.id_token;
      return session
    },
    async jwt({ token, user, account, profile, isNewUser }) {
      // Persist the OAuth access_token to the token right after signin
      /*
      if (account) {
        token.id_token = account.id_token;
      }
      */
      return token
    }
  }
}
export default NextAuth(authOptions);
