import { Prisma, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export type ResourceQuery = {
  completed?: boolean;
  type?: string;
  q?: string;
  sort?: 'title_asc' | 'title_desc';
};

/* GET ALL (user-scoped + filterable) */
export const getAll = async (userId: number, query: ResourceQuery = {}) => {
  const where: Prisma.ResourceWhereInput = {
    userId,
    ...(typeof query.completed === 'boolean' ? { completed: query.completed } : {}),
    ...(query.type ? { type: query.type } : {}),
    ...(query.q
      ? {
          title: {
            contains: query.q,
            mode: 'insensitive',
          },
        }
      : {}),
  };

  const orderBy: Prisma.ResourceOrderByWithRelationInput =
    query.sort === 'title_desc' ? { title: 'desc' } : { title: 'asc' };

  return prisma.resource.findMany({ where, orderBy });
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