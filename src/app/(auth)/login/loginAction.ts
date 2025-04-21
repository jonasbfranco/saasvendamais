'use server';

import { signIn } from "@/auth";
import { isRedirectError } from "next/dist/client/components/redirect-error";

export default async function loginAction(_prevState: unknown, formData: FormData) {

    try {
        await signIn('credentials', 
            {
                email: formData.get('email') as string,
                password: formData.get('password') as string,
                redirect: true,
                redirectTo: '/dashboard',
            }
        );
         return { success: true };

    } catch (e: unknown) {

        // Para resolver o erro do NEXT_REDIRECT (quando você desloga e tenta logar em seguida,
        // ele não consegue [gera uma mensagem de erro], mas se tentar novamente você consegue logar,
        // então esta validação com if (isRedirecError(e)) {throw(e);} é um fix para resolver este problema
        if (isRedirectError(e)) {
            throw e;
        }

        
        //if (e.type === 'CredentialsSignin') {
        if (typeof e === 'object' && e !== null && 'type' in e && (e as { type: string }).type === 'CredentialsSignin') {
            return { success: false, message: 'Dados de login incorretos.' };
        }

        /* if (typeof e === 'object' && e !== null && 'type' in e && (e as { type: string }).type === "CredentialsSignin") {
            if ('cause' in e && typeof (e as { cause: { message: string } }).cause?.message === "string" && (e as { cause: { message: string } }).cause.message === "not_active") {
              return {
                success: false,
                message: "Sua conta está inativa. Entre em contato com o administrador.",
              };
            }
        } */

        return { success: false, message: 'Ops, algum erro aconteceu' };
    }
}