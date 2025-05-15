import { Router } from 'express';

import { EmployeeController } from '../Controllers/employeeController';

export const employeeRouter = Router();

// Rutas CRUD para empleados
employeeRouter.get('/', EmployeeController.getAllEmployees);
employeeRouter.get('/:id', EmployeeController.getEmployeeById);
employeeRouter.post('/', EmployeeController.createEmployee);
employeeRouter.put('/:id', EmployeeController.updateEmployee);
employeeRouter.delete('/:id', EmployeeController.deleteEmployee);

