"use server";

import { Venda } from "@/core/model/Venda";
import RepositorioVenda from "./RepositorioVenda";
// import Id from "@/core/utils/Id";


export default async function salvarVenda(venda: Partial<Venda>) {
    const novaVenda = {
        ...venda,
        // id: cliente.id ?? Id.novo,
    };

    return RepositorioVenda.salvar(novaVenda as Venda);
}
