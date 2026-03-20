import { Router } from 'express';
import { registerController, loginController } from './auth.controller';
import { validate } from '../../middlewares/validate.middleware';
import { registerSchema, loginSchema } from './auth.validation';

const router = Router();

router.post('/signup', validate(registerSchema), registerController);
router.post('/login', validate(loginSchema), loginController);

export default router;
