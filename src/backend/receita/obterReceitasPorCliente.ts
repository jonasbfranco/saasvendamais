"use server";

import RepositorioReceita from "./RepositorioReceita";



export default async function obterReceitasClientes(id: string) {
    return RepositorioReceita.obterReceitasClientes(id);
}
