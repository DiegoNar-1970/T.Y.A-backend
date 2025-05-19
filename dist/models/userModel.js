"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModel = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const configDb_1 = require("../config/configDb");
const AppError_1 = require("../utils/AppError");
class UserModel {
    static async create(user) {
        try {
            const { rows } = await configDb_1.connection.query(`
                select * from users where email = $1 `, [user.email]);
            if (rows.length != 0) {
                throw new AppError_1.AppError('El email ya existe', 'DUPLICATE_KEY', 400);
            }
            const hashedPassword = await bcrypt_1.default.hash(user.password_hash, 10);
            const userCreeated = await configDb_1.connection.query(`INSERT INTO users (email,password_hash,roles)
                    VALUES ($1, $2, $3)
                RETURNING *`, [user.email, hashedPassword, user.roles]);
            return userCreeated.rows[0];
        }
        catch (error) {
            if (error instanceof AppError_1.AppError) {
                throw new AppError_1.AppError(error.message, error.code, error.statusCode);
            }
            else {
                throw new AppError_1.AppError(error.message);
            }
        }
    }
    static async login(user) {
        try {
            const { rows } = await configDb_1.connection.query(`
                select * from users where email = $1 `, [user.email]);
            if (rows.length === 0) {
                throw new AppError_1.AppError('El Email no existe', 'NOT_FOUND', 400);
            }
            const hashedPassword = rows[0].password_hash;
            const texPlaiPassword = user.password_hash;
            const isvalid = bcrypt_1.default.compareSync(texPlaiPassword, hashedPassword);
            if (!isvalid) {
                throw new AppError_1.AppError('Contraseña incorrecta', 'INCORRECT_PASSWORD', 400);
            }
            return rows[0];
        }
        catch (error) {
            if (error instanceof AppError_1.AppError) {
                throw new AppError_1.AppError(error.message, error.code, error.statusCode);
            }
            else {
                throw new AppError_1.AppError(error.message);
            }
        }
    }
    static async findByEmail(email) {
        try {
            const { rows } = await configDb_1.connection.query(`
                select * from users where email = $1 `, [email]);
            if (rows.length === 0) {
                throw new AppError_1.AppError('El Email no existe', 'NOT_FOUND', 400);
            }
            return rows[0];
        }
        catch (error) {
            if (error instanceof AppError_1.AppError) {
                throw new AppError_1.AppError(error.message, error.code, error.statusCode);
            }
            else {
                throw new AppError_1.AppError(error.message);
            }
        }
    }
}
exports.UserModel = UserModel;
