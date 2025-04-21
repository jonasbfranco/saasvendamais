
// Funciona em server side

import { auth } from "@/auth";

export default async function NomeUsuario() {
    const session = await auth();
    const userName = session?.user?.name;

    return (
        <div className=" px-4">
            <span className="text-zinc-200 text-md">Bem vindo, <br /> {userName} !</span>
        </div>
    );
}