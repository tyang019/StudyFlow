import express from 'express';
import {
  getResources,
  createResource,
  updateResource,
  deleteResource,
} from '../controllers/resourceController';
import { protect } from '../middleware/authMiddleware';

const router = express.Router();

router.use(protect);

router.get('/', getResources);
router.post('/', createResource);
router.put('/:id', updateResource);
router.delete('/:id', deleteResource);

export default router;