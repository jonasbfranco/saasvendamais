
// import clientes from "@/app/data/constants/clientes"; // Lista criada pelo chatGPT

import { Receita } from "@/core/model/Receita";
import LinhaReceita from "./LinhaReceita";


export interface ListaReceitaProps {
    receitas: Receita[];
    onClick?: (receita: Receita) => void;
}

export default function ListaReceita(props: ListaReceitaProps) {
    return (
        <div className="flex flex-col gap-4">
            {props.receitas.map((receita: Receita) => {
                return <LinhaReceita key={receita.id} receita={receita} onClick={props.onClick} />;
            })}
        </div>
    );
}
