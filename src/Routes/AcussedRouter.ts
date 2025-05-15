import { Router } from 'express';
import { AccusedController } from '../Controllers/accusedController';
export const accusedRouter = Router();

accusedRouter.get('/', AccusedController.getAllAccused);
accusedRouter.get('/:cc', AccusedController.getAccusedByCc);
accusedRouter.post('/', AccusedController.createAccused);