"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContractService = void 0;
;
const contractModel_1 = require("../models/contractModel");
const AppError_1 = require("../utils/AppError");
class ContractService {
    static async getAll() {
        return await contractModel_1.ContractModel.getAll();
    }
    static async create(contract) {
        return await contractModel_1.ContractModel.create(contract);
    }
    static async getByRadicado(numContract) {
        return await contractModel_1.ContractModel.getByRadicado(numContract);
    }
    static async getByName(name) {
        return await contractModel_1.ContractModel.getByName(name);
    }
    static async countContWithoutAsigned() {
        try {
            return await contractModel_1.ContractModel.countContWithoutAsigned();
        }
        catch (error) {
            if (error instanceof Error) {
                throw new AppError_1.AppError(error.message, 'UKNOWN_ERROR', 500);
            }
            throw new Error('Unknown error occurred in updatePartialCustomer');
        }
    }
    static async countContAsigned() {
        try {
            const response = await contractModel_1.ContractModel.countContAsigned();
            return response;
        }
        catch (error) {
            if (error instanceof Error) {
                console.error(`Error al crear info_contract:`, error.message);
                throw new AppError_1.AppError(error.message, 'UNKNOWN_ERROR', 500); // deja que el controlador lo maneje
            }
            else {
                throw new Error('Error desconocido al crear info_contract');
            }
        }
    }
    static async getNewsContracts() {
        try {
            const response = await contractModel_1.ContractModel.getNewsContracts();
            return response;
        }
        catch (error) {
            if (error instanceof Error) {
                console.error(`Error al crear info_contract:`, error.message);
                throw new AppError_1.AppError(error.message, 'UNKNOWN_ERROR', 500); // deja que el controlador lo maneje
            }
            else {
                throw new Error('Error desconocido al crear info_contract');
            }
        }
    }
    static async getRecentContracts() {
        try {
            const response = await contractModel_1.ContractModel.getRecentContracts();
            return response;
        }
        catch (error) {
            if (error instanceof Error) {
                console.error(`Error al crear info_contract:`, error.message);
                throw new AppError_1.AppError(error.message, 'UNKNOWN_ERROR', 500); // deja que el controlador lo maneje
            }
            else {
                throw new Error('Error desconocido al crear info_contract');
            }
        }
    }
}
exports.ContractService = ContractService;
