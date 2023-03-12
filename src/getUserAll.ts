import { PrismaClient, User } from '@prisma/client';

export default async (): Promise<User[]> => {
  const prisma = new PrismaClient();
  return await prisma.user.findMany();
};
