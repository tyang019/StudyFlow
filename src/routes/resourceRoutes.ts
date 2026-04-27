import express from 'express';
import {
  getResources,
  createResource,
  updateResource,
  deleteResource,
} from '../controllers/resourceController';
import { protect } from '../middleware/authMiddleware';

const router = express.Router();

router.get('/', protect, getResources);
router.post('/', protect, createResource);
router.put('/:id', protect, updateResource);
router.delete('/:id', protect, deleteResource);

export default router;