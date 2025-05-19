import { CustomerService } from '@services/customerService';
import { Request, Response } from 'express';


export class CustomerController {
    
    static async getAll(req:Request, res:Response) {
        
            const customers = await CustomerService.getAll();
             res.status(200).json(customers);

    }

    static async getByName(req:Request, res:Response) {

            const customer = await CustomerService.getByName(req.params.name);
            if (!customer) {
                 res.status(404).json({ message: 'Customer not found' });
            }
             res.status(200).json(customer);
    }

    static async getByCc(req:Request, res:Response) {
            const customer = await CustomerService.getByCc(req.params.cc);
            if (!customer) {
                 res.status(404).json({ message: 'Customer not found' });
            }
             res.status(200).json(customer);
    }

    static async create(req:Request, res:Response) {
            const customer = req.body;
            
            const id = await CustomerService.create(customer);
             res.status(201).json({ message: 'Customer created', data : id });
    }
    
//     static async updatePartialCustomer(req:Request, res:Response) {
//             const data = req.body;
//             data.id = parseInt(req.params.id);

//             const affectedRows = await CustomerService.updatePartialCustomer(data);

//             if (affectedRows === 0) {
//                  res.status(404).json({ message: 'Customer not found' });
//             }
//              res.status(200).json({ message: 'Customer updated', id: data.id });

//     }
}