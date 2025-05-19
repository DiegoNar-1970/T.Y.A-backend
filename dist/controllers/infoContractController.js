"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InfoContractController = void 0;
const infoContractService_1 = require("../services/infoContractService");
class InfoContractController {
    static async getAllInfoContracts(req, res) {
        const contracts = await infoContractService_1.InfoContractService.getAllInfoContracts();
        res.json(contracts);
    }
    static async getInfoContractById(req, res) {
        const { id } = req.params;
        const contract = await infoContractService_1.InfoContractService.getInfoContractById(id);
        res.json(contract);
    }
    static async createInfoContract(req, res) {
        const { InfoContract } = req.body;
        const contract = await infoContractService_1.InfoContractService.createInfoContract(InfoContract);
        res.status(201).json(contract);
    }
}
exports.InfoContractController = InfoContractController;
