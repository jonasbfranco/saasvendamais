"use client";

import { useEffect, useState } from "react";

export default function Saudacao() {
  const [mensagem, setMensagem] = useState("");

  useEffect(() => {
    const agora = new Date();
    const hora = agora.getHours();

    if (hora >= 0 && hora < 12) {
      setMensagem("Bom dia");
    } else if (hora >= 12 && hora < 18) {
      setMensagem("Boa tarde");
    } else {
      setMensagem("Boa noite");
    }
  }, []);

  return (
    <span className="text-lg font-semibold text-zinc-300">{mensagem}</span>
  );
}
