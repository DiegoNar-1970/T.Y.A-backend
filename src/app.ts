import cookieParser from 'cookie-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';

import { accusedRouter } from './Routes/AcussedRouter';
import { contractRouter } from './Routes/contractRouter';
import { controlFileRouter } from './Routes/controlFileRouter';
import { customerRouter } from './Routes/customerRouter';
import { EmailLinkRoute } from './Routes/emailLinkRoute';
import { employeeRouter } from './Routes/employeeRouter';
import { InfoContractRouter } from './Routes/infoContractRouter';
import { UserRouter } from './Routes/UserRouter';

const corsOptions = {
    origin: 'http://localhost:5173', 
    credentials: true,  
  };
dotenv.config();

const app = express()   
app.disable('x-powered-by')

app.use(express.json())
app.use(cookieParser()) 

  
  app.use(cors(corsOptions));
// authRequired,

app.use('/customer', customerRouter)
app.use('/accused', accusedRouter)
app.use('/employee',  employeeRouter)
app.use('/infoContract', InfoContractRouter)

app.use('/contract', contractRouter)
app.use('/send-email', EmailLinkRoute)
app.use('/control-files', controlFileRouter);
app.use('/user',UserRouter);



const PORT = process.env.PORT ?? 1234

app.listen(PORT, () => {
    console.log(`Server is listening on port http://localhost:${PORT}`)
})
