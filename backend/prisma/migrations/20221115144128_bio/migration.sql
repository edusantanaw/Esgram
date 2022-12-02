/*
  Warnings:

  - You are about to alter the column `content` on the `posts` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(600)`.

*/
-- AlterTable
ALTER TABLE "posts" ALTER COLUMN "content" SET DATA TYPE VARCHAR(600);

-- AlterTable
ALTER TABLE "users" ADD COLUMN     "bio" VARCHAR(300);
