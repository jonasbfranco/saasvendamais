// src/app/api/clientes/route.ts
import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET() {
  const clientes = await prisma.cliente.findMany({
    orderBy: { nome: 'asc' },
  });
  return NextResponse.json(clientes);
}
