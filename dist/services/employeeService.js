"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeeService = void 0;
const employeeModel_1 = require("../models/employeeModel");
class EmployeeService {
    static async getAllEmployees() {
        try {
            return await employeeModel_1.EmployeeModel.getAllEmployees();
        }
        catch (error) {
            console.error('Service Error in getAllEmployees:', error);
            throw error;
        }
    }
    static async getEmployeeById(id) {
        try {
            return await employeeModel_1.EmployeeModel.getEmployeeById(id);
        }
        catch (error) {
            console.error('Service Error in getEmployeeById:', error);
            throw error;
        }
    }
    static async createEmployee(name, document, phone) {
        try {
            return await employeeModel_1.EmployeeModel.createEmployee(name, document, phone);
        }
        catch (error) {
            console.error('Service Error in createEmployee:', error);
            throw error;
        }
    }
    static async updateEmployee(id, name, document, phone) {
        try {
            return await employeeModel_1.EmployeeModel.updateEmployee(id, name, document, phone);
        }
        catch (error) {
            throw error;
        }
    }
    static async deleteEmployee(id) {
        try {
            return await employeeModel_1.EmployeeModel.deleteEmployee(id);
        }
        catch (error) {
            console.error('Service Error in deleteEmployee:', error);
            throw error;
        }
    }
}
exports.EmployeeService = EmployeeService;
