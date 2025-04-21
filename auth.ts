import { findUserByCredentials } from "@/lib/user";
import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"
 
export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [ Credentials({
    credentials: {
        email: {},
        password: {},
    },
    authorize: async (credentials) => {
        // console.log(credentials);

        // lógica de autenticação
        // procura usuário com credenciais
        const user = await findUserByCredentials(credentials.email as string, credentials.password as string);

        // se não autenticado, retorna null
        // return null;  //nunca vai conseguir autenticar
        // 🔒 Usuário não encontrado ou senha inválida
        // if (!user) return null;
        if (!user) return null;


        // 🚫 Usuário desativado
        //if (!user.active) {
          // Lança um erro que será capturado na página de login
          //throw new Error("not_active");
        //}


        // se autenticado, retorna user
        // ✅ Usuário autenticado e ativo
        return user;
        /* return {
          id: user.id,
          name: user.name,
          email: user.email,
        }; */
        
        
        // ##### TESTES #####
        // return null;  //nunca vai conseguir autenticar

        // sempre autentica, até sem passar nenhuma informação
        /* return {
            name: "Jonas B. Franco",
            email: "jonas@mail.com",
            password: "123",
        }; */
    },
  })],
  pages: {
    // Página personalizada de erro (opcional)
    error: "/invalidlogin", // podemos usar query params para saber o tipo do erro
  },
})
