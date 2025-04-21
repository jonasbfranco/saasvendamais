import { ElementType } from "react"

export interface TituloProps {
    principal: string
    secundario: string
    icone: ElementType
    //className?: string; // Added className as an optional property
}
export default function Titulo(props: TituloProps) {
    const Icone = props.icone;
    return (
        <div className="flex gap-2">
            <Icone className="text-zinc-200 font-bold" size={55} strokeWidth={1} />
            {/* < props.icone size={55} stroke={1} /> */}
            <div className="flex flex-col">
                <h1 className="text-2xl font-black">{props.principal}</h1>
                <h2 className="text-zinc-400">{props.secundario}</h2>
            </div>
        </div>
    )
}