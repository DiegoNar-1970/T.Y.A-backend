"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppError = void 0;
class AppError extends Error {
    constructor(message, code = 'APP_ERROR', statusCode = 500) {
        //el super se llama prque debe heredar propiedades de Error por eso se extiende
        super(message);
        this.code = code;
        this.statusCode = statusCode;
        // Mantener el stack trace limpio para errores personalizados
        Error.captureStackTrace(this, this.constructor);
    }
}
exports.AppError = AppError;
