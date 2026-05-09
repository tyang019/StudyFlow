import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

export interface AuthRequest extends Request {
  userId?: number;
}

export const protect = (
  req: AuthRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    const auth = req.headers.authorization;

    console.log('AUTH HEADER:', auth);

     if (!auth) {
    return res.status(401).json({ error: 'No token' });
  }

  const token = auth.split(' ')[1];

  console.log('TOKEN:', token);

  console.log('JWT_SECRET:', process.env.JWT_SECRET);

  const decoded = jwt.verify(
    token,
    process.env.JWT_SECRET!
  ) as any;

  console.log('DECODED:', decoded);

  req.userId = decoded.userId;

  next();
} catch (error) {
  console.log('JWT ERROR:', error);

  return res.status(401).json({
    error: 'Invalid token',
  });
};
}