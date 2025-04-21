"use client";

import { LuChartNoAxesCombined } from "react-icons/lu";
import { FiUsers } from "react-icons/fi";
import { PiShoppingCartLight } from "react-icons/pi";
import { IoWalletOutline } from "react-icons/io5";
import { IoIosLogOut } from "react-icons/io";
import MenuItem from "./MenuItem";
import { UserSession } from "./UserSession";
import logoutAction from "@/app/(auth)/(logout)/logoutAction";


export default function MenuLista() {
    return (
        <nav className="flex flex-col gap-1 pt-10 h-screen justify-between">
            <div>
                <div className="mb-6">
                    {/* <span>Nome: {userName || ""}</span> */}
                    {/* <UserSession />  */}
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
                    texto="Cadastro de Parcelass"
                />
            </div>
                <button onClick={logoutAction} className="w-full">
                    <MenuItem icone={IoIosLogOut} url="#" texto="Sair" />
                </button>
            <div className="mb-10">
                <MenuItem icone={IoIosLogOut} url="#" texto="Sair" />
            </div>
        </nav>
    );
}
