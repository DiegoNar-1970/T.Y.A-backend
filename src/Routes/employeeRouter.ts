import { Router } from 'express';

import { EmployeeController } from '../controllers/employeeController';

export const employeeRouter = Router();

// Rutas CRUD para empleados
employeeRouter.get('/', EmployeeController.getAllEmployees);
employeeRouter.get('/:id', EmployeeController.getEmployeeById);
employeeRouter.post('/create', EmployeeController.createEmployee);
employeeRouter.delete('/:id', EmployeeController.deleteEmployee);
employeeRouter.put('/update/:id', EmployeeController.updateEmployee);

