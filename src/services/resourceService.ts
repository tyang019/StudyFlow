import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getAll = () => prisma.resource.findMany();

export const create = (data: any) =>
  prisma.resource.create({ data });

export const update = (id: number, data: any) =>
  prisma.resource.update({
    where: { id },
    data,
  });

export const remove = (id: number) =>
  prisma.resource.delete({ where: { id } });