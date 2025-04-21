'use client';

import { FiUsers } from "react-icons/fi";
import { PiShoppingCartLight } from "react-icons/pi";
import { IoWalletOutline } from "react-icons/io5";
import { IoIosLogOut } from "react-icons/io";
import { LuChartNoAxesCombined } from "react-icons/lu";
import { useSession } from "next-auth/react";
import logoutAction from "@/app/(auth)/(logout)/logoutAction";
import MenuItem from "./MenuItem";
import { FaUserCircle } from "react-icons/fa";

export default function Menu() {
    const { data: session } = useSession();

    const userName = session?.user?.name ?? "Usuário";
    const userEmail = session?.user?.email ?? "";

    return (
        <aside className="w-72 bg-zinc-800 h-screen fixed text-white">
            <nav className="flex flex-col gap-1 pt-10 h-screen justify-between">
                {/* Navegação */}
                <div>
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

                {/* Info do Usuário + Logout */}
                <div className="mb-6 px-4">
                    <div className="flex items-center gap-3 mb-3">
                        {session?.user?.image ? (
                            <img
                                src={session.user.image}
                                alt="Avatar"
                                className="w-10 h-10 rounded-full"
                            />
                        ) : (
                            <FaUserCircle className="w-10 h-10 text-gray-400" />
                        )}
                        <div className="flex flex-col">
                            <span className="font-semibold text-sm">{userName}</span>
                            <span className="text-xs text-gray-400">{userEmail}</span>
                        </div>
                    </div>
                    <button
                        onClick={logoutAction}
                        className="flex items-center gap-2 text-md text-red-400 hover:text-red-300 transition mb-10"
                    >
                        <IoIosLogOut className="text-2xl" />
                        Sair
                    </button>
                </div>
            </nav>
        </aside>
    );
}
