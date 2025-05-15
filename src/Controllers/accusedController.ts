import { Request, Response } from "express";
import { AccusedService } from "../services/accusedService";


export class AccusedController {
    static async getAllAccused(req:Request, res:Response){
            const accused = await AccusedService.getAllAccused();
             res.status(200).json(accused);
    }
    static async getAccusedByCc(req: Request, res: Response) {

            const cc = req.params.cc;
            const accused = await AccusedService.getAccusedByCc(cc);
            if (accused) res.status(200).json(accused);
            else res.status(404).json({ message: 'Accused not found' });
        }
        
    static async createAccused(req:Request,res:Response){
        const accused = req.body;
        const result = await AccusedService.createAccused(accused);
        res.status(201).json(result);
    }
}