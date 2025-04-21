"use server";

import db from "@/lib/db";
import { hashSync } from "bcrypt-ts";
import { redirect } from "next/navigation";

export default async function registerAction(_prevState: unknown, formData: FormData) {
    const entries = Array.from(formData.entries());
    const data = Object.fromEntries(entries) as {
        name: string;
        email: string;
        password: string;
    };
    console.log("==== Server Action Register User ====");
    console.log(data);

    // se não tiver email, nome ou senha
    if (!data.name || !data.email || !data.password) {
        //throw new Error("Você precisa passar todos os dados!");
        return {
            message: "Preencha todos os campos",
            success: false,
        };
    }

    // se um usuário já existe
    const user = await db.user.findUnique({
        where: {
            email: data.email,
        },
    });

    if (user) {
        //throw new Error("Usuário já existe!");
        return {
            message: "Este usuário já existe",
            success: false,
        };
    }

    // se não existir cria o usuario
    await db.user.create({
        data: {
            name: data.name,
            email: data.email,
            password: hashSync(data.password),
            active: false,
        },
    });

    /* eturn {
        message: "Usuário criado com sucesso",
        success: true,
    }; */

    return redirect("/login");
}
