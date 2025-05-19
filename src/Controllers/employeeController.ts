import { Request, Response } from 'express';
import { EmployeeService } from '../services/employeeService';
import { AppError } from '../utils/AppError';


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

    try{
      const { name, document, phone } = req.body;
        const newEmployee = await EmployeeService.createEmployee(name, document, phone);

        res.status(201).json({message:'Empleado Creado'});

    }catch (error: unknown) {
      // Manejo uniforme de errores
      const status = error instanceof AppError ? error.statusCode : 500;
      const message = error instanceof AppError 
        ? error.message 
        : error instanceof Error 
        ? `Error al actualizar el empleado: ${error.message}`
        : 'Error desconocido al actualizar el empleado';

      res.status(status).json({ message });
    }

  }


  static async updateEmployee(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    const { name, document, phone } = req.body;

    // Validar los datos requeridos
    if (!id || !name || !document || !phone) {
      throw new AppError('Faltan datos necesarios para actualizar el empleado.', 'MISSING_FIELDS', 400);
    }

    try {
      const updatedEmployee = await EmployeeService.updateEmployee(id, name, document, phone);

      // Validar si el empleado fue encontrado y actualizado
      if (!updatedEmployee) {
        throw new AppError(`Empleado con id ${id} no encontrado.`, 'EMPLOYEE_NOT_FOUND', 404);
      }

      // Respuesta exitosa
      res.status(200).json({
        data: updatedEmployee,
        message: 'Actualización lograda con éxito',
      });

    } catch (error: unknown) {
      // Manejo uniforme de errores
      const status = error instanceof AppError ? error.statusCode : 500;
      const message = error instanceof AppError 
        ? error.message 
        : error instanceof Error 
        ? `Error al actualizar el empleado: ${error.message}`
        : 'Error desconocido al actualizar el empleado';

      res.status(status).json({ message });
    }
  }


  static async deleteEmployee(req: Request, res: Response): Promise<void> {
    const { id } = req.params;

    try {
      // Llamamos al servicio para eliminar al empleado
      const isDeleted = await EmployeeService.deleteEmployee(id);

      // Verificamos si el empleado fue eliminado
      if (!isDeleted) {
        throw new AppError(`Empleado no encontrado.`, 'EMPLOYEE_NOT_FOUND', 404);
      }

      // Respuesta exitosa
      res.status(200).json({ message: 'Empleado eliminado correctamente' });
    } catch (error: unknown) {
      // Manejo uniforme de errores
      if (error instanceof AppError) {
        res.status(error.statusCode).json({ message: error.message, code: error.code });
      } else if (error instanceof Error) {
        res.status(500).json({ message: `Error al eliminar el empleado: ${error.message}` });
      } else {
        res.status(500).json({ message: 'Error desconocido al eliminar el empleado' });
      }
    }
  }
}
