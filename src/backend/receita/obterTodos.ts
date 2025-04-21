"use server";

import RepositorioReceita from "./RepositorioReceita";


export default async function obterTodasReceitas() {
    return RepositorioReceita.obterTodasReceita();
}
