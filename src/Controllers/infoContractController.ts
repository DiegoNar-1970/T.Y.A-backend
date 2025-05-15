import { Request, Response } from 'express';
import { InfoContractService } from '../services/infoContractService';

export class InfoContractController {
  static async getAllInfoContracts(req: Request, res: Response): Promise<void> {
    const contracts = await InfoContractService.getAllInfoContracts();
    res.json(contracts);
  }

  static async getInfoContractById(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    const contract = await InfoContractService.getInfoContractById(id);
      res.json(contract);
  }

  static async createInfoContract(req: Request, res: Response): Promise<void> {
    const {InfoContract} = req.body;
  
    const contract = await InfoContractService.createInfoContract(InfoContract);
    res.status(201).json(contract);
  }
}
