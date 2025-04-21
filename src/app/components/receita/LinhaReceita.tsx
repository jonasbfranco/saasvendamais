import DataFormatada from '../shared/DataFormatada';
import ValorFormatado from "../shared/ValorFormatado"
import { Receita } from "@/core/model/Receita";

export interface LinhaReceitaProps {
    receita: Receita
    onClick?: (receita: Receita) => void
}

export default function LinhaReceita(props: LinhaReceitaProps) {
    return (
        <div onClick={() => props.onClick?.(props.receita)} className="flex bg-zinc-900 p-4 rounded-md cursor-pointer">
            <div className="flex flex-col gap-1">
                <span className="text-md text-zinc-300">{props.receita.cliente.nome}</span>
                {/* <span className="text-md text-zinc-300">{props.receita.clienteId}</span> */}
                <span className="text-md text-zinc-300">{props.receita.descricao}</span>
                <span className="text-sm text-zinc-400"><DataFormatada data={props.receita.data} /></span>
                {/* <span className="text-sm text-zinc-400">{props.receita.data.toLocaleDateString("pt-BR")}</span> */}
                {/* <span className="text-sm text-zinc-400"><DataFormatada data={props.receita.data} formato="completo" /></span> */}
                {/* <span className="text-sm text-zinc-400"><DataFormatada data={props.receita.data} formato="extenso" /></span> */}
                {/* <span className="text-md text-zinc-300"><DataFormatada data={props.receita.data} /></span> */}
                <span className="text-md font-black text-zinc-300"><ValorFormatado valor={props.receita.valor} /></span>
            </div>
        </div>
        
    )
}

