-- CreateTable
CREATE TABLE "MathOperation" (
    "id" SERIAL NOT NULL,
    "operation" TEXT NOT NULL,
    "result" JSONB NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "MathOperation_pkey" PRIMARY KEY ("id")
);
