
import { InfoContractModel } from '../models/infoContractModel.js';
import { AppError } from '../utils/appError.js';

export class InfoContractService {
  static async getAllInfoContracts() {
    try{
        return InfoContractModel.getAllInfoContracts();
    }catch(error){
      console.error('Service Error in getAllEmployees:', error);
      throw error;
    }
  }

  static async getInfoContractById(id) {
    try{
    }catch(error){
      console.error('Service Error in getAllEmployees:', error);
      throw error;
    }
    return InfoContractModel.getInfoContractById(id);
  }

  static async createInfoContract(infoContract) {
    try{
      return InfoContractModel.createInfoContract(infoContract);

  }catch (error) {
    if (error instanceof AppError) {
        throw new AppError(error.message,error.code,error.statusCode); // deja que el controlador lo maneje
    } else {
      throw new Error('Error desconocido al crear info_contract');
    }
  }
  }

}
