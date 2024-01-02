/*
  Warnings:

  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "User";

-- CreateTable
CREATE TABLE "Users" (
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

    CONSTRAINT "Users_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Users_email_key" ON "Users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Users_username_key" ON "Users"("username");

-- CreateIndex
CREATE UNIQUE INDEX "Users_mobile_key" ON "Users"("mobile");

-- CreateIndex
CREATE UNIQUE INDEX "Users_country_id_key" ON "Users"("country_id");
