import express, { Router } from 'express';
import authMiddleware from '../middleware/authMiddleware';

import * as authController from '../controllers/authController';

const router: Router = express.Router();

router.post('/signup', authController.signup);
router.post('/login', authController.login);
router.post('/logout', authController.logout);
router.get('/verify', authController.verifyEmail);
router.get('/me', authController.getMe);
router.get('/google', authController.googleAuth);
router.get('/callback', authController.handleOAuthCallback);
router.post('/callback', authController.handleToken);
router.post('/reset-password', authController.requestPasswordReset);
router.put('/reset-password', authController.updatePassword);
router.get('/verify-recovery', authController.handlePasswordRecovery);

router.get('/users', authMiddleware, authController.getAllUsers);

export default router;
