"use server";

import { Receita } from "@/core/model/Receita";
import RepositorioReceita from "./RepositorioReceita";


// import Id from "@/core/utils/Id";

export default async function salvarReceita(receita: Partial<Receita>) {
    const novaReceita = {
        ...receita,
        // id: cliente.id ?? Id.novo,
    };

    return RepositorioReceita.salvar(novaReceita as Receita);
}
