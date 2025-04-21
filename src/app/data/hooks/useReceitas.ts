import Backend from "@/backend";
import { Receita } from "@/core/model/Receita";
import { useEffect, useState } from "react";

export default function useReceitas() {

    const [receitas, setReceitas] = useState<Receita[]>([]);
    const [receita, setReceita] = useState<Partial<Receita> | null>(null);

    useEffect(() => {
        Backend.receitas.obter().then(setReceitas)
    },[]);

    async function salvar() {
        //Salvar no banco de dados
        if (!receita) return;
        await Backend.receitas.salvar(receita)
        const receitas = await Backend.receitas.obter()
        setReceitas(receitas)
        setReceita(null)
    };


    
    async function excluir() {
        //Excluir do banco de dados
        if (!receita || !receita.id) return;
        await Backend.receitas.excluir(String(receita.id))
        const novasReceitas = await Backend.receitas.obter()
        setReceitas(novasReceitas)
        setReceita(null)
    };


    return {
        receitas,
        receita,
        salvar,
        excluir,
        cancelar: () => setReceita(null),
        alterarReceita: (receita: Partial<Receita> | null) => setReceita(receita),
    }

};