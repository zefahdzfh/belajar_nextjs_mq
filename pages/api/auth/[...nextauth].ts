import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",

      credentials: {},
      async authorize(credentials:any, req) {
        console.log('credentials',credentials);
        

        return{
          ...credentials
        }
        
      },
    }),
  ],

  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      return true
    },
    async redirect({ url, baseUrl }) {
      return baseUrl
    },
    async jwt({ token, user, account, profile, isNewUser }) {
      console.log('token', token);
      console.log('user', user);
      return {...token, ...user}
    },
    async session({ session, user, token }) {
      console.log('user session', user);
      console.log('token session', token);
      console.log('session', session);

      session.user.id = Number(token.id);
      session.user.name = token.name;
      session.user.email = token.email;
      session.user.accessToken = token.accessToken;
      session.user.refreshToken = token.refreshToken;
      
      return session
    },
}
};

export default NextAuth(authOptions);
