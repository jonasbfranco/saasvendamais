// app/dashboard/layout.tsx
import { auth } from "@/auth";
import { redirect } from "next/navigation";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();

  if (!session) redirect("/login");

  return (
    <div>
      {/* <header className="p-4 bg-zinc-100 flex justify-between items-center">
        <h1 className="text-xl font-bold">Painel Administrativo</h1>
        <div className="text-right">
          <p>{session.user?.name}</p>
          <p className="text-sm text-gray-500">{session.user?.email}</p>
        </div>
      </header> */}
      <main className="">{children}</main>
    </div>
  );
}
