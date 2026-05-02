import { Request, Response } from 'express';
import * as service from '../services/authService';
import { generateToken } from '../utils/jwt';

export const register = async (req: Request, res: Response) => {
  try {
    const user = await service.register(req.body.email, req.body.password);
    const token = generateToken(user.id);

    res.status(201).json({ user, token });
  } catch (error: any) {
    console.error(error);

    if (error.message === 'User already exists') {
      return res.status(409).json({
        error: 'User already exists',
      });
    }

    res.status(400).json({ error: 'Registration failed' });
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const user = await service.login(req.body.email, req.body.password);

    const token = generateToken(user.id);

    res.json({
      user,
      token,
    });
  } catch {
    res.status(401).json({ error: 'Invalid credentials' });
  }
};