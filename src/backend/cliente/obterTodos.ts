"use server";

import RepositorioCliente from "./RepositorioCliente";

export default async function obterTodosClientes() {
    return RepositorioCliente.obterTodosClientes();
}
