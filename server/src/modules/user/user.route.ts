import { Router } from 'express';
import { getUserController } from './user.controller';
import { authMiddleware } from '../../middlewares/auth.middleware';

const router = Router();

router.get('/', authMiddleware, getUserController);

export default router;
