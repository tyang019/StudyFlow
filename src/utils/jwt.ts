import jwt from 'jsonwebtoken';

const SECRET = 'supersecret'; // later move to .env

export const generateToken = (userId: number) => {
  return jwt.sign({ userId }, SECRET, { expiresIn: '1d' });
};