import express from 'express';
import cors from 'cors';

import resourceRoutes from './routes/resourceRoutes';
import authRoutes from './routes/authRoutes';
import { errorHandler } from './middleware/errorHandler';

export const createApp = () => {
  const app = express();

  app.use(cors());
  app.use(express.json());

  app.get('/health/live', (_req, res) => {
    res.status(200).json({
      status: 'ok',
    });
  });

  app.use('/api/auth', authRoutes);
  app.use('/api/resources', resourceRoutes);

  app.use(errorHandler);

  return app;
};