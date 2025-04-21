import { Venda } from "@/core/model/Venda"
import DataFormatada from '../shared/DataFormatada';
import ValorFormatado from "../shared/ValorFormatado"

export interface LinhaVendaProps {
    venda: Venda
    onClick?: (venda: Venda) => void
}

export default function LinhaVenda(props: LinhaVendaProps) {
    return (
        <div onClick={() => props.onClick?.(props.venda)} className="flex bg-zinc-900 p-4 rounded-md cursor-pointer">
            <div className="flex flex-col gap-1">
                <span className="text-md text-zinc-300">{props.venda.cliente.nome}</span>
                {/* <span className="text-md text-zinc-300">{props.venda.clienteId}</span> */}
                <span className="text-md text-zinc-300">{props.venda.descricao}</span>
                <span className="text-sm text-zinc-400"><DataFormatada data={props.venda.data} /></span>
                {/* <span className="text-sm text-zinc-400">{props.venda.data.toLocaleDateString("pt-BR")}</span> */}
                {/* <span className="text-sm text-zinc-400"><DataFormatada data={props.venda.data} formato="completo" /></span> */}
                {/* <span className="text-sm text-zinc-400"><DataFormatada data={props.venda.data} formato="extenso" /></span> */}
                {/* <span className="text-md text-zinc-300"><DataFormatada data={props.venda.data} /></span> */}
                <span className="text-md font-black text-zinc-300"><ValorFormatado valor={props.venda.valor} /></span>
            </div>
        </div>
        
    )
}

