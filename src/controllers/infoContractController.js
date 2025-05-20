import { InfoContractService } from '../services/infoContractService.js';

export class InfoContractController {
  static async getAllInfoContracts(req, res) {
    const contracts = await InfoContractService.getAllInfoContracts();
    res.json(contracts);
  }

  static async getInfoContractById(req, res) {
    const { id } = req.params;
    const contract = await InfoContractService.getInfoContractById(id);
      res.json(contract);
  }

  static async createInfoContract(req, res) {
    const {InfoContract} = req.body;
  
    const contract = await InfoContractService.createInfoContract(InfoContract);
    res.status(201).json(contract);
  }
}
