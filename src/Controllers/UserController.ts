import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { createAccesToken } from '../config/jwt';
import { UserModel } from '../models/userModel';
import { AppError } from '../utils/appError';
export class UserController {

    static async create(req:Request,res:Response){
    try{
        const user=req.body 
        const createdUser = await UserModel.create(user)
         res.status(200).json(
            {message:'Usuario creado',email:createdUser.email})
            return
    }catch (error) {
        if (error instanceof AppError) {
             res.status(error.statusCode)
            .json({ message: error.message, code: error.code });
            return
          }
           res.status(500)
          .json({ message: 'Error interno al firmar contrato' });
          return
    }
    }
    
    static async login(req:Request,res:Response){
        try{
            const user=req.body 
            const userLogin = await UserModel.login(user)
            const {password_hash:_, ...userToken} = userLogin
            const token = await createAccesToken(userToken) 

            res.cookie("token", token, {
                httpOnly: false,
                sameSite: 'none',
                maxAge: 60 * 60 * 1000, 
                secure: true,  // 1 hora
              });
             res.status(200)
             .json(userToken )
                return
        }catch (error) {
            if (error instanceof AppError) {
                 res.status(error.statusCode)
                .json({ 
                    message: error.message, 
                    code: error.code,
                    statusCode:error.statusCode });
                return
              }
               res.status(500)
              .json({ message: 'Error interno al firmar contrato' });
              return
        }
    }

    static async logout(req: Request, res: Response) {
        res.clearCookie('token', {
          httpOnly: true,
          sameSite: 'strict'
        });
      
        res.status(200).json({ message: 'Sesión cerrada' });
    }

    static async verifyToken(req: Request, res: Response){
        try{
            const SECRET_KEY_JWT= process.env.SECRET_KEY_JWT

            if (!SECRET_KEY_JWT) {
                throw new Error('La variable de entorno SECRET_KEY_JWT no está definida');
              }

            const {token} = req.cookies
            if(!token){
                 res.status(400).json({message:'Unautorized'})
                 return
                
            }
            jwt.verify(token,SECRET_KEY_JWT,
                async (err:any,user:any)=>{
                    if(err){
                         res.status(400).json({message:'Unautorized'})
                         return
                    }
                    const userFoud = await UserModel.findByEmail(user.email)
                    if(!userFoud) {
                         res.status(400).json({message:'Unautorized'})
                         return
                    }
                     res.status(200).json({
                        email:userFoud.email,
                        roles:userFoud.roles
                    })
                    return
            })

        }catch (error:any) {
            if (error instanceof AppError) {
                throw new AppError(
                  error.message,
                  error.code,
                  error.statusCode
                    ); 
              }else{
                throw new AppError(error.message)
              }
    }}
}