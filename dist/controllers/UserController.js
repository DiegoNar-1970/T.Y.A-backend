"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const jwt_1 = require("../config/jwt");
const userModel_1 = require("../models/userModel");
const AppError_1 = require("../utils/AppError");
class UserController {
    static async create(req, res) {
        try {
            const user = req.body;
            const createdUser = await userModel_1.UserModel.create(user);
            res.status(200).json({ message: 'Usuario creado', email: createdUser.email });
            return;
        }
        catch (error) {
            if (error instanceof AppError_1.AppError) {
                res.status(error.statusCode)
                    .json({ message: error.message, code: error.code });
                return;
            }
            res.status(500)
                .json({ message: 'Error interno al firmar contrato' });
            return;
        }
    }
    static async login(req, res) {
        try {
            const user = req.body;
            const userLogin = await userModel_1.UserModel.login(user);
            const { password_hash: _, ...userToken } = userLogin;
            const token = await (0, jwt_1.createAccesToken)(userToken);
            res.cookie("token", token, {
                httpOnly: false,
                sameSite: 'none',
                maxAge: 60 * 60 * 1000,
                secure: true, // 1 hora
            });
            res.status(200)
                .json(userToken);
            return;
        }
        catch (error) {
            if (error instanceof AppError_1.AppError) {
                res.status(error.statusCode)
                    .json({
                    message: error.message,
                    code: error.code,
                    statusCode: error.statusCode
                });
                return;
            }
            res.status(500)
                .json({ message: 'Error interno al firmar contrato' });
            return;
        }
    }
    static async logout(req, res) {
        res.clearCookie('token', {
            httpOnly: true,
            sameSite: 'strict'
        });
        res.status(200).json({ message: 'Sesión cerrada' });
    }
    static async verifyToken(req, res) {
        try {
            const SECRET_KEY_JWT = process.env.SECRET_KEY_JWT;
            if (!SECRET_KEY_JWT) {
                throw new Error('La variable de entorno SECRET_KEY_JWT no está definida');
            }
            const { token } = req.cookies;
            if (!token) {
                res.status(400).json({ message: 'Unautorized' });
                return;
            }
            jsonwebtoken_1.default.verify(token, SECRET_KEY_JWT, async (err, user) => {
                if (err) {
                    res.status(400).json({ message: 'Unautorized' });
                    return;
                }
                const userFoud = await userModel_1.UserModel.findByEmail(user.email);
                if (!userFoud) {
                    res.status(400).json({ message: 'Unautorized' });
                    return;
                }
                res.status(200).json({
                    email: userFoud.email,
                    roles: userFoud.roles
                });
                return;
            });
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
exports.UserController = UserController;
