'use client';

import { Cliente } from "@/core/model/Cliente";
import InputTexto from "../shared/InputTexto";

export interface FormularioClienteProps {
    cliente: Partial<Cliente>;
    onChange: (cliente: Partial<Cliente>) => void;
    salvar: () => void;
    cancelar: () => void;
    detalhes: () => void;
    excluir: () => void;
}

export default function FormularioCliente(props: FormularioClienteProps) {
    return (
        <div className="flex flex-col gap-5">
            <InputTexto
                label="Nome"
                type="text"
                placeholder="Ex: Maria de Nazaré"
                value={props.cliente?.nome ?? ""}
                onChange={
                    (e) => props.onChange?.({...props.cliente, nome: e.target.value})
                }
            />
            <div className="grid grid-cols-3 gap-4">
                <InputTexto
                    label="Whatsapp"
                    type="text"
                    placeholder="Ex: +5517995429988"
                    value={props.cliente?.whatsapp ?? ""}
                    onChange={
                        (e) => props.onChange?.({...props.cliente, whatsapp: e.target.value})
                    }
                />
                <InputTexto
                    label="Cidade"
                    type="text"
                    placeholder="Ex: Santa Adélia"
                    value={props.cliente?.cidade ?? ""}
                    onChange={
                        (e) => props.onChange?.({...props.cliente, cidade: e.target.value})
                    }
                />
                <InputTexto
                    label="Estado"
                    type="text"
                    placeholder="Ex: SP"
                    value={props.cliente?.estado ?? ""}
                    onChange={
                        (e) => props.onChange?.({...props.cliente, estado: e.target.value})
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
