"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createAccesToken = createAccesToken;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const SECRET_KEY = process.env.SECRET_KEY_JWT || 'mi_clave_secreta';
function createAccesToken(payload) {
    return new Promise((resolve, reject) => {
        jsonwebtoken_1.default.sign(payload, SECRET_KEY, { expiresIn: '1d' }, (err, token) => {
            if (err || !token) {
                reject(err || new Error("Token no generado"));
            }
            else {
                resolve(token);
            }
        });
    });
}
