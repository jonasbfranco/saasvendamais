'use client'

import { useRouter } from "next/navigation";

export default function BotaoVoltar() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className="mt-6 px-4 py-2 bg-zinc-700 text-white rounded-md hover:bg-zinc-600 transition"
    >
      🔙 Voltar
    </button>
  );
}
