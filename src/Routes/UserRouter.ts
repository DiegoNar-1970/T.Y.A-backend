import { Router } from 'express';
import { UserController } from '../controllers/UserController';



export const UserRouter = Router();

UserRouter.post('/', UserController.create);
UserRouter.post('/login', UserController.login);
UserRouter.post('/logout', UserController.logout);
UserRouter.get('/verify-token', UserController.verifyToken);


