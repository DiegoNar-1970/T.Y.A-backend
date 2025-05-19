import { Router } from 'express';

import { InfoContractController } from '../controllers/infoContractController';

export const InfoContractRouter = Router();

InfoContractRouter.get('/', InfoContractController.getAllInfoContracts);
InfoContractRouter.get('/:id', InfoContractController.getInfoContractById);
InfoContractRouter.post('/', InfoContractController.createInfoContract);


