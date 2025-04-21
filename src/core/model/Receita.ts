export interface Receita {
    id: number;
    descricao?: string | null;
    valor: number | null;
    data: Date;
    clienteId: number;
    cliente: {
        nome: string;
      };
}