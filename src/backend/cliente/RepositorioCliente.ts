import { Cliente } from "@/core/model/Cliente";
import { PrismaClient } from "@prisma/client";

export default class RepositorioCliente {

    static async salvar(cliente: Cliente): Promise<Cliente> {
        const db = new PrismaClient();

        try {
            if (!cliente.id && !cliente.whatsapp) {
                throw new Error("É necessário fornecer 'id' ou 'whatsapp' para realizar o upsert.");
            }

            const identificador = cliente.id
                ? { id: cliente.id }
                // : { whatsapp: cliente.whatsapp };
                : { whatsapp: cliente.whatsapp ?? "" };

            const { id, ...dadosCliente } = cliente;

            console.log(id)



            const clienteSalvo = await db.cliente.upsert({
                where: identificador,
                update: dadosCliente,
                create: dadosCliente,
            });

            return clienteSalvo as Cliente;

        } finally {
            await db.$disconnect();
        }
    }

    static async obterTodosClientes(): Promise<Cliente[]> {
        const db = new PrismaClient();

        try {
            const clientes = await db.cliente.findMany({
                orderBy: { nome: 'asc' }
            });
            return clientes as Cliente[];

        } finally {
            await db.$disconnect();
        }
    }

    static async obterPorId(id: string): Promise<Cliente> {
        const db = new PrismaClient();

        try {
            const cliente = await db.cliente.findUnique({
                where: { id: parseInt(id) },
            });
            return cliente as Cliente;

        } finally {
            await db.$disconnect();
        }
    }

    static async excluir(id: string): Promise<void> {
        const db = new PrismaClient();

        try {
            await db.cliente.delete({
                where: { id: parseInt(id) }
            });
            
        } finally {
            await db.$disconnect();
        }
    }
}
