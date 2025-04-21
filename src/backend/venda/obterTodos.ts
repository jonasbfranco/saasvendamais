"use server";

import RepositorioVenda from "./RepositorioVenda";

export default async function obterTodasVendas() {
    return RepositorioVenda.obterTodasVendas();
}
