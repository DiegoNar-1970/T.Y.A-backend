"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.employeeRouter = void 0;
const express_1 = require("express");
const employeeController_1 = require("../controllers/employeeController");
exports.employeeRouter = (0, express_1.Router)();
// Rutas CRUD para empleados
exports.employeeRouter.get('/', employeeController_1.EmployeeController.getAllEmployees);
exports.employeeRouter.get('/:id', employeeController_1.EmployeeController.getEmployeeById);
exports.employeeRouter.post('/create', employeeController_1.EmployeeController.createEmployee);
exports.employeeRouter.delete('/:id', employeeController_1.EmployeeController.deleteEmployee);
exports.employeeRouter.put('/update/:id', employeeController_1.EmployeeController.updateEmployee);
