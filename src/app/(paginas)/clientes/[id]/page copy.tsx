// app/clientes/[id]/page.tsx

import BotaoVoltar from "@/app/components/shared/BotaoVoltar";
import Backend from "@/backend";
import { notFound } from "next/navigation";



export default async function PaginaDetalhes({ params }: { params: { id: string } }) {

    //   const cliente = await buscarClientePorId(params.id);
    const cliente = await Backend.clientes.obterPorId(params.id);
    console.log("Cliente:", cliente);

    if (!cliente) return notFound();


    const vendas = await Backend.vendas.obterVendasClientes(cliente.id);
    const receitas = await Backend.receitas.obterReceitasClientes(cliente.id);

    console.log("Vendas:", vendas);
    console.log("Receitas:", receitas);
    //return notFound();

    const totalVendas = vendas.reduce((soma, venda) => soma + venda.valor, 0);
    const totalReceitas = receitas.reduce((soma, receita) => soma + receita.valor, 0);
    const saldoDevedor = totalVendas - totalReceitas;

    //console.log(totalVendas);
    //console.log(totalReceitas);
    //console.log(saldoDevedor);


    return (
        <div className="p-10">
            <h1 className="text-2xl font-bold mb-6">Detalhes do Cliente</h1>

            <div className="bg-white rounded-md shadow-md p-6 space-y-4 text-zinc-800">
                <div><strong>Nome:</strong> {cliente.nome}</div>
                <div><strong>WhatsApp:</strong> {cliente.whatsapp}</div>
                <div><strong>Cidade:</strong> {cliente.cidade}</div>
                <div><strong>Estado:</strong> {cliente.estado}</div>
                <div><strong>ID:</strong> {cliente.id}</div>
                <div>
                    <strong>Saldo Devedor:</strong>{" "}
                    <span className={saldoDevedor > 0 ? "text-red-500 text-md font-bold" : "text-green-600 text-md font-bold"}>
                        {/* R$ {saldoDevedor.toFixed(2)} */}
                        {saldoDevedor > 0 ? '-' : '+'} R$ {Math.abs(saldoDevedor).toFixed(2)}
                    </span>
                </div>
            </div>
            <BotaoVoltar />
        </div>
    );
}
