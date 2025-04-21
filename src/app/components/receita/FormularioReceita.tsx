'use client';

import InputTexto from "../shared/InputTexto";
import { useEffect, useState } from "react";
import SelectCliente from "@/backend/venda/selectCliente";
import { Receita } from "@/core/model/Receita";
import { Cliente } from "@/core/model/Cliente";


export interface FormularioReceitaProps {
    receita: Partial<Receita>;
    onChange: (receita: Partial<Receita>) => void;
    salvar: () => void;
    cancelar: () => void;
    //detalhes: () => void;
    excluir: () => void;
}

export default function FormularioReceita(props: FormularioReceitaProps) {

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
                clienteId={props.receita?.clienteId}
                onChange={(id) => props.onChange?.({ ...props.receita, clienteId: id })}
            />

            <InputTexto
                label="Descrição da Receita"
                type="text"
                placeholder="Ex: Parcela do pagamento de abril"
                value={props.receita?.descricao ?? ""}
                onChange={
                    (e) => props.onChange?.({...props.receita, descricao: e.target.value})
                }
            />
            <div className="grid grid-cols-2 gap-4">
                <InputTexto
                    label="Valor da Receita/Recebimento"
                    type="number"
                    placeholder="Ex: 300"
                    value={props.receita?.valor ?? ""}
                    onChange={
                        (e) => props.onChange?.({...props.receita, valor: parseFloat(e.target.value)})
                    }
                />
                <InputTexto
                    label="Data da Receita/Recebimento"
                    // type="date"
                    type="datetime-local"
                    // placeholder="Ex: Santa Adélia"
                    // value={formatarDataInput(props.venda?.data ?? "")}
                    value={formatarDataHoraInput(props.receita?.data)}
                    onChange={
                        (e) => props.onChange?.({ ...props.receita, data: new Date(e.target.value) })
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
