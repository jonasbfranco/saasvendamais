"use server";

import RepositorioCliente from "./RepositorioCliente";

export default async function excluirCliente(id: string) {
    return RepositorioCliente.excluir(id);
}
