import connectDB from "@/config/database";
import User from "@/models/User";

import GoogleProvider from "next-auth/providers/google";
export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          responseType: "code",
        },
      },
    }),
  ],
  callbacks: {
    //Invoke on successful signin
    async signIn({ profile }) {
      //1. connect database
      await connectDB();
      //2. check if user exists
      const userExists = await User.findOne({ email: profile.email });
      //3. if not, then add user to db
      if (!userExists) {
        // Truncate user name if too long
        const username = profile.name.slice(0, 20);
        await User.create({
          email: profile.email,
          username: username,
          image: profile.picture,
        });
      }
      //4. return true to allow signin
      return true;
    },
    //Modifies the session object
    async session({ session }) {
      // 1. get user from database
      const user = await User.findOne({ email: session.user.email });
      // 2. assign user id to session
      session.user.id = user._id.toString();
      session.role = user.role;
      // 3. return session
      return session;
    },
  },
};
