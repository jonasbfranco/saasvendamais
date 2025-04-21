"use client";

import Form from "next/form";
import registerAction from "./registerAction";
import { useActionState } from "react";


export default function RegisterForm() {

    //const data = useActionState(action, initialState);
    const [ state, formAction, isPending ] = useActionState(registerAction, null);

    return (
        <>
            <Form 
                /* action={ async (data) => {
                "use server";
                console.log(data)
                }} */ 
                action={formAction}
                className="flex flex-col bg-white rounded-2xl p-6 md:p-10">
                <div className="flex flex-col mb-2">
                    <p className="text-zinc-700 flex items-start text-3xl font-bold">Cadastre-se</p>
                    <p className="text-zinc-700 flex items-start text-1xl font-light opacity-50">Faça seu cadastro gratuitamente.</p>
                </div>
                <div className="flex flex-col">
                    {state?.success === false && (
                        <div className="flex flex-col text-md bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                            <strong className="font-bold">Erro!</strong> 
                            <span className="block sm:inline">{state?.message}</span> 
                        </div>
                    )};
                </div>
                <div className="flex flex-col gap-4 justify-center w-full">
                    <div className="flex flex-col gap-6">
                        <div className="flex flex-col">
                            <label className="text-zinc-500">Nome:</label>
                            <input type="text" name="name" /* required */ placeholder="digite seu nome"
                                className=" flex items-center justify-center w-full h-10 text-zinc-700 rounded-md p-2 bg-white border border-zinc-200 focus:outline-violet-300" />
                        </div>
                        <div className="flex flex-col">
                            <label className="text-zinc-500">E-mail:</label>
                            <input type="email" name="email" /* required */ placeholder="digite seu e-mail"
                                className=" flex items-center justify-center w-full h-10 text-zinc-700 rounded-md p-2 bg-white border border-zinc-200 focus:outline-violet-300" />
                        </div>
                        <div className="flex flex-col">
                            <label className="text-zinc-500">Senha:</label>
                            <input type="password" name="password" /* required */ placeholder="digite sua senha"
                                className=" flex items-center justify-center w-full h-10 text-zinc-700 rounded-md p-2 bg-white border border-zinc-200 focus:outline-violet-300" />
                        </div>
                        <div>
                            <button type="submit" disabled={isPending}
                            className="w-full bg-violet-700 text-white font-bold rounded-md h-12 hover:bg-violet-800 cursor-pointer">
                            Cadastro</button>
                        </div>
                    </div>
                </div>
            </Form>
        </>

    )
};