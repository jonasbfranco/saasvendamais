import { Cliente } from "@/core/model/Cliente";
import { PrismaClient } from "@prisma/client";

export default class RepositorioCliente {
    
    private static db: PrismaClient = new PrismaClient();

    static async salvar(cliente: Cliente): Promise<Cliente> {
        
        // Original
        /* return await this.db.cliente.upsert({
            where: { id: cliente.id },
            update: cliente,
            create: cliente,
        }); */

        if (!cliente.id && !cliente.whatsapp) {
            throw new Error("É necessário fornecer 'id' ou 'whatsapp' para realizar o upsert.");
        }

        const identificador = cliente.id
            ? { id: cliente.id }
            : { whatsapp: cliente.whatsapp };

        const { id, ...dadosCliente } = cliente;

        console.log(id)

        return await this.db.cliente.upsert({
            where: identificador,
            update: dadosCliente,
            create: dadosCliente,
        });

        
    }

    static async obterTodosClientes(): Promise<Cliente[]> {
        const cliente = await this.db.cliente.findMany({
            orderBy: {
                nome: 'asc',
            }
        });

        return cliente as Cliente[];
    }

    static async obterPorId(id: string): Promise<Cliente> {
        const cliente = await this.db.cliente.findUnique({
            where: { id: parseInt(id) },
        });

        return cliente as Cliente;
    }

    static async excluir(id: string): Promise<void> {
        await this.db.cliente.delete({ where: { id: parseInt(id) } });
    }

}
