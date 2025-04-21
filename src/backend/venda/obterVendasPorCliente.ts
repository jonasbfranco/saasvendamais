"use server";

import RepositorioVenda from "./RepositorioVenda";



export default async function obterVendasClientes(id: string) {
    return RepositorioVenda.obterVendasClientes(id);
}
