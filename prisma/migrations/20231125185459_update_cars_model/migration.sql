-- DropForeignKey
ALTER TABLE "Cars" DROP CONSTRAINT "Cars_orderId_fkey";

-- AlterTable
ALTER TABLE "Cars" ALTER COLUMN "orderId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Cars" ADD CONSTRAINT "Cars_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "Orders"("orderId") ON DELETE SET NULL ON UPDATE CASCADE;
