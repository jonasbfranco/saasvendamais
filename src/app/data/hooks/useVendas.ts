import Backend from "@/backend";
import { Venda } from "@/core/model/Venda";
import { useEffect, useState } from "react";

export default function useVendas() {

    const [vendas, setVendas] = useState<Venda[]>([]);
    const [venda, setVenda] = useState<Partial<Venda> | null>(null);

    useEffect(() => {
        Backend.vendas.obter().then(setVendas)
    },[]);

    async function salvar() {
        //Salvar no banco de dados
        if (!venda) return;
        await Backend.vendas.salvar(venda)
        const vendas = await Backend.vendas.obter()
        setVendas(vendas)
        setVenda(null)
    };


    async function excluir() {
        //Excluir do banco de dados
        if (!venda || !venda.id) return;
        await Backend.vendas.excluir(String(venda.id))
        const vendas = await Backend.vendas.obter()
        setVendas(vendas)
        setVenda(null)
    };

    return {
        vendas,
        venda,
        salvar,
        excluir,
        cancelar: () => setVenda(null),
        alterarVenda: (venda: Partial<Venda> | null) => setVenda(venda),
    }

};