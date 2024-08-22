-- CreateTable
CREATE TABLE "personas" (
    "id" UUID NOT NULL,
    "tipo_identificacion" TEXT NOT NULL,
    "numero_identificacion" TEXT NOT NULL,
    "nombre1" TEXT NOT NULL,
    "nombre2" TEXT,
    "apellido1" TEXT NOT NULL,
    "apellido2" TEXT,
    "sexo" TEXT NOT NULL,
    "fecha_nacimiento" DATE NOT NULL,

    CONSTRAINT "personas_pkey" PRIMARY KEY ("id")
);
