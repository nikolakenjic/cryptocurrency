import { Router } from 'express';
import { getAllData, getSingleData } from '../controllers/cryptoController.js';
import { authenticateUser } from '../middleware/authenticateUser.js';

const router = Router();

router.get('/', getAllData);

router.get('/:id', authenticateUser, getSingleData);

export default router;
