//className="mt-6 px-4 py-2 bg-zinc-700 text-white rounded-md hover:bg-zinc-600 transition"


// BotaoVoltar.tsx
"use client"

import { useRouter } from "next/navigation";

export default function BotaoVoltar() {
    const router = useRouter();

    return (
        <button
            onClick={() => router.back()}
            className="px-10 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold shadow-md transition cursor-pointer"
        >
            Voltar
        </button>
    );
}
