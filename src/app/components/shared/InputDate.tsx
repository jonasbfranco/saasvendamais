"use client";

import React from "react";

interface InputDataProps {
  label: string;
  value?: Date;
  onChange?: (data: Date) => void;
}

export default function InputData({ label, value, onChange }: InputDataProps) {
  // Converte a data Date para o formato aceito pelo input type="date"
  const formatDate = (date?: Date): string =>
    date ? date.toISOString().split("T")[0] : "";

  // Converte a string YYYY-MM-DD para Date
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const novaData = new Date(e.target.value);
    if (onChange) onChange(novaData);
  };

  return (
    <div className="flex flex-col gap-1 text-zinc-300">
      <label className="text-sm">{label}</label>
      <input
        type="date"
        className="bg-zinc-800 px-3 py-2 rounded-md outline-none text-white"
        value={formatDate(value)}
        onChange={handleChange}
      />
    </div>
  );
}
