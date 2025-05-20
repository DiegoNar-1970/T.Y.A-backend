
import { AccusedModel } from "../models/accusedModel.js";
export class AccusedService {
  static async getAllAccused(){
    try {
        return await AccusedModel.getAll(); 
        } catch (error) {
      // Si llega un error desde el modelo, lo lanzamos hacia arriba.
      console.error('Service Error in getAllAccused:', error);
      throw error; // Re-lanzamos el error
    }
    }
    static async getAccusedByCc(cc) {
        try {
            return await AccusedModel.getByCc(cc); 
        } catch (error) {
            console.error('Service Error in getAccusedByCc:', error);
            throw error; // Re-lanzamos el error
        }
    }
    static async createAccused(accused) {
        try {
            return await AccusedModel.create(accused); // Aquí asumimos que existe un método `create` en el modelo.
        } catch (error) {
            console.error('Service Error in createAccused:', error);
            throw error; // Re-lanzamos el error
        }
    }
}
