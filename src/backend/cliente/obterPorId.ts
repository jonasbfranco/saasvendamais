"use server";

import RepositorioCliente from "./RepositorioCliente";

export default async function obterPorIdCliente(id: string) {
    return RepositorioCliente.obterPorId(id);
}
