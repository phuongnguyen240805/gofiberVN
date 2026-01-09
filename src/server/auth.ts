import { type GetServerSidePropsContext } from 'next';
import CredentialsProvider from "next-auth/providers/credentials";
import { medusaClient } from "@/lib/medusaClient";

/**
 * Mock auth session for Cloudflare Workers compatibility
 * Returns null as next-auth has been removed
 */

export const getServerAuthSession = async (ctx: {
  req: GetServerSidePropsContext['req'];
  res: GetServerSidePropsContext['res'];
}) => {
  return null;
};

export const authOptions = {
  callbacks: {
    // 1. Lưu token từ Medusa vào JWT của NextAuth
    async jwt({ token, user }) {
      if (user) {
        token.accessToken = (user as any).token; // Token từ loginUser mutation
      }
      return token;
    },
    // 2. Trả token ra session để frontend sử dụng
    async session({ session, token }) {
      if (session.user) {
        (session.user as any).jwt = token.accessToken;
      }
      return session;
    },
  },
  providers: [
    CredentialsProvider({
      name: "Medusa",
      credentials: {
        email: { type: "text" },
        password: { type: "password" }
      },
      async authorize(credentials) {
        // Gọi logic tRPC hoặc gọi trực tiếp medusaClient ở đây
        const response = await medusaClient.auth.login("customer", "emailpass", {
          email: credentials?.email,
          password: credentials?.password,
        });
        
        if (response) {
          // Trả về object để callback jwt nhận được
          return { id: "me", email: credentials?.email, token: response.token };
        }
        return null;
      }
    })
  ],
};
