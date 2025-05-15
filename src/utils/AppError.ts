export class AppError extends Error {
    public readonly code: string;
    public readonly statusCode: number;
  
    constructor(message: string, code = 'APP_ERROR', statusCode = 500) {
        //el super se llama prque debe heredar propiedades de Error por eso se extiende
      super(message);
      this.code = code;
      this.statusCode = statusCode;
  
      // Mantener el stack trace limpio para errores personalizados
      Error.captureStackTrace(this, this.constructor);
    }
  }