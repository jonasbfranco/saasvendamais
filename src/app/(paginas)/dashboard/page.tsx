'use client';

import Pagina from "@/app/components/template/Pagina";
import Titulo from "@/app/components/template/Titulo";
import { FiUsers } from "react-icons/fi";
import { GiMoneyStack } from "react-icons/gi";
import { HiOutlineCurrencyDollar } from "react-icons/hi";
import { IoWalletOutline } from "react-icons/io5";
import { LuChartNoAxesCombined } from "react-icons/lu";
import { MdOutlineShoppingBag } from "react-icons/md";
import { PiShoppingCartLight } from "react-icons/pi";



export default function PageDashboard() {    

    return (
        <Pagina className="flex flex-col gap-10">
            <Titulo
                icone={LuChartNoAxesCombined}
                principal="Dashboard"
                secundario="Gerencie seus clientes, vendas e recebíveis"
            />
            
            <div className="flex flex-col mt-10 gap-10">

                <div className="grid grid-cols-3 gap-10">
                    <div className="flex bg-blue-700 rounded-md p-6 text-zinc-300 gap-4">
                        <PiShoppingCartLight size={100} />
                        <div>
                            <span className="text-md font-extralight">Valor em vendas</span>
                            <p className="text-6xl font-bold">1100</p>
                        </div>
                    </div>
                    <div className="flex bg-fuchsia-700 rounded-md p-6 text-zinc-300 gap-4">
                        <IoWalletOutline size={100} />
                        <div>
                            <span className="text-md font-extralight">Valor em recebimentos</span>
                            <p className="text-6xl font-bold">800</p>
                        </div>
                    </div>
                    <div className="flex bg-cyan-700 rounded-md p-6 text-zinc-300 gap-4">
                        <GiMoneyStack size={100} />
                        <div>
                            <span className="text-md font-extralight">Total</span>
                            <p className="text-6xl font-bold">300</p>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-3 gap-10">
                    <div className="flex bg-emerald-700 rounded-md p-6 text-zinc-300 gap-4">
                        <FiUsers size={100} />
                        <div>
                            <span className="text-md font-extralight">Total de Clientes</span>
                            <p className="text-6xl font-bold">11</p>
                        </div>
                    </div>
                    <div className="flex bg-indigo-700 rounded-md p-6 text-zinc-300 gap-4">
                        <MdOutlineShoppingBag size={100} />
                        <div>
                            <span className="text-md font-extralight">Total de vendas</span>
                            <p className="text-6xl font-bold">34</p>
                        </div>
                    </div>
                    <div className="flex bg-lime-700 rounded-md p-6 text-zinc-300 gap-4">
                        <HiOutlineCurrencyDollar size={100} />
                        <div>
                            <span className="text-md font-extralight">Total de Recebimentos</span>
                            <p className="text-6xl font-bold">20</p>
                        </div>
                    </div>
                </div>

            </div>
            
        </Pagina>
    )
}


    