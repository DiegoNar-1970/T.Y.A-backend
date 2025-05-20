import { CustomerModel } from '../models/customerModel.js';
import { AppError } from '../utils/appError.js';

export class CustomerService {
    
  static async getAll() {
    try{
      return await CustomerModel.getAll();
    }catch(err){
      console.error('Error in customerService.getAll:', err);
      throw err;
    }
  }

  static async getByCc(cc) {
    try{
      return await CustomerModel.getByCc(cc);
    }catch(err){
      console.error('Error in customerService.getByCc:', err);
      throw err;
    }
  }

  static async create(data) {
    try{
      return await CustomerModel.create(data);
    }catch(err){
      console.error('Error in customerService.create:', err);
      throw err;
    }
  }
  
  static async getByName(name){
    try{
      return await CustomerModel.getByName(name);
    }catch(error){
      if (error instanceof Error) {
        throw new AppError(error.message,'UKNOWN_ERROR',500 );
    }
        throw new Error('Unknown error occurred in updatePartialCustomer');
    }
  }
  static async countCustomer(){
    try{
      return await CustomerModel.countCustomer();
    }catch(error){
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
