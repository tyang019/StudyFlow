import { Request, Response } from 'express';
import * as service from '../services/resourceService';

export const getResources = async (req: Request, res: Response) => {
  try {
    const data = await service.getAll();
    res.json(data);
  } catch {
    res.status(500).json({ message: 'Error fetching resources' });
  }
};

export const createResource = async (req: Request, res: Response) => {
  try {
    const newItem = await service.create(req.body);
    res.status(201).json(newItem);
  } catch {
    res.status(500).json({ message: 'Error creating resource' });
  }
};

export const updateResource = async (req: Request, res: Response) => {
  try {
    const updated = await service.update(Number(req.params.id), req.body);
    res.json(updated);
  } catch {
    res.status(500).json({ message: 'Error updating resource' });
  }
};

export const deleteResource = async (req: Request, res: Response) => {
  try {
    const deleted = await service.remove(Number(req.params.id));
    res.json(deleted);
  } catch {
    res.status(500).json({ message: 'Error deleting resource' });
  }
};