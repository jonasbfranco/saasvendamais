"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function DashboardPage() {

  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    }
  }, [status, router]);

  if (status === "loading") return <p>Carregando...</p>;
  

  return (
    <div className="p-6">
      <header className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <div className="text-right">
          <p className="font-semibold">Olá, {session?.user?.name}!</p>
          <p className="text-sm text-gray-600">{session?.user?.email}</p>
        </div>
      </header>

      {/* Conteúdo principal */}
      <main>
        <p>Conteúdo do sistema aqui...</p>
      </main>
    </div>
  );
}
