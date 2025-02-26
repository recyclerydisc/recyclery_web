import express, { Router } from 'express';
import * as authController from '../controllers/authController.js';
import authMiddleware from '../middleware/authMiddleware.js';

const authRoutes: Router = express.Router();

authRoutes.post('/signup', authController.signup);
authRoutes.post('/login', authController.login);
authRoutes.post('/logout', authController.logout);
authRoutes.get('/verify', authController.verifyEmail);
authRoutes.get('/me', authController.getMe);
authRoutes.get('/google', authController.googleAuth);
authRoutes.get('/callback', authController.handleOAuthCallback);
authRoutes.post('/callback', authController.handleToken);
authRoutes.post('/reset-password', authController.requestPasswordReset);
authRoutes.put('/reset-password', authController.updatePassword);
authRoutes.get('/verify-recovery', authController.handlePasswordRecovery);
authRoutes.get('/users', authMiddleware, authController.getAllUsers);

export default authRoutes;
