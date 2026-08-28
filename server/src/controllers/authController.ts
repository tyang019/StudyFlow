import { Request, Response } from 'express';
import { AuthError, login as loginUser, register as registerUser } from '../services/authService';
import { generateToken } from '../utils/jwt';

const sendAuthError = (error: unknown, res: Response) => {
  if (error instanceof AuthError) {
    return res.status(error.statusCode).json({ error: error.message });
  }

  console.error('Authentication error:', error);
  return res.status(500).json({ error: 'Authentication service unavailable' });
};

export const register = async (req: Request, res: Response) => {
  try {
    const user = await registerUser(req.body.email, req.body.password);
    const token = generateToken(user.id);
     return res.status(201).json({ user, token });
  } catch (error: unknown) {
    return sendAuthError(error, res);
  }
};

export const login = async (req: Request, res: Response) => {
  try {
     const user = await loginUser(req.body.email, req.body.password);
    const token = generateToken(user.id);
    return res.json({ user, token });
  } catch (error: unknown) {
    return sendAuthError(error, res);
  };
};