// "use client";

import { useSession } from "next-auth/react";
import { FiUsers } from "react-icons/fi";
import MenuItem from "./MenuItem";
import { PiShoppingCartLight } from "react-icons/pi";
import { IoWalletOutline } from "react-icons/io5";
import { IoIosLogOut } from "react-icons/io";
import { LuChartNoAxesCombined } from "react-icons/lu";
import logoutAction from "@/app/(auth)/(logout)/logoutAction";

export default function Menu() {

    const { data: session } = useSession();

    return (
        <aside className="w-72 bg-zinc-800 h-screen fixed">
            <nav className="flex flex-col gap-1 pt-10 h-screen justify-between">
                
                    <div>
                        {/* Nome do usuário logado */}
                        <div className="px-6 pb-6">
                            <p className="text-sm text-zinc-400">Bem-vindo,</p>
                            <p className="font-bold text-lg">{session?.user?.name}</p>
                        </div>

                        <MenuItem 
                            icone={LuChartNoAxesCombined} 
                            url="/dashboard" 
                            texto="Dashboard" 
                        />
                        <MenuItem
                            icone={FiUsers}
                            url="/clientes"
                            texto="Cadastro de Clientes"
                        />
                        <MenuItem
                            icone={PiShoppingCartLight}
                            url="/vendas"
                            texto="Cadastro de Vendas"
                        />
                        <MenuItem
                            icone={IoWalletOutline}
                            url="/parcelas"
                            texto="Cadastro de Parcelas"
                        />
                    </div>
                    <div className="mb-10">
                        <button onClick={logoutAction} className=" w-full">
                            <MenuItem icone={IoIosLogOut} url="#" texto="Sair"/>
                        </button>
                    </div>

            </nav>
        </aside>
    );
}
