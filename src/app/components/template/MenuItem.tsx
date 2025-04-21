import Link from "next/link";
import { usePathname } from "next/navigation";
import { ElementType } from "react";

export interface MenuItemProps{
    icone: ElementType
    texto: string
    url: string
}
export default function MenuItem(props: MenuItemProps) {
    const Icone = props.icone; // Atribui o ícone para evitar erro de JSX inválido
    const pathname = usePathname();
    // console.log(pathname);
    
    return (
        <Link href={props.url} className={`${pathname === props.url ? ' border-l-2 border-green-300 bg-black' : ''} flex gap-2 px-4 py-4 hover:bg-black items-center`}>
        {/* <Link href={props.url} className="flex gap-2 px-4 py-4 hover:bg-black items-center" > */}
            <Icone className="text-zinc-200 font-bold" size={20} strokeWidth={2} />
            {/* <props.icone className="text-zinc-200 font-bold" size={24} stroke={2} /> */}
            <span className="text-zinc-200">{props.texto}</span>
        </Link>
    )
}