import { EmployeeModel } from '../models/employeeModel';

export class EmployeeService {

  static  async getAllEmployees() {
    try{
        return await EmployeeModel.getAllEmployees();
    }catch(error){
        console.error('Service Error in getAllEmployees:', error);
        throw error;
    }
  }

  static async getEmployeeById(id: string) {
    try{
        return await EmployeeModel.getEmployeeById(id);
    }catch(error){
        console.error('Service Error in getEmployeeById:', error);
        throw error;
    }
  }

  static async createEmployee(name: string, document: string, phone?: string) {
    try{
        return await EmployeeModel.createEmployee(name, document, phone);
    }catch(error){
        console.error('Service Error in createEmployee:', error);
        throw error;
    }
  }

  static async updateEmployee(id: string, name?: string, document?: string, phone?: string) {
    try{
        return await EmployeeModel.updateEmployee(id, name, document, phone);
    }catch(error){
        console.error('Service Error in updateEmployee:', error);
        throw error;
    }
  }

  static async deleteEmployee(id: string) {
    try{
        return await EmployeeModel.deleteEmployee(id);
    }catch(error){
        console.error('Service Error in deleteEmployee:', error);
        throw error;
    }
  }
}
