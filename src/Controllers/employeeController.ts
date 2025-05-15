import { Request, Response } from 'express';
import { EmployeeService } from '../services/employeeService';


export class EmployeeController {
  static async getAllEmployees(req: Request, res: Response): Promise<void> {
      const employees = await EmployeeService.getAllEmployees();
      res.status(200).json(employees);
  }
  static async getEmployeeById(req: Request, res: Response): Promise<void> {

    const { id } = req.params;
      const employee = await EmployeeService.getEmployeeById(id);
      if (employee) {
        res.status(200).json(employee);
      } else {
        res.status(404).json({ message: 'Empleado no encontrado' });
      }
  }

  static async createEmployee(req: Request, res: Response): Promise<void> {
    const { name, document, phone } = req.body;

      const newEmployee = await EmployeeService.createEmployee(name, document, phone);
      res.status(201).json(newEmployee);

  }

  static async updateEmployee(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    const { name, document, phone } = req.body;

      const updatedEmployee = await EmployeeService.updateEmployee(id, name, document, phone);
      if (updatedEmployee) {
        res.status(200).json(updatedEmployee);
      } else {
        res.status(404).json({ message: 'Empleado no encontrado' });
      }

  }

  static async deleteEmployee(req: Request, res: Response): Promise<void> {
    const { id } = req.params;

      const isDeleted = await EmployeeService.deleteEmployee(id);
      if (isDeleted) {
        res.status(200).json({ message: 'Empleado eliminado correctamente' });
      } else {
        res.status(404).json({ message: 'Empleado no encontrado' });
      }

  }
}
