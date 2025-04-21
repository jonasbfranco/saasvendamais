// components/DataFormatada.tsx
import { TZDate } from "@date-fns/tz";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";


type DataFormatadaProps = {
  data: Date;
  formato?: "curto" | "completo" | "extenso";
};

export default function DataFormatada({ data, formato = "curto" }: DataFormatadaProps) {

  const timeZone = "America/Sao_Paulo";
  const data1 = new Date(data);
  
  // console.log("=== date1 ===")
  // console.log(data1)
  // console.log("=== date1 ===")

  
  /* const dateObj = new Date(data); // pode ser Date ou string ISO
  if (isNaN(dateObj.getTime())) {
    return <span>Data inválida</span>;
  } */

  // NÃO use TZDate(data, timezone), porque isso assume que `data` já é local
  // Aqui usamos TZDate como um Date que respeita fuso
  const tzDate = new TZDate(data1, timeZone)
  /* const tzDate = new TZDate(
    dateObj.getFullYear(),
    dateObj.getMonth(),
    dateObj.getDate(),
    timeZone
  ); */

  // console.log(tzDate)

  let formatoString = "dd/MM/yyyy";
  if (formato === "completo") formatoString = "dd/MM/yyyy HH:mm";
  else if (formato === "extenso") formatoString = "dd 'de' MMMM 'de' yyyy";

  const dataFormatada = format(tzDate, formatoString, { locale: ptBR }); 
  // const dataFormatada = format(tzDate, "dd/MM/yyyy - HH:mm", { locale: ptBR }); 
  // const dataFormatada = format(tzDate, "dd/MM/yyyy", { locale: ptBR }); 

  return <span>{dataFormatada}</span>;

}
