import { PrismaClient } from '@/generated/client';
import randomDomain from 'random-domains';
import randomEmail from 'random-email';

export default async (): Promise<void> => {
  const prisma = new PrismaClient();
  await prisma.user.create({
    data: {
      name: randomDomain(),
      email: randomEmail(),
    },
  });
};
