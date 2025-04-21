'use client';

import FormularioReceita from "@/app/components/receita/FormularioReceita";
import ListaReceita from "@/app/components/receita/ListaReceita";
import Pagina from "@/app/components/template/Pagina";
import Titulo from "@/app/components/template/Titulo";
import useReceitas from "@/app/data/hooks/useReceitas";
import { FaPlus } from "react-icons/fa";
import { IoWalletOutline } from "react-icons/io5";

 export default function PageParcelas() {

    const { receita, receitas, salvar, excluir, alterarReceita } = useReceitas()

    return (
        <Pagina className="flex flex-col gap-10">
            <Titulo
                icone={IoWalletOutline}
                principal="Parcelas"
                secundario="Gerencie suas parcelas"
            />
            { receita ? (
                <FormularioReceita 
                    receita={receita} 
                    onChange={alterarReceita}
                    salvar={salvar}
                    cancelar={() => alterarReceita(null)}
                    excluir={excluir}
                    //detalhes={() => setReceita(null)}
                />
            ) : (
                <>
                    <div className="flex justify-end">
                        <button className="flex items-center gap-2 cursor-pointer bg-blue-500 px-6 py-2 rounded-md" onClick={ () => alterarReceita({}) }>
                            <FaPlus />
                            <span>Nova Receita</span>
                        </button>
                    </div>
                    <ListaReceita receitas={receitas} onClick={alterarReceita} />
                </>
            )} 
            
        </Pagina>
    )
}


    