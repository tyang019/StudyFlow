import { Prisma, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

/* GET ALL (user-scoped) */
export const getAll = async (userId: number) => {
  return prisma.resource.findMany({
    where: { userId },
  });
};

/* CREATE */
export const create = async (data: any, userId: number) => {
  return prisma.resource.create({
    data: {
      title: data.title,
      type: data.type,
      completed: data.completed,
      userId,
    },
  });
};

/* UPDATE (secure ownership check) */
export const update = async (id: number, data: Prisma.ResourceUpdateInput, userId: number) => {
  const resource = await prisma.resource.findFirst({
    where: { id, userId },
  });

  if (!resource) {
    throw new Error('Resource not found or unauthorized');
  }

  return prisma.resource.update({
    where: { id },
    data,
  });
};

/* DELETE (secure ownership check) */
export const remove = async (id: number, userId: number) => {
  const resource = await prisma.resource.findFirst({
    where: { id, userId },
  });

  if (!resource) {
    throw new Error('Resource not found or unauthorized');
  }

  return prisma.resource.delete({
    where: { id },
  });
};