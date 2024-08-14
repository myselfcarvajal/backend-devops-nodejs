-- CreateEnum
CREATE TYPE "Sexo" AS ENUM ('MASCULINO', 'FEMENINO');

-- CreateEnum
CREATE TYPE "TipoIdentificacion" AS ENUM ('CEDULA', 'TARJETA_DE_IDENTIDAD', 'PASAPORTE');

-- CreateTable
CREATE TABLE "personas" (
    "Id" UUID NOT NULL,
    "TipoIdentificacion" "TipoIdentificacion" NOT NULL,
    "Primer_nombre" TEXT NOT NULL,
    "Segundo_nombre" TEXT,
    "Primer_apellido" TEXT NOT NULL,
    "Segundo_apellido" TEXT,
    "Sexo" "Sexo" NOT NULL,
    "Fecha_nacimiento" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "personas_pkey" PRIMARY KEY ("Id")
);
