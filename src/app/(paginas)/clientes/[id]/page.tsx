export const dynamic = "force-dynamic";

import BotaoVoltar from "@/app/components/shared/BotaoVoltar";
import Pagina from "@/app/components/template/Pagina";
import Backend from "@/backend";
import { notFound } from "next/navigation";
import { FaWhatsapp } from "react-icons/fa";


export default async function PaginaDetalhes({ params }: { params: { id: string } }) {
    const cliente = await Backend.clientes.obterPorId(params.id);
    if (!cliente) return notFound();

    const vendas = await Backend.vendas.obterVendasClientes(String(cliente.id));
    const receitas = await Backend.receitas.obterReceitasClientes(String(cliente.id));

    const totalVendas = vendas.reduce((soma, venda) => soma + venda.valor!, 0);
    const totalReceitas = receitas.reduce((soma, receita) => soma + receita.valor!, 0);
    const saldoDevedor = totalVendas - totalReceitas;

    return (

        <Pagina className="flex flex-col gap-10">

            <div className="p-10 text-zinc-100">
                <h1 className="text-2xl font-black mb-6 text-white">Detalhes do Cliente</h1>

                <div className="flex flex-col bg-zinc-900 rounded-xl shadow-lg p-6 space-y-4">

                    <div className="flex justify-between items-center">

                        <div>
                            <span className="text-sm text-zinc-400">Nome:</span>
                            <div className="text-lg font-bold">{cliente.nome}</div>
                        </div>

                        <div>
                            <span className="text-sm text-zinc-400">WhatsApp:</span>
                            <div className="flex items-center gap-2 text-green-300 hover:text-green-400 transition">
                                <FaWhatsapp size={16} />
                                <a href={`https://wa.me/${cliente.whatsapp}`} target="_blank" className="">
                                    {cliente.whatsapp}
                                </a>
                            </div>
                        </div>

                        <div>
                            <span className="text-sm text-zinc-400">Cidade:</span>
                            <div className="text-md">{cliente.cidade}</div>
                        </div>

                        <div>
                            <span className="text-sm text-zinc-400">Estado:</span>
                            <div className="text-md">{cliente.estado}</div>
                        </div>

                        {/* <div>
                            <span className="text-sm text-zinc-400">ID:</span>
                            <div className="text-md">{cliente.id}</div>
                        </div> */}

                    </div>

                    <div className="bg-zinc-700 rounded-md p-4 flex flex-col gap-4 items-center justify-center">
                        <div className="flex flex-col gap-2 items-center">
                            <span className="text-2xl text-zinc-200 font-bold">Saldo</span>
                            <div className={`text-2xl font-black ${saldoDevedor > 0 ? "text-red-500" : "text-green-500"}`}>
                                {saldoDevedor > 0 ? "-" : "+"} R$ {Math.abs(saldoDevedor).toFixed(2)}
                            </div>
                        </div>
                    </div>
                
                </div>

                <div className="mt-6">
                    <BotaoVoltar />
                </div>

            </div>

        </Pagina>
    );
}
