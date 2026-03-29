-- CreateTable
CREATE TABLE "Movies" (
    "id" SERIAL NOT NULL,
    "imdbId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "url" TEXT NOT NULL,

    CONSTRAINT "Movies_pkey" PRIMARY KEY ("id")
);
