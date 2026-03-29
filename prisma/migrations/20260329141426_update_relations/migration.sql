/*
  Warnings:

  - You are about to drop the `Videos` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Videos";

-- CreateTable
CREATE TABLE "Series" (
    "id" SERIAL NOT NULL,
    "imdbId" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Series_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Episodes" (
    "id" SERIAL NOT NULL,
    "imdbId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "serieId" INTEGER NOT NULL,

    CONSTRAINT "Episodes_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Episodes" ADD CONSTRAINT "Episodes_serieId_fkey" FOREIGN KEY ("serieId") REFERENCES "Series"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
