import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import { accusedRouter } from './Routes/AcussedRouter.js';
import { contractRouter } from './Routes/contractRouter.js';
import { controlFileRouter } from './Routes/controlFileRouter.js';
import { customerRouter } from './Routes/customerRouter.js';
import { EmailLinkRoute } from './Routes/emailLinkRoute.js';
import { employeeRouter } from './Routes/employeeRouter.js';
import { InfoContractRouter } from './Routes/infoContractRouter.js';

dotenv.config();


const app = express()   
app.disable('x-powered-by')

app.use(express.json())
app.use(cors())



app.use('/customer', customerRouter)
app.use('/accused', accusedRouter)
app.use('/employee', employeeRouter)
app.use('/infoContract', InfoContractRouter)

app.use('/contract', contractRouter)
app.use('/send-email', EmailLinkRoute)
app.use('/control-files', controlFileRouter);



const PORT = process.env.PORT ?? 1234
app.listen(PORT, () => {
    console.log(`Server is listening on port http://localhost:${PORT}`)
})
