import jwt from 'jsonwebtoken';

const SECRET_KEY = process.env.SECRET_KEY_JWT || 'mi_clave_secreta';

export function createAccesToken(payload: { email: string; roles: string }): Promise<string> {
  return new Promise((resolve, reject) => {
    jwt.sign(
      payload,
      SECRET_KEY,
      { expiresIn: '1d' },
      (err:any, token:any) => {
        if (err || !token) {
          reject(err || new Error("Token no generado"));
        } else {
          resolve(token);
        }
      }
    );
  });
}
