import { AccusedService } from "../services/accusedService.js";


export class AccusedController {
    static async getAllAccused(req, res){
            const accused = await AccusedService.getAllAccused();
             res.status(200).json(accused);
    }
    static async getAccusedByCc(req, res) {

            const cc = req.params.cc;
            const accused = await AccusedService.getAccusedByCc(cc);
            if (accused) res.status(200).json(accused);
            else res.status(404).json({ message: 'Accused not found' });
        }
        
    static async createAccused(req,res){
        const accused = req.body;
        const result = await AccusedService.createAccused(accused);
        res.status(201).json(result);
    }
}