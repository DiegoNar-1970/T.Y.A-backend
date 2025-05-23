
import jwt from 'jsonwebtoken';

export const authRequired = (
    
    req,
    res,
    next) => {
        const SECRET_KEY = process.env.SECRET_KEY_JWT
        if (!SECRET_KEY) {
            throw new Error('La variable de entorno SECRET_KEY_JWT no está definida');
          }
        const {token} = req.cookies
        if(!token) {
            res.status(400).json({message:'no estas autorizado para entrar a este sitio'})
            return
        }   
        jwt.verify(token,SECRET_KEY,((err, user)=>{
            if(err){
                return res.status(400).json({message:'Error al iniciar sesion'})
            }
            next();
        }))
}