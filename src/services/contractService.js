;

import { ContractModel } from '../models/contractModel.js';
import { AppError } from '../utils/appError.js';

export class ContractService {
  static async getAll(){
    return await ContractModel.getAll();
  }

  static async create(contract) {
    return await ContractModel.create(contract);
  }

  static async getByRadicado(numContract) {
    return await ContractModel.getByRadicado(numContract);
  }

  static async getByName(name) {
    return await ContractModel.getByName(name);
  }
  static async countContWithoutAsigned() {
    try{
      return await ContractModel.countContWithoutAsigned();
    }catch(error){
      if (error instanceof Error) {
        throw new AppError(error.message,'UKNOWN_ERROR',500 );
    }
        throw new Error('Unknown error occurred in updatePartialCustomer');
    }
  }
  static async countContAsigned() {
    try{
      const response=await ContractModel.countContAsigned()
      return response
    }catch (error) {
        if (error instanceof Error) {
          console.error(`Error al crear info_contract:`, error.message);
          throw new AppError(error.message,'UNKNOWN_ERROR',500); // deja que el controlador lo maneje
        } else {
          throw new Error('Error desconocido al crear info_contract');
        }
      }
  }
  static async getNewsContracts() {
    try{
      const response=await ContractModel.getNewsContracts()
      return response
    }catch (error) {
        if (error instanceof Error) {
          console.error(`Error al crear info_contract:`, error.message);
          throw new AppError(error.message,'UNKNOWN_ERROR',500); // deja que el controlador lo maneje
        } else {
          throw new Error('Error desconocido al crear info_contract');
        }
      }
  }
  static async getRecentContracts() {
    try{
      const response=await ContractModel.getRecentContracts()

      return response
    }catch (error) {
        if (error instanceof Error) {
          console.error(`Error al crear info_contract:`, error.message);
          throw new AppError(error.message,'UNKNOWN_ERROR',500); // deja que el controlador lo maneje
        } else {
          throw new Error('Error desconocido al crear info_contract');
        }
      }
  }
}
