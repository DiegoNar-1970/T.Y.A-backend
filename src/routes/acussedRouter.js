import { Router } from 'express';
import { AccusedController } from '../controllers/accusedController.js';

export const accusedRouter = Router();

accusedRouter.get('/', AccusedController.getAllAccused);
accusedRouter.get('/:cc', AccusedController.getAccusedByCc);
accusedRouter.post('/', AccusedController.createAccused);