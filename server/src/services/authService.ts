import { Prisma, PrismaClient, User } from '@prisma/client';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

export type SafeUser = Pick<User, 'id' | 'email'>;

export class AuthError extends Error {
  constructor(
    message: string,
    public readonly statusCode: number
  ) {
    super(message);
    this.name = 'AuthError';
  }
}

const normalizeEmail = (email: unknown) => {
  if (typeof email !== 'string') {
    throw new AuthError('Email is required', 400);
  }

  const normalized = email.trim().toLowerCase();
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailPattern.test(normalized)) {
    throw new AuthError('Enter a valid email address', 400);
  }

  return normalized;
};

const validatePassword = (password: unknown) => {
  if (typeof password !== 'string' || password.length < 6) {
    throw new AuthError('Password must be at least 6 characters', 400);
  }

  return password;
};

const toSafeUser = (user: User): SafeUser => ({
  id: user.id,
  email: user.email,
});

export const register = async (email: unknown, password: unknown): Promise<SafeUser> => {
  const normalizedEmail = normalizeEmail(email);
  const validPassword = validatePassword(password);

  const existingUser = await prisma.user.findFirst({
    where: {
      email: {
        equals: normalizedEmail,
        mode: 'insensitive',
      },
    },
  });

  if (existingUser) {
    throw new AuthError('User already exists', 409);
  }
const hashedPassword = await bcrypt.hash(validPassword, 10);

try {
    const user = await prisma.user.create({
      data: {
        email: normalizedEmail,
        password: hashedPassword,
      },
    });

    return toSafeUser(user);
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === 'P2002') {
      throw new AuthError('User already exists', 409);
    }

    throw error;
  }
};
export const login = async (email: unknown, password: unknown): Promise<SafeUser> => {
  const normalizedEmail = normalizeEmail(email);
  const validPassword = validatePassword(password);

  const user = await prisma.user.findFirst({
    where: {
      email: {
        equals: normalizedEmail,
        mode: 'insensitive',
      },
    },
  });
  if (!user) {
    throw new AuthError('Invalid email or password', 401);
  }
const isValidPassword = await bcrypt.compare(validPassword, user.password);
  if (!isValidPassword) {
    throw new AuthError('Invalid email or password', 401);
  }
   return toSafeUser(user);
};