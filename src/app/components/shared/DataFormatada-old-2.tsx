// components/DataFormatada.tsx

type DataFormatadaProps = {
  data: Date;
  formato?: "curto" | "completo" | "extenso";
};

export default function DataFormatada({ data, formato = "curto" }: DataFormatadaProps) {
  // Clona a data e ajusta o horário manualmente
  const dataCorrigida = new Date(data);
  dataCorrigida.setHours(12); // meio-dia evita shift no fuso horário

  console.log(dataCorrigida)

  let formatada = "";

  switch (formato) {
    case "completo":
      formatada = dataCorrigida.toLocaleString("pt-BR", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit"
      });
      break;
    case "extenso":
      formatada = dataCorrigida.toLocaleDateString("pt-BR", {
        day: "2-digit",
        month: "long",
        year: "numeric"
      });
      break;
    default:
      formatada = dataCorrigida.toLocaleDateString("pt-BR");
      break;
  }

  return <span>{formatada}</span>;
}
