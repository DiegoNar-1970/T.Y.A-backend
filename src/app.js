import cookieParser from 'cookie-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';

import { accusedRouter } from './routes/acussedRouter.js';
import { contractRouter } from './routes/contractRouter.js';
import { controlFileRouter } from './routes/controlFileRouter.js';
import { customerRouter } from './routes/customerRouter.js';
import { employeeRouter } from './routes/employeeRouter.js';
import { InfoContractRouter } from './routes/infoContractRouter.js';
import { UserRouter } from './routes/userRouter.js';


const allowedOrigins = [
  "https://asesoriasgrupotrujilloyasociados.com",
  "http://localhost:5173",
  "https://api.asesoriasgrupotrujilloyasociados.com",
  "https://tya-backend-production.up.railway.app",
];

dotenv.config();

const app = express()   

//cors es para que pueda recibir peticiones de diferentes dominios
app.use(cors({
  origin: function (origin, callback) {
    // permitir requests sin origin (ej: Postman, curl)
    if (!origin) return callback(null, true);
    if (allowedOrigins.includes(origin)) {
      return callback(null, true);
    } else {
      return callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true
}));
// authRequired,

app.disable('x-powered-by')
//express json es para que expres reconozca el body
app.use(express.json())
//cookie parser es para que pueda generarle o enviarles cookies al navegador
app.use(cookieParser()) 



app.use('/customer', customerRouter)
app.use('/accused', accusedRouter)
app.use('/employee',  employeeRouter)
app.use('/infoContract', InfoContractRouter)

app.use('/contract', contractRouter)
// app.use('/send-email', EmailLinkRoute)
app.use('/control-files', controlFileRouter);
app.use('/user',UserRouter);

  

const PORT = process.env.PORT ?? 1234

app.listen(PORT, () => {
    console.log(`Server is listening on port http://localhost:${PORT}`)
})
