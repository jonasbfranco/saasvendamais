// import { DollarSign } from "lucide-react";

type ValorFormatadoProps = {
  valor: number | null;
};

export default function ValorFormatado({ valor }: ValorFormatadoProps) {
  const formatado = valor.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 2,
  });

  const cor = valor < 0 ? "text-red-500" : "text-green-500";

  return <span className={cor}>{formatado}</span>;

  /* return (
    <span className={`flex items-center gap-1 ${cor}`}>
      <DollarSign size={14} />
      {formatado}
    </span>
  ); */
}
