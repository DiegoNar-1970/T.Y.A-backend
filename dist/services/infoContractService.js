"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InfoContractService = void 0;
const infoContractModel_1 = require("../models/infoContractModel");
const AppError_1 = require("../utils/AppError");
class InfoContractService {
    static async getAllInfoContracts() {
        try {
            return infoContractModel_1.InfoContractModel.getAllInfoContracts();
        }
        catch (error) {
            console.error('Service Error in getAllEmployees:', error);
            throw error;
        }
    }
    static async getInfoContractById(id) {
        try {
        }
        catch (error) {
            console.error('Service Error in getAllEmployees:', error);
            throw error;
        }
        return infoContractModel_1.InfoContractModel.getInfoContractById(id);
    }
    static async createInfoContract(infoContract) {
        try {
            return infoContractModel_1.InfoContractModel.createInfoContract(infoContract);
        }
        catch (error) {
            if (error instanceof AppError_1.AppError) {
                throw new AppError_1.AppError(error.message, error.code, error.statusCode); // deja que el controlador lo maneje
            }
            else {
                throw new Error('Error desconocido al crear info_contract');
            }
        }
    }
}
exports.InfoContractService = InfoContractService;
