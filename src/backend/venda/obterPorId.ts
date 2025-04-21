"use server";

import RepositorioVenda from "./RepositorioVenda";



export default async function obterPorIdVenda(id: string) {
    return RepositorioVenda.obterPorId(id);
}
