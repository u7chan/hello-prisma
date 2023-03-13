import { PrismaClient } from '@/generated/client';

export default async (): Promise<void> => {
  const prisma = new PrismaClient();
  await prisma.user.deleteMany({ where: {} });
};
