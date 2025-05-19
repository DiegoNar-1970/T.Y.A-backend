import { Request, Response } from 'express';
import { ContractModel } from '../models/contractModel.js';
import { ContractService } from '../services/contractService.js';
import { CustomerService } from '../services/customerService.js';
import { Contract } from '../types/Contract.js';
import { AppError } from '../utils/AppError.js';

export class ContractController {
  static async getAll(req: Request, res: Response): Promise<void> {
    const contracts = await ContractService.getAll();
    res.json(contracts);
  }

  static async create(req: Request, res: Response): Promise<void> {
    const data: Contract = req.body;
    const contract = await ContractService.create(data);
    res.status(201).json(contract);
  }

  static async getByRadicado(req: Request, res: Response): Promise<void> {
    const { contract } = req.params;
    const result = await ContractService.getByRadicado(contract);
    res.status(200).json(result);
  }
  static async getGeneralInfo(req: Request, res: Response): Promise<void> {
    const countContAsigned = await ContractService.countContAsigned();
    const countContWithoutAsigned = await ContractService.countContWithoutAsigned();
    const newsContracts = await ContractService.getNewsContracts();
    const getRecentContracts = await ContractService.getRecentContracts();
    const countCustomer = await CustomerService.countCustomer();
    res.status(200).json({
      countContAsigned,
      countContWithoutAsigned,
      countCustomer,
      newsContracts,
      getRecentContracts
    });
  }

  static async getContractsByDates (req: Request, res: Response)  {
    const { start_date, end_date } = req.query;

  
    if (!start_date || !end_date) {
      throw new AppError(
        "Error del Navegador, El archivo no se cargo correctamente",
        'NO_CHARGE _RESOURCE',
        400
      )}
  
    try {
      const contracts = await ContractModel.getContractsByDateRange(start_date as string, end_date as string);
      res.json(contracts);
    } catch (error:any) {
        const status = error instanceof AppError ? error.statusCode : 500;
        const code = error instanceof AppError ? error.code : 'INTERNAL_ERROR';
        const message = error instanceof AppError ? error.message : 'Error interno al verificar contrato';
        res.status(status).json({ 
          error: { 
            message, 
            code, 
            statusCode: status 
          } 
        });
        return;
    }
  };

  static async getContract(req: Request, res: Response): Promise<void> {
    const data: Contract = req.body;
    const contract = await ContractService.create(data);
    res.status(201).json(contract);
  }

  static async getAnyContract(req: Request, res: Response){
      try{
        let contrato
        let contractData
        const {num_radicado,num_contract} = req.body    
        
        if (!num_radicado && !num_contract) {
          throw new AppError(
            'Informaciono insuficiente',
            'BAD_REQUEST',
            400
          );
        }

        if(num_radicado){
          contrato = num_radicado
          const contracts = await ContractModel.getByRadicado(contrato)
          contractData = contracts
        }else{
          contrato = num_contract
          const contracts = await ContractModel.getByNumContract(contrato)
          contractData = contracts
        }
        res.status(200).json(contractData)
        return 
      }catch (error: unknown) {
      if (error instanceof AppError) {
        res.status(error.statusCode).json({ message: error.message })
        return  
      } else if (error instanceof Error) {
        // Si es un Error nativo
        res.json({ message: error.message })
        return 
      } else {
        // Si no es nada reconocible
        throw new Error('Error desconocido en getByRadicado');
      }
    }
  }
}




