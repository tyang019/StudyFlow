import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import cors from 'cors';

import resourceRoutes from './routes/resourceRoutes';
import authRoutes from './routes/authRoutes';

import { errorHandler } from './middleware/errorHandler';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/resources', resourceRoutes);
app.use('/api/auth', authRoutes);

app.use(errorHandler);

app.get('/', (req, res) => {
  res.send('API is running...');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});