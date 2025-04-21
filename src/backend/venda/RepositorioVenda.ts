import { Venda } from "@/core/model/Venda";
import { PrismaClient } from "@prisma/client";

export default class RepositorioVenda {
    private static db: PrismaClient = new PrismaClient();

    static async salvar(venda: Venda): Promise<Venda> {
        
        // Original
        /* return await this.db.cliente.upsert({
            where: { id: cliente.id },
            update: cliente,
            create: cliente,
        }); */

        if (!venda.id && !venda.data) {
            throw new Error("É necessário fornecer 'id' ou 'data' para realizar o upsert.");
        }

        const identificador = venda.id
            ? { id: venda.id }
            : { data: new Date(venda.data) };

        // console.log("upsert where:", identificador);

        const { id, cliente, ...dadosVenda } = venda;

        // Converte clienteId e valor para os tipos esperados
        const dadosTratados = {
            ...dadosVenda,
            clienteId: Number(venda.clienteId),
            valor: Number(venda.valor),
            data: new Date(venda.data),
        };

        // console.log("⬆️ Upsert WHERE:", identificador);
        // console.log("📦 Upsert DATA:", dadosTratados);

        // Executa o upsert
        return await this.db.venda.upsert({
            where: identificador,
            update: dadosTratados,
            create: dadosTratados,
        });
    }

    static async obterTodasVendas(): Promise<Venda[]> {
        const venda = await this.db.venda.findMany({
            include: {
                cliente: true,
              },
            orderBy: {
                data: 'asc',
            }
        });

        return venda as Venda[];
    }

    static async obterPorId(id: string): Promise<Venda> {
        const venda = await this.db.venda.findUnique({
            where: { id: parseInt(id) },
        });

        return venda as Venda;
    }

    static async excluir(id: string): Promise<void> {
        await this.db.venda.delete({ where: { id: parseInt(id) } });
    }

    static async obterVendasClientes(id: string): Promise<Venda[]> {
        const venda = await this.db.venda.findMany({
            include: {
                cliente: true,
              },
            where: {
                clienteId: parseInt(id),
            },
            orderBy: {
                data: 'asc',
            }
        });

        return venda as Venda[];
    }
}
