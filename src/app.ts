import cookieParser from 'cookie-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';

import { accusedRouter } from '@routes/acussedRouter';
import { contractRouter } from '@routes/contractRouter';
import { controlFileRouter } from '@routes/controlFileRouter';
import { customerRouter } from '@routes/customerRouter';
import { EmailLinkRoute } from '@routes/emailLinkRoute';
import { employeeRouter } from '@routes/employeeRouter';
import { InfoContractRouter } from '@routes/infoContractRouter';
import { UserRouter } from '@routes/userRouter';

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
