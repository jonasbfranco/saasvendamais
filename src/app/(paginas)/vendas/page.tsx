'use client';

import Pagina from "@/app/components/template/Pagina";
import Titulo from "@/app/components/template/Titulo";
import FormularioVenda from "@/app/components/venda/FormularioVenda";
import ListaVendas from "@/app/components/venda/ListaVenda";
import useVendas from "@/app/data/hooks/useVendas";
import { FaPlus } from "react-icons/fa";
import { PiShoppingCartLight } from "react-icons/pi";

 export default function PageVenda() {

    const { venda, vendas, salvar, excluir, alterarVenda } = useVendas()

    return (
        <Pagina className="flex flex-col gap-10">
            <Titulo
                icone={PiShoppingCartLight}
                principal="Vendas"
                secundario="Gerencie suas vendas"
            />
            {venda ? (
                <FormularioVenda 
                    venda={venda} 
                    // onChange={setCliente}
                    onChange={alterarVenda}
                    salvar={salvar}
                    // cancelar={() => setCliente(null)}
                    cancelar={() => alterarVenda(null)}
                    excluir={excluir}
                    detalhes={() => setVenda(null)}
                />
            ) : (
                <>
                    <div className="flex justify-end">
                        <button className="flex items-center gap-2 cursor-pointer bg-blue-500 px-6 py-2 rounded-md" onClick={ () => alterarVenda({}) }>
                            <FaPlus />
                            <span>Nova Venda</span>
                        </button>
                    </div>
                    <ListaVendas vendas={vendas} onClick={alterarVenda} />
                </>
            )}
        </Pagina>
    )
}


    