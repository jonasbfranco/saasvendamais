"use server";

import RepositorioReceita from "./RepositorioReceita";

export default async function excluirReceita(id: string) {
    return RepositorioReceita.excluir(id);
}
