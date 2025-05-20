// import { NextFunction, Request, Response } from 'express';
// import { AppError } from '../utils/AppError';

// export const errorHandler = (
//   err: Error,
//   req: Request,
//   res: Response,
//   next: NextFunction
// ) => {
//   if (err instanceof AppError) {
//     res.status(err.statusCode).json({
//       success: false,
//       message: err.message,
//       code: err.code || 'APP_ERROR'
//     });
//   } else {
//     console.error('🔴 Error no controlado:', err);
//     res.status(500).json({
//       success: false,
//       message: 'Ocurrió un error inesperado. Intenta más tarde.',
//       err:err.message
//     });
//   }
// };
