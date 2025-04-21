"use client";

import FormularioCliente from "@/app/components/cliente/FormularioCliente";
import ListaClientes from "@/app/components/cliente/ListaClientes";
import Pagina from "@/app/components/template/Pagina";
import Titulo from "@/app/components/template/Titulo";
import useClientes from "@/app/data/hooks/useClientes";
// import clientes from "@/app/data/constants/clientes";
import { FaPlus } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";

 export default function PageCliente() {

    //const router = useRouter();
    const { cliente, clientes, salvar, excluir, alterarCliente } = useClientes()

    

    return (
        <Pagina className="flex flex-col gap-10">
            <Titulo
                icone={FiUsers}
                principal="Clientes"
                secundario="Gerencie seus clientes"
            />
            { cliente ? (
                <FormularioCliente 
                    cliente={cliente} 
                    // onChange={setCliente}
                    onChange={alterarCliente}
                    salvar={salvar}
                    // cancelar={() => setCliente(null)}
                    cancelar={() => alterarCliente(null)}
                    //excluir={excluir}
                    //detalhes={() => router.push(`/clientes/${cliente.id}`)}
                />
            ) : (
                <>
                    <div className="flex justify-end">
                        <button className="flex items-center gap-2 cursor-pointer bg-blue-500 px-6 py-2 rounded-md" onClick={ () => alterarCliente({}) }>
                            <FaPlus />
                            <span>Novo Cliente</span>
                        </button>
                    </div>
                    <ListaClientes clientes={clientes} onClick={alterarCliente} excluir={excluir} />
                </>
            )}
            
        </Pagina>
    )
}


    