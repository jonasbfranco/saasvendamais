
// import clientes from "@/app/data/constants/clientes"; // Lista criada pelo chatGPT

import { Venda } from "@/core/model/Venda";
import LinhaVenda from "./LinhaVenda";



export interface ListaVendaProps {
    vendas: Venda[];
    onClick?: (venda: Venda) => void;
}

export default function ListaVendas(props: ListaVendaProps) {
    return (
        <div className="flex flex-col gap-4">
            {props.vendas.map((venda: Venda) => {
                return <LinhaVenda key={venda.id} venda={venda} onClick={props.onClick} />;
            })}
        </div>
    );
}
