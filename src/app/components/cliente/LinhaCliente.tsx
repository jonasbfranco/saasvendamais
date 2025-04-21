import { Cliente } from "@/core/model/Cliente"
import Link from "next/link"
import { FaEdit, FaTrash, FaWhatsapp } from "react-icons/fa"
import { FaMagnifyingGlass } from "react-icons/fa6"


export interface LinhaClienteProps {
    cliente: Cliente
    onClick?: (cliente: Cliente) => void
    excluir?: (id: string) => void
}



export default function LinhaCliente(props: LinhaClienteProps) {
    return (
        <div className="flex bg-zinc-900 p-4 rounded-md">
            <div className="flex flex-col flex-1 gap-1">
                <span className="text-xl font-black">{props.cliente.nome}</span>
                <span className="flex gap-1 text-sm text-green-300 cursor-pointer hover:text-green-400 hover:font-bold transition items-center w-fit">
                    <FaWhatsapp size={16} stroke="2" />
                    <Link href={`https://wa.me/${props.cliente.whatsapp}`} target="_blank">
                        {props.cliente.whatsapp}
                    </Link>
                </span>
                <span className="text-sm text-zinc-400">{props.cliente.cidade}</span>
            </div>
            <div className="flex gap-2 items-center">
                <Link href={`/clientes/${props.cliente.id}`} className="botao verde">
                    <FaMagnifyingGlass size={16}/>
                </Link>
                <button className="botao azul" onClick={() => props.onClick?.(props.cliente)}>
                    <FaEdit size={16}/>
                </button>
                <button className="botao vermelho" onClick={() => props.excluir?.(props.cliente.id!.toString())}>
                    <FaTrash size={16}/>
                </button>
            </div>
        </div>
    )
}