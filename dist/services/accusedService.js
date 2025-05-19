"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccusedService = void 0;
const accusedModel_1 = require("../models/accusedModel");
class AccusedService {
    static async getAllAccused() {
        try {
            return await accusedModel_1.AccusedModel.getAll();
        }
        catch (error) {
            // Si llega un error desde el modelo, lo lanzamos hacia arriba.
            console.error('Service Error in getAllAccused:', error);
            throw error; // Re-lanzamos el error
        }
    }
    static async getAccusedByCc(cc) {
        try {
            return await accusedModel_1.AccusedModel.getByCc(cc);
        }
        catch (error) {
            console.error('Service Error in getAccusedByCc:', error);
            throw error; // Re-lanzamos el error
        }
    }
    static async createAccused(accused) {
        try {
            return await accusedModel_1.AccusedModel.create(accused); // Aquí asumimos que existe un método `create` en el modelo.
        }
        catch (error) {
            console.error('Service Error in createAccused:', error);
            throw error; // Re-lanzamos el error
        }
    }
}
exports.AccusedService = AccusedService;
