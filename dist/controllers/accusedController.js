"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccusedController = void 0;
const accusedService_1 = require("../services/accusedService");
class AccusedController {
    static async getAllAccused(req, res) {
        const accused = await accusedService_1.AccusedService.getAllAccused();
        res.status(200).json(accused);
    }
    static async getAccusedByCc(req, res) {
        const cc = req.params.cc;
        const accused = await accusedService_1.AccusedService.getAccusedByCc(cc);
        if (accused)
            res.status(200).json(accused);
        else
            res.status(404).json({ message: 'Accused not found' });
    }
    static async createAccused(req, res) {
        const accused = req.body;
        const result = await accusedService_1.AccusedService.createAccused(accused);
        res.status(201).json(result);
    }
}
exports.AccusedController = AccusedController;
