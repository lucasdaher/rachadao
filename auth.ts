import { findUserByCredentials } from "@/lib/user";
import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {},
      },

      authorize: async (credentials) => {
        console.log(credentials);

        // Faz a busca do usuário utilizando credentials
        const user = await findUserByCredentials(
          credentials.email as string,
          credentials.password as string
        );

        // Retorna usuário se ele for autenticado, se não retorna nulo.
        return user;
      },
    }),
  ],
});
