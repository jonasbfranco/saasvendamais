import { Receita } from "@/core/model/Receita";
import { PrismaClient } from "@prisma/client";

export default class RepositorioReceita {
    private static db: PrismaClient = new PrismaClient();

    static async salvar(receita: Receita): Promise<Receita> {

        if (!receita.id && !receita.data) {
            throw new Error("É necessário fornecer 'id' ou 'data' para realizar o upsert.");
        }

        const identificador = receita.id
            ? { id: receita.id }
            : { data: new Date(receita.data) };

        // console.log("upsert where:", identificador);

        const { id, cliente, ...dadosReceita } = receita;

        // Converte clienteId e valor para os tipos esperados
        const dadosTratados = {
            ...dadosReceita,
            clienteId: Number(receita.clienteId),
            valor: Number(receita.valor),
            data: new Date(receita.data),
        };

        // console.log("⬆️ Upsert WHERE:", identificador);
        // console.log("📦 Upsert DATA:", dadosTratados);

        // Executa o upsert
        return await this.db.receita.upsert({
            where: identificador,
            update: dadosTratados,
            create: dadosTratados,
        });
    }

    static async obterTodasReceita(): Promise<Receita[]> {
        const receita = await this.db.receita.findMany({
            include: {
                cliente: true,
              },
            orderBy: {
                data: 'asc',
            }
        });

        return receita as Receita[];
    }

    static async obterPorId(id: string): Promise<Receita> {
        const receita = await this.db.receita.findUnique({
            where: { id: parseInt(id) },
        });

        return receita as Receita;
    }

    static async excluir(id: string): Promise<void> {
        await this.db.receita.delete({ where: { id: parseInt(id) } });
    }


    static async obterReceitasClientes(id: string): Promise<Receita[]> {
            const receita = await this.db.receita.findMany({
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
    
            return receita as Receita[];
        }


}
