// components/DataFormatada.tsx

type DataFormatadaProps = {
    data: Date;
    formato?: "curto" | "completo" | "extenso";
  };
  
  export default function DataFormatada({ data, formato = "curto" }: DataFormatadaProps) {
    // Clona a data e ajusta o horário manualmente
    const dataCorrigida = new Date(data);
    dataCorrigida.setHours(12); // meio-dia evita shift no fuso horário
  
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
  
  

  // formatada = dataCorrigida.toISOString().split('T')[0];



  import { TZDate } from "@date-fns/tz";
  import { addHours } from "date-fns";
  
  import { format } from "date-fns";
  import { TZDate } from "@date-fns/tz";
  import { ptBR } from "date-fns/locale";
  import { MdDataObject } from "react-icons/md";
  
  type DataFormatadaProps = {
    data: Date | string | null | undefined;
    formato?: "curto" | "completo" | "extenso";
  };
  
  export default function DataFormatada({
    data,
    formato = "curto"
  }: DataFormatadaProps) {
    const timeZone = "America/Sao_Paulo";
  
    // Converte a data para Date caso venha como string
    const dateObject = typeof data === "string" ? new Date(data) : data;
  
    console.log(dateObject)
  
    // Validação da data
    if (!dateObject || isNaN(dateObject.getTime())) {
      return <span>Data inválida</span>;
    }
  
    // Cria uma data com fuso horário
    const dataLocal = new TZDate(dateObject, timeZone);
  
    let formatoString = "dd/MM/yyyy";
    if (formato === "completo") formatoString = "dd/MM/yyyy HH:mm";
    else if (formato === "extenso") formatoString = "dd 'de' MMMM 'de' yyyy";
  
    const dataFormatada = format(dataLocal, formatoString, { locale: ptBR });
  
    return <span>{dataFormatada}</span>;
  }
  