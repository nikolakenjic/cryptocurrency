import { Router } from 'express';
import { login, logout, register } from '../controllers/authController.js';
import {
  validationUserLogin,
  validationUserRegister,
} from '../middleware/validationMiddleware.js';

const router = Router();

router.post('/register', validationUserRegister, register);

router.post('/login', validationUserLogin, login);

router.get('/logout', logout);

export default router;
