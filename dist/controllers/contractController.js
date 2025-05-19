"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContractController = void 0;
const contractModel_1 = require("../models/contractModel");
const contractService_1 = require("../services/contractService");
const customerService_1 = require("../services/customerService");
const AppError_1 = require("../utils/AppError");
class ContractController {
    static async getAll(req, res) {
        const contracts = await contractService_1.ContractService.getAll();
        res.json(contracts);
    }
    static async create(req, res) {
        const data = req.body;
        const contract = await contractService_1.ContractService.create(data);
        res.status(201).json(contract);
    }
    static async getByRadicado(req, res) {
        const { contract } = req.params;
        const result = await contractService_1.ContractService.getByRadicado(contract);
        res.status(200).json(result);
    }
    static async getGeneralInfo(req, res) {
        const countContAsigned = await contractService_1.ContractService.countContAsigned();
        const countContWithoutAsigned = await contractService_1.ContractService.countContWithoutAsigned();
        const newsContracts = await contractService_1.ContractService.getNewsContracts();
        const getRecentContracts = await contractService_1.ContractService.getRecentContracts();
        const countCustomer = await customerService_1.CustomerService.countCustomer();
        res.status(200).json({
            countContAsigned,
            countContWithoutAsigned,
            countCustomer,
            newsContracts,
            getRecentContracts
        });
    }
    static async getContractsByDates(req, res) {
        const { start_date, end_date } = req.query;
        if (!start_date || !end_date) {
            throw new AppError_1.AppError("Error del Navegador, El archivo no se cargo correctamente", 'NO_CHARGE _RESOURCE', 400);
        }
        try {
            const contracts = await contractModel_1.ContractModel.getContractsByDateRange(start_date, end_date);
            res.json(contracts);
        }
        catch (error) {
            const status = error instanceof AppError_1.AppError ? error.statusCode : 500;
            const code = error instanceof AppError_1.AppError ? error.code : 'INTERNAL_ERROR';
            const message = error instanceof AppError_1.AppError ? error.message : 'Error interno al verificar contrato';
            res.status(status).json({
                error: {
                    message,
                    code,
                    statusCode: status
                }
            });
            return;
        }
    }
    ;
    static async getContract(req, res) {
        const data = req.body;
        const contract = await contractService_1.ContractService.create(data);
        res.status(201).json(contract);
    }
    static async getAnyContract(req, res) {
        try {
            let contrato;
            let contractData;
            const { num_radicado, num_contract } = req.body;
            if (!num_radicado && !num_contract) {
                throw new AppError_1.AppError('Informaciono insuficiente', 'BAD_REQUEST', 400);
            }
            if (num_radicado) {
                contrato = num_radicado;
                const contracts = await contractModel_1.ContractModel.getByRadicado(contrato);
                contractData = contracts;
            }
            else {
                contrato = num_contract;
                const contracts = await contractModel_1.ContractModel.getByNumContract(contrato);
                contractData = contracts;
            }
            res.status(200).json(contractData);
            return;
        }
        catch (error) {
            if (error instanceof AppError_1.AppError) {
                res.status(error.statusCode).json({ message: error.message });
                return;
            }
            else if (error instanceof Error) {
                // Si es un Error nativo
                res.json({ message: error.message });
                return;
            }
            else {
                // Si no es nada reconocible
                throw new Error('Error desconocido en getByRadicado');
            }
        }
    }
}
exports.ContractController = ContractController;
