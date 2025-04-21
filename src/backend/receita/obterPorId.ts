"use server";

import RepositorioReceita from "./RepositorioReceita";


export default async function obterPorIdReceita(id: string) {
    return RepositorioReceita.obterPorId(id);
}
