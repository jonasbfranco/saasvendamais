'use client';

import logoutAction from "@/app/(auth)/(logout)/logoutAction";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { IoWalletOutline } from "react-icons/io5";
import { LuChartNoAxesCombined } from "react-icons/lu";
import { MdArrowDropDown, MdArrowDropUp } from "react-icons/md";
import { PiShoppingCartLight } from "react-icons/pi";
import MenuItem from "./MenuItem";

export default function Menu() {
    const { data: session } = useSession();
    // console.log("Sessão carregada:", session);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const router = useRouter();

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

                {/* Dropdown do usuário */}
                <div className="mb-10 px-4 relative">
                    <button
                        onClick={() => setDropdownOpen(!dropdownOpen)}
                        className="flex items-center gap-3 w-full p-2 rounded-md hover:bg-zinc-700 transition"
                    >
                        {session?.user?.image ? (
                            <img
                                src={session.user.image}
                                alt="Avatar"
                                className="w-10 h-10 rounded-full"
                            />
                        ) : (
                            <FaUserCircle className="w-10 h-10 text-gray-400" />
                        )}
                        <div className="flex flex-col text-left flex-1">
                            <span className="font-semibold text-sm truncate max-w-[160px]">{userName}</span>
                            {/* <span className="font-semibold text-sm">{userName.length > 18 ? `${userName.slice(0, 18)}...` : userName}</span> */}
                            <span className="text-xs text-gray-400">{userEmail}</span>
                        </div>
                        {dropdownOpen ? (
                            <MdArrowDropUp size={24} />
                        ) : (
                            <MdArrowDropDown size={24} />
                        )}
                    </button>

                    {dropdownOpen && (
                        <div className="absolute bottom-16 left-4 bg-zinc-700 rounded-md w-[90%] shadow-lg z-10">
                            <ul className="flex flex-col py-2">
                                <li
                                    className="px-4 py-2 text-sm hover:bg-zinc-600 cursor-pointer"
                                    onClick={() => router.push("/perfil")}
                                >
                                    👤 Perfil
                                </li>
                                <li
                                    className="px-4 py-2 text-sm text-red-400 hover:bg-zinc-600 cursor-pointer"
                                    onClick={logoutAction}
                                >
                                    🚪 Sair
                                </li>
                            </ul>
                        </div>
                    )}
                </div>
            </nav>
        </aside>
    );
}
