-- CreateTable
CREATE TABLE "venda" (
    "id" SERIAL NOT NULL,
    "descricao" TEXT,
    "valor" DOUBLE PRECISION NOT NULL,
    "data" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "clienteId" INTEGER NOT NULL,

    CONSTRAINT "venda_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "venda" ADD CONSTRAINT "venda_clienteId_fkey" FOREIGN KEY ("clienteId") REFERENCES "cliente"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
