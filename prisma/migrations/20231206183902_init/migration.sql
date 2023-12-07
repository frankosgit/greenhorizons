/*
  Warnings:

  - You are about to drop the column `caegory` on the `Products` table. All the data in the column will be lost.
  - Added the required column `category` to the `Products` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Products" DROP COLUMN "caegory",
ADD COLUMN     "category" TEXT NOT NULL;
