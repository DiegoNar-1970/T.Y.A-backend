import { EmployeeModel } from '../models/employeeModel.js';

export class EmployeeService {

  static  async getAllEmployees() {
    try{
        return await EmployeeModel.getAllEmployees();
    }catch(error){
        console.error('Service Error in getAllEmployees:', error);
        throw error;
    }
  }

  static async getEmployeeById(id) {
    try{
        return await EmployeeModel.getEmployeeById(id);
    }catch(error){
        console.error('Service Error in getEmployeeById:', error);
        throw error;
    }
  }

  static async createEmployee(name, document, phone) {
    try{
        return await EmployeeModel.createEmployee(name, document, phone);
    }catch(error){
        console.error('Service Error in createEmployee:', error);
        throw error;
    }
  }

  static async updateEmployee(id, name, document, phone) {
    try{
        return await EmployeeModel.updateEmployee(id, name, document, phone);
    }catch(error){
        throw error;
    }
  }

  static async deleteEmployee(id) {
    try{
        return await EmployeeModel.deleteEmployee(id);
    }catch(error){
        console.error('Service Error in deleteEmployee:', error);
        throw error;
    }
  }
}
