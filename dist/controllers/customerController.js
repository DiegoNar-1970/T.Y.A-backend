"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerController = void 0;
const customerService_1 = require("../services/customerService");
class CustomerController {
    static async getAll(req, res) {
        const customers = await customerService_1.CustomerService.getAll();
        res.status(200).json(customers);
    }
    static async getByName(req, res) {
        const customer = await customerService_1.CustomerService.getByName(req.params.name);
        if (!customer) {
            res.status(404).json({ message: 'Customer not found' });
        }
        res.status(200).json(customer);
    }
    static async getByCc(req, res) {
        const customer = await customerService_1.CustomerService.getByCc(req.params.cc);
        if (!customer) {
            res.status(404).json({ message: 'Customer not found' });
        }
        res.status(200).json(customer);
    }
    static async create(req, res) {
        const customer = req.body;
        const id = await customerService_1.CustomerService.create(customer);
        res.status(201).json({ message: 'Customer created', data: id });
    }
}
exports.CustomerController = CustomerController;
