import { InfoContractModel } from '../models/infoContractModel';
import { InfoContract } from '../types/InfoContract';
import { AppError } from '../utils/AppError';

export class InfoContractService {
  static async getAllInfoContracts(): Promise<InfoContract[]> {
    try{
        return InfoContractModel.getAllInfoContracts();
    }catch(error){
      console.error('Service Error in getAllEmployees:', error);
      throw error;
    }
  }

  static async getInfoContractById(id: string): Promise<InfoContract | null> {
    try{
    }catch(error){
      console.error('Service Error in getAllEmployees:', error);
      throw error;
    }
    return InfoContractModel.getInfoContractById(id);
  }

  static async createInfoContract(infoContract:InfoContract): Promise<InfoContract> {
    try{
      return InfoContractModel.createInfoContract(infoContract);

  }catch (error: any) {
    if (error instanceof AppError) {
        throw new AppError(error.message,error.code,error.statusCode); // deja que el controlador lo maneje
    } else {
      throw new Error('Error desconocido al crear info_contract');
    }
  }
  }

}
