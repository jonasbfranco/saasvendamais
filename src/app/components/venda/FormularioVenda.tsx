'use client';

import { Venda } from "@/core/model/Venda";
import InputTexto from "../shared/InputTexto";
import { useEffect, useState } from "react";
import { Cliente } from "@/core/model/Cliente";
import SelectCliente from "@/backend/venda/selectCliente";


export interface FormularioVendaProps {
    venda: Partial<Venda>;
    onChange: (venda: Partial<Venda>) => void;
    salvar: () => void;
    cancelar: () => void;
    // detalhes: () => void;
    excluir: () => void;
}

export default function FormularioVenda(props: FormularioVendaProps) {

    const [clientes, setClientes] = useState<Cliente[]>([]);

    console.log(clientes)

    /* function formatarDataInput(data?: Date) {
        if (!data) return '';
        return data.toISOString().split('T')[0];
    } */


    useEffect(() => {
        async function carregarClientes() {
          try {
            const resposta = await fetch("/api/clientes");
            const dados = await resposta.json();
            setClientes(dados);
          } catch (erro) {
            console.error("Erro ao buscar clientes:", erro);
          }
        }
        carregarClientes();
      }, []);



    function formatarDataHoraInput(data?: Date | string): string {
        if (!data) return "";
      
        const d = new Date(data);
        const ano = d.getFullYear();
        const mes = String(d.getMonth() + 1).padStart(2, "0");
        const dia = String(d.getDate()).padStart(2, "0");
        const hora = String(d.getHours()).padStart(2, "0");
        const minuto = String(d.getMinutes()).padStart(2, "0");
      
        return `${ano}-${mes}-${dia}T${hora}:${minuto}`;
      }

      
    return (

        <div className="flex flex-col gap-5">

            <SelectCliente
                clienteId={props.venda?.clienteId}
                onChange={(id) => props.onChange?.({ ...props.venda, clienteId: id })}
            />

            {/* <div className="flex flex-col">
                <label className="mb-1 font-medium">Cliente</label>
                <select
                    // className="border border-gray-300 rounded-md px-3 py-2"
                    className="bg-zinc-800 rounded-md px-3 py-2 focus:outline-none focus:border-2 border-zinc-200"
                    value={props.venda?.clienteId ?? ""}
                    onChange={(e) =>
                    props.onChange?.({
                        ...props.venda,
                        clienteId: Number(e.target.value),
                    })
                    }
                >
                    <option className="bg-zinc-800 rounded-md p-2 focus:outline-none focus:border-2 border-zinc-200" value="">Selecione um cliente</option>
                    {clientes.map((cliente) => (
                    <option key={cliente.id} value={cliente.id}>
                        {cliente.nome}
                    </option>
                    ))}
                </select>
            </div> */}
            
            
            {/* <InputTexto
                label="Cliente"
                type="text"
                placeholder="Ex: Maria de Nazaré"
                value={props.venda?.clienteId ?? ""}
                onChange={
                    (e) => props.onChange?.({...props.venda, clienteId: e.target.value})
                }
            /> */}
            <InputTexto
                label="Descrição da Venda"
                type="text"
                placeholder="Ex: Vestido longo azul marinho"
                value={props.venda?.descricao ?? ""}
                onChange={
                    (e) => props.onChange?.({...props.venda, descricao: e.target.value})
                }
            />
            <div className="grid grid-cols-2 gap-4">
                <InputTexto
                    label="Valor da Venda"
                    type="number"
                    placeholder="Ex: 1200"
                    value={props.venda?.valor ?? ""}
                    onChange={
                        (e) => props.onChange?.({...props.venda, valor: e.target.value})
                    }
                />
                <InputTexto
                    label="Data da Venda"
                    // type="date"
                    type="datetime-local"
                    // placeholder="Ex: Santa Adélia"
                    // value={formatarDataInput(props.venda?.data ?? "")}
                    value={formatarDataHoraInput(props.venda?.data)}
                    onChange={
                        (e) => props.onChange?.({ ...props.venda, data: new Date(e.target.value) })
                    }             
                />
            </div>
            <div className="flex justify-between">
                <div className="flex gap-5">
                    <button className="font-bold bg-blue-500 py-2 px-4 rounded-md cursor-pointer" onClick={props.salvar}>
                        Salvar
                    </button>
                    <button className="font-bold bg-zinc-500 py-2 px-4 rounded-md cursor-pointer" onClick={props.cancelar}>
                        Cancelar
                    </button>
                </div>
                {/* <div>
                    <button className="font-bold bg-green-500 py-2 px-4 rounded-md cursor-pointer" onClick={props.detalhes}>
                        Detalhes
                    </button>
                </div> */}
                <div>
                    <button className="font-bold bg-red-500 py-2 px-4 rounded-md cursor-pointer" onClick={props.excluir}>
                        Excluir
                    </button>
                </div>
            </div>
        </div>
    );
}
