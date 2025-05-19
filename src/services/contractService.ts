;

import { ContractModel } from '../models/contractModel';
import { Contract } from '../types/Contract';
import { AppError } from '../utils/AppError';

export class ContractService {
  static async getAll(): Promise<Contract[]> {
    return await ContractModel.getAll();
  }

  static async create(contract: Contract): Promise<Contract> {
    return await ContractModel.create(contract);
  }

  static async getByRadicado(numContract: string): Promise<any> {
    return await ContractModel.getByRadicado(numContract);
  }

  static async getByName(name: string): Promise<Contract> {
    return await ContractModel.getByName(name);
  }
  static async countContWithoutAsigned(): Promise<Contract> {
    try{
      return await ContractModel.countContWithoutAsigned();
    }catch(error:unknown){
      if (error instanceof Error) {
        throw new AppError(error.message,'UKNOWN_ERROR',500 );
    }
        throw new Error('Unknown error occurred in updatePartialCustomer');
    }
  }
  static async countContAsigned(): Promise<Contract> {
    try{
      const response=await ContractModel.countContAsigned()
      return response
    }catch (error: unknown) {
        if (error instanceof Error) {
          console.error(`Error al crear info_contract:`, error.message);
          throw new AppError(error.message,'UNKNOWN_ERROR',500); // deja que el controlador lo maneje
        } else {
          throw new Error('Error desconocido al crear info_contract');
        }
      }
  }
  static async getNewsContracts(): Promise<Contract> {
    try{
      const response=await ContractModel.getNewsContracts()
      return response
    }catch (error: unknown) {
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
    }catch (error: unknown) {
        if (error instanceof Error) {
          console.error(`Error al crear info_contract:`, error.message);
          throw new AppError(error.message,'UNKNOWN_ERROR',500); // deja que el controlador lo maneje
        } else {
          throw new Error('Error desconocido al crear info_contract');
        }
      }
  }
}
