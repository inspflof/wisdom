/*
  Warnings:

  - A unique constraint covering the columns `[imdbId]` on the table `Episodes` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[imdbId]` on the table `Movies` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[imdbId]` on the table `Series` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Episodes_imdbId_key" ON "Episodes"("imdbId");

-- CreateIndex
CREATE UNIQUE INDEX "Movies_imdbId_key" ON "Movies"("imdbId");

-- CreateIndex
CREATE UNIQUE INDEX "Series_imdbId_key" ON "Series"("imdbId");
