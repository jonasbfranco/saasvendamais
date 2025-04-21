"use server";

import RepositorioVenda from "./RepositorioVenda";

export default async function excluirVenda(id: string) {
    return RepositorioVenda.excluir(id);
}
