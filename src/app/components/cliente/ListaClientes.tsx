import { Cliente } from "@/core/model/Cliente";
// import clientes from "@/app/data/constants/clientes"; // Lista criada pelo chatGPT
import LinhaCliente from "./LinhaCliente";


export interface ListaClienteProps {
    clientes: Cliente[];
    onClick?: (cliente: Cliente) => void;
    excluir?: (id: string) => void;
}


export default function ListaClientes(props: ListaClienteProps) {
    return (
        <div className="flex flex-col gap-4">
            {props.clientes.map((cliente: Cliente) => {
                return <LinhaCliente key={cliente.id} cliente={cliente} onClick={props.onClick} excluir={props.excluir} />
        })}
        </div>
    );
}