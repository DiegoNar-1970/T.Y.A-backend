import bcrypt from 'bcrypt';
import { connection } from '../config/configDb.js';
import { AppError } from '../utils/appError.js';

 export class UserModel {
    static async create(user) {
      try {
        const { rows } = await connection.query(
          `SELECT * FROM users WHERE email = $1`,
          [user.email]
        );
  
        if (rows.length !== 0) {
          throw new AppError('El email ya existe', 'DUPLICATE_KEY', 400);
        }
  
        const hashedPassword = await bcrypt.hash(user.password_hash, 10);
  
        const userCreated = await connection.query(
          `INSERT INTO users (email, password_hash, roles)
           VALUES ($1, $2, $3)
           RETURNING *`,
          [user.email, hashedPassword, user.roles]
        );
  
        return userCreated.rows[0];
      } catch (error) {
        if (error instanceof AppError) {
          throw new AppError(error.message, error.code, error.statusCode);
        } else {
          throw new AppError(error.message);
        }
      }
    }
  
    static async login(user) {
      try {
        const { rows } = await connection.query(
          `SELECT * FROM users WHERE email = $1`,
          [user.email]
        );
  
        if (rows.length === 0) {
          throw new AppError('El Email no existe', 'NOT_FOUND', 400);
        }
  
        const hashedPassword = rows[0].password_hash;
        const plainPassword = user.password_hash;
  
        const isValid = bcrypt.compareSync(plainPassword, hashedPassword);
        if (!isValid) {
          throw new AppError('Contraseña incorrecta', 'INCORRECT_PASSWORD', 400);
        }
  
        return rows[0];
      } catch (error) {
        if (error instanceof AppError) {
          throw new AppError(error.message, error.code, error.statusCode);
        } else {
          throw new AppError(error.message);
        }
      }
    }
  
    static async findByEmail(email) {
      try {
        const { rows } = await connection.query(
          `SELECT * FROM users WHERE email = $1`,
          [email]
        );
  
        if (rows.length === 0) {
          throw new AppError('El Email no existe', 'NOT_FOUND', 400);
        }
  
        return rows[0];
      } catch (error) {
        if (error instanceof AppError) {
          throw new AppError(error.message, error.code, error.statusCode);
        } else {
          throw new AppError(error.message);
        }
      }
    }
  }