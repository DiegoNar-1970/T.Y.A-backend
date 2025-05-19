import bcrypt from 'bcrypt';
import { connection } from '../config/configDb';
import { User } from '../types/User';
import { AppError } from "../utils/AppError";

 export class UserModel{
    
    static async create(user:User):Promise<User>{
        try{
            const {rows} = await connection.query(`
                select * from users where email = $1 `,
                [user.email])

            if(rows.length != 0){
                throw new AppError(
                    'El email ya existe',
                    'DUPLICATE_KEY',
                    400)
            }    

            const hashedPassword = await bcrypt.hash(
                user.password_hash,
                10
            )

            const userCreeated = await connection.query(
                `INSERT INTO users (email,password_hash,roles)
                    VALUES ($1, $2, $3)
                RETURNING *`,[user.email,hashedPassword,user.roles]
            )
            
            return userCreeated.rows[0];
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
              
        }
    }

    static async login(user:User):Promise<User>{
        try{
            const {rows} = await connection.query(`
                select * from users where email = $1 `,
                [user.email])
                
            if(rows.length === 0){
                throw new AppError(
                    'El Email no existe',
                    'NOT_FOUND',
                    400)
            }
            const hashedPassword = rows[0].password_hash
            const texPlaiPassword = user.password_hash
            const isvalid = bcrypt.compareSync(texPlaiPassword, hashedPassword)
            if( !isvalid ){
                throw new AppError(
                    'Contraseña incorrecta',
                    'INCORRECT_PASSWORD',
                    400)
                
            }
            return rows[0];
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
              
        }
         
    }

    static async findByEmail(email:string){
        try{
            const {rows} = await connection.query(`
                select * from users where email = $1 `,
                [email])
                
            if(rows.length === 0){
                throw new AppError(
                    'El Email no existe',
                    'NOT_FOUND',
                    400)
            }
            return rows[0];
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
              
        }
    }
}