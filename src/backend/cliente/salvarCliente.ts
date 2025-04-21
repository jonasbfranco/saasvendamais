"use server";

import { Cliente } from "@/core/model/Cliente";
//import Id from "@/core/utils/Id";
import RepositorioCliente from "./RepositorioCliente";

export default async function salvarCliente(cliente: Partial<Cliente>) {
    const novoCliente = {
        ...cliente,
        // id: cliente.id ?? Id.novo,
    };

    return RepositorioCliente.salvar(novoCliente as Cliente);
}
