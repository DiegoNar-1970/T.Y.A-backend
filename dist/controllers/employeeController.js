"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeeController = void 0;
const employeeService_1 = require("../services/employeeService");
const AppError_1 = require("../utils/AppError");
class EmployeeController {
    static async getAllEmployees(req, res) {
        const employees = await employeeService_1.EmployeeService.getAllEmployees();
        res.status(200).json(employees);
    }
    static async getEmployeeById(req, res) {
        const { id } = req.params;
        const employee = await employeeService_1.EmployeeService.getEmployeeById(id);
        if (employee) {
            res.status(200).json(employee);
        }
        else {
            res.status(404).json({ message: 'Empleado no encontrado' });
        }
    }
    static async createEmployee(req, res) {
        try {
            const { name, document, phone } = req.body;
            const newEmployee = await employeeService_1.EmployeeService.createEmployee(name, document, phone);
            res.status(201).json({ message: 'Empleado Creado' });
        }
        catch (error) {
            // Manejo uniforme de errores
            const status = error instanceof AppError_1.AppError ? error.statusCode : 500;
            const message = error instanceof AppError_1.AppError
                ? error.message
                : error instanceof Error
                    ? `Error al actualizar el empleado: ${error.message}`
                    : 'Error desconocido al actualizar el empleado';
            res.status(status).json({ message });
        }
    }
    static async updateEmployee(req, res) {
        const { id } = req.params;
        const { name, document, phone } = req.body;
        // Validar los datos requeridos
        if (!id || !name || !document || !phone) {
            throw new AppError_1.AppError('Faltan datos necesarios para actualizar el empleado.', 'MISSING_FIELDS', 400);
        }
        try {
            const updatedEmployee = await employeeService_1.EmployeeService.updateEmployee(id, name, document, phone);
            // Validar si el empleado fue encontrado y actualizado
            if (!updatedEmployee) {
                throw new AppError_1.AppError(`Empleado con id ${id} no encontrado.`, 'EMPLOYEE_NOT_FOUND', 404);
            }
            // Respuesta exitosa
            res.status(200).json({
                data: updatedEmployee,
                message: 'Actualización lograda con éxito',
            });
        }
        catch (error) {
            // Manejo uniforme de errores
            const status = error instanceof AppError_1.AppError ? error.statusCode : 500;
            const message = error instanceof AppError_1.AppError
                ? error.message
                : error instanceof Error
                    ? `Error al actualizar el empleado: ${error.message}`
                    : 'Error desconocido al actualizar el empleado';
            res.status(status).json({ message });
        }
    }
    static async deleteEmployee(req, res) {
        const { id } = req.params;
        try {
            // Llamamos al servicio para eliminar al empleado
            const isDeleted = await employeeService_1.EmployeeService.deleteEmployee(id);
            // Verificamos si el empleado fue eliminado
            if (!isDeleted) {
                throw new AppError_1.AppError(`Empleado no encontrado.`, 'EMPLOYEE_NOT_FOUND', 404);
            }
            // Respuesta exitosa
            res.status(200).json({ message: 'Empleado eliminado correctamente' });
        }
        catch (error) {
            // Manejo uniforme de errores
            if (error instanceof AppError_1.AppError) {
                res.status(error.statusCode).json({ message: error.message, code: error.code });
            }
            else if (error instanceof Error) {
                res.status(500).json({ message: `Error al eliminar el empleado: ${error.message}` });
            }
            else {
                res.status(500).json({ message: 'Error desconocido al eliminar el empleado' });
            }
        }
    }
}
exports.EmployeeController = EmployeeController;
