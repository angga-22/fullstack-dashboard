-- CreateEnum
CREATE TYPE "Role" AS ENUM ('ADMIN_USER', 'SUPER_USER', 'USER');

-- CreateEnum
CREATE TYPE "Gender" AS ENUM ('MALE', 'FEMALE', 'RANDOM');

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "password" VARCHAR(255) NOT NULL,
    "password_v3" VARCHAR(255),
    "username" VARCHAR(255),
    "mobile" VARCHAR(255),
    "first_name" VARCHAR(255),
    "last_name" VARCHAR(255),
    "gender" "Gender" DEFAULT 'RANDOM',
    "birth_date" DATE,
    "country_id" INTEGER,
    "address" VARCHAR(255),
    "image" VARCHAR(255),
    "role" "Role",

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- CreateIndex
CREATE UNIQUE INDEX "User_mobile_key" ON "User"("mobile");

-- CreateIndex
CREATE UNIQUE INDEX "User_country_id_key" ON "User"("country_id");
