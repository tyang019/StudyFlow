import express from 'express';
import cors from 'cors';
import resourceRoutes from './routes/resourceRoutes';
import { errorHandler } from './middleware/errorHandler';
import dotenv from 'dotenv';
import authRoutes from './routes/authRoutes';

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api/resources', resourceRoutes);
app.use(errorHandler);
app.use('/api/auth', authRoutes);

app.get('/', (req, res) => {
  res.send('API is running...');
});
dotenv.config();
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});