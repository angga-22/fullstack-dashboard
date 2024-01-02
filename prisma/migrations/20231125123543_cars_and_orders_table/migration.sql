/*
  Warnings:

  - You are about to drop the column `birth_date` on the `Users` table. All the data in the column will be lost.
  - You are about to drop the column `country_id` on the `Users` table. All the data in the column will be lost.
  - You are about to drop the column `first_name` on the `Users` table. All the data in the column will be lost.
  - You are about to drop the column `last_name` on the `Users` table. All the data in the column will be lost.
  - Added the required column `createdAt` to the `Users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Users` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Brand" AS ENUM ('TOYOTA', 'HONDA', 'SUZUKI', 'MITSUBISHI');

-- CreateEnum
CREATE TYPE "OrderStatus" AS ENUM ('STILL_RENTING', 'FINISH_RENTING');

-- DropIndex
DROP INDEX "Users_country_id_key";

-- AlterTable
ALTER TABLE "Users" DROP COLUMN "birth_date",
DROP COLUMN "country_id",
DROP COLUMN "first_name",
DROP COLUMN "last_name",
ADD COLUMN     "birthDate" DATE,
ADD COLUMN     "createdAt" DATE NOT NULL,
ADD COLUMN     "firstName" VARCHAR(255),
ADD COLUMN     "lastName" VARCHAR(255),
ADD COLUMN     "updatedAt" DATE NOT NULL;

-- CreateTable
CREATE TABLE "Cars" (
    "carId" SERIAL NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "brand" "Brand" NOT NULL,
    "image" VARCHAR(200) NOT NULL,
    "rentPrice" INTEGER NOT NULL,
    "yearReleased" TIMESTAMP NOT NULL,
    "createdAt" DATE NOT NULL,
    "updatedAt" DATE NOT NULL,
    "isRent" BOOLEAN NOT NULL DEFAULT false,
    "orderId" INTEGER NOT NULL,

    CONSTRAINT "Cars_pkey" PRIMARY KEY ("carId")
);

-- CreateTable
CREATE TABLE "Orders" (
    "orderId" SERIAL NOT NULL,
    "status" "OrderStatus" NOT NULL,
    "dayRent" INTEGER NOT NULL,
    "priceRent" INTEGER NOT NULL,

    CONSTRAINT "Orders_pkey" PRIMARY KEY ("orderId")
);

-- AddForeignKey
ALTER TABLE "Cars" ADD CONSTRAINT "Cars_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "Orders"("orderId") ON DELETE RESTRICT ON UPDATE CASCADE;
