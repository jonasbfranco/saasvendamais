"use server";

import { signIn } from "@/auth";
import { AuthError } from "next-auth";
import { isRedirectError } from "next/dist/client/components/redirect-error";

export default async function loginAction(_prevState: unknown, formData: FormData) {
  try {

    await signIn("credentials", 
        {
            email: formData.get("email"),
            password: formData.get("password"),
            redirect: true,
            redirectTo: '/dashboard',
        }
    );

    return { success: true };

  } catch (error) {

    // Para resolver o erro do NEXT_REDIRECT (quando você desloga e tenta logar em seguida,
    // ele não consegue [gera uma mensagem de erro], mas se tentar novamente você consegue logar,
    // então esta validação com if (isRedirecError(e)) {throw(e);} é um fix para resolver este problema
    if (isRedirectError(error)) {
        throw error;
    }

    if (error instanceof AuthError) {
      if (error.type === "CredentialsSignin") {
        if (error.cause?.message === "not_active") {
          return {
            success: false,
            message: "Sua conta está inativa. Entre em contato com o administrador.",
          };
        }

        return {
          success: false,
          message: "Credenciais inválidas. Verifique seu e-mail e senha.",
        };
      }

      return {
        success: false,
        message: "Erro desconhecido durante o login. Tente novamente.",
      };
    }

    return {
      success: false,
      message: "Erro inesperado. Contate o suporte.",
    };
  }
}
