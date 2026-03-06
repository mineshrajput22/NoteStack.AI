import { Router } from 'express';
import { registerController, loginController } from './auth.controller';

const router = Router();

router.post('/signup', registerController);
router.post('/login', loginController);

export default router;
