export interface Cliente {
    id: number;
    nome: string;
    whatsapp?: string | null;
    cidade?: string | null;
    estado?: string | null;
    ativo: boolean;
}
