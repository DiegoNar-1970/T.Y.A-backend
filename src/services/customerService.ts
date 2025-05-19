import { CustomerModel } from '../models/customerModel';
import { Customer } from '../types/customer';
import { AppError } from '../utils/appError';

export class CustomerService {
    
  static async getAll(): Promise<Customer[]> {
    try{
      return await CustomerModel.getAll();
    }catch(err){
      console.error('Error in customerService.getAll:', err);
      throw err;
    }
  }

  static async getByCc(cc: string): Promise<Customer[] | null> {
    try{
      return await CustomerModel.getByCc(cc);
    }catch(err){
      console.error('Error in customerService.getByCc:', err);
      throw err;
    }
  }

  static async create(data: Customer): Promise<Customer> {
    try{
      return await CustomerModel.create(data);
    }catch(err){
      console.error('Error in customerService.create:', err);
      throw err;
    }
  }
  
  static async getByName(name: string): Promise<Customer | null> {
    try{
      return await CustomerModel.getByName(name);
    }catch(error:unknown){
      if (error instanceof Error) {
        throw new AppError(error.message,'UKNOWN_ERROR',500 );
    }
        throw new Error('Unknown error occurred in updatePartialCustomer');
    }
  }
  static async countCustomer(): Promise<Customer | null> {
    try{
      return await CustomerModel.countCustomer();
    }catch(error:unknown){
      if (error instanceof Error) {
        throw new AppError(error.message,'UKNOWN_ERROR',500);
    }
        throw new Error('Unknown error occurred in updatePartialCustomer');
    }
  }
  // static async updatePartialCustomer(id: number, data: Partial<Customer>): Promise<Customer> {
  //   return await CustomerModel.updatePartialCustomer(id, data);
  // }
}
