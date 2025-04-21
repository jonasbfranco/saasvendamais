'use client';

import { useEffect, useState } from "react";
import { Combobox } from "@headlessui/react";
import { Cliente } from "@/core/model/Cliente";

interface SelectClienteProps {
  clienteId?: number;
  onChange: (id: number | undefined) => void;
}

export default function SelectCliente({ clienteId, onChange }: SelectClienteProps) {
  const [clientes, setClientes] = useState<Cliente[]>([]);
  const [query, setQuery] = useState("");
  const [selectedCliente, setSelectedCliente] = useState<Cliente | null>(null);

  useEffect(() => {
    async function carregarClientes() {
      const resposta = await fetch("/api/clientes");
      const dados = await resposta.json();
      setClientes(dados);
    }
    carregarClientes();
  }, []);

  useEffect(() => {
    const encontrado = clientes.find(c => c.id === clienteId);
    if (encontrado) setSelectedCliente(encontrado);
  }, [clienteId, clientes]);

  const clientesFiltrados = query === ""
    ? clientes
    : clientes.filter((cliente) =>
        cliente.nome.toLowerCase().includes(query.toLowerCase())
      );

  return (
    <div className="w-full">
      <Combobox value={selectedCliente} onChange={(cliente) => {
        setSelectedCliente(cliente);
        onChange(cliente?.id);
      }}>
        <Combobox.Label className="block mb-1 text-sm font-medium text-gray-700">
          Cliente
        </Combobox.Label>
        <div className="relative">
          <Combobox.Input
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            displayValue={(cliente: Cliente) => cliente?.nome ?? ""}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Buscar cliente..."
          />
          <Combobox.Options className="absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-auto">
            {clientesFiltrados.length === 0 && (
              <div className="px-4 py-2 text-gray-500">Nenhum cliente encontrado.</div>
            )}
            {clientesFiltrados.map((cliente) => (
              <Combobox.Option
                key={cliente.id}
                value={cliente}
                className={({ active }) =>
                  `px-4 py-2 cursor-pointer ${active ? "bg-blue-500 text-white" : "text-gray-900"}`
                }
              >
                {cliente.nome}
              </Combobox.Option>
            ))}
          </Combobox.Options>
        </div>
      </Combobox>
    </div>
  );
}
