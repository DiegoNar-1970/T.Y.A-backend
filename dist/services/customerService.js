"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerService = void 0;
const customerModel_1 = require("../models/customerModel");
const AppError_1 = require("../utils/AppError");
class CustomerService {
    static async getAll() {
        try {
            return await customerModel_1.CustomerModel.getAll();
        }
        catch (err) {
            console.error('Error in customerService.getAll:', err);
            throw err;
        }
    }
    static async getByCc(cc) {
        try {
            return await customerModel_1.CustomerModel.getByCc(cc);
        }
        catch (err) {
            console.error('Error in customerService.getByCc:', err);
            throw err;
        }
    }
    static async create(data) {
        try {
            return await customerModel_1.CustomerModel.create(data);
        }
        catch (err) {
            console.error('Error in customerService.create:', err);
            throw err;
        }
    }
    static async getByName(name) {
        try {
            return await customerModel_1.CustomerModel.getByName(name);
        }
        catch (error) {
            if (error instanceof Error) {
                throw new AppError_1.AppError(error.message, 'UKNOWN_ERROR', 500);
            }
            throw new Error('Unknown error occurred in updatePartialCustomer');
        }
    }
    static async countCustomer() {
        try {
            return await customerModel_1.CustomerModel.countCustomer();
        }
        catch (error) {
            if (error instanceof Error) {
                throw new AppError_1.AppError(error.message, 'UKNOWN_ERROR', 500);
            }
            throw new Error('Unknown error occurred in updatePartialCustomer');
        }
    }
}
exports.CustomerService = CustomerService;
