/*
  Warnings:

  - A unique constraint covering the columns `[data]` on the table `receita` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[data]` on the table `venda` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "receita_data_key" ON "receita"("data");

-- CreateIndex
CREATE UNIQUE INDEX "venda_data_key" ON "venda"("data");
