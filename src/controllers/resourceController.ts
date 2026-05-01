import { Response } from 'express';
import * as service from '../services/resourceService';
import { AuthRequest } from '../middleware/authMiddleware';

export const getResources = async (req: AuthRequest, res: Response) => {
  const data = await service.getAll(req.userId!);
  res.json(data);
};

export const createResource = async (req: AuthRequest, res: Response) => {
  const newItem = await service.create(req.body, req.userId!);
  res.status(201).json(newItem);
};

export const updateResource = async (req: AuthRequest, res: Response) => {
  await service.update(Number(req.params.id), req.body, req.userId!);
  res.json({ message: 'Updated' });
};

export const deleteResource = async (req: AuthRequest, res: Response) => {
  await service.remove(Number(req.params.id), req.userId!);
  res.json({ message: 'Deleted' });
};