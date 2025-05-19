"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
const acussedRouter_1 = require("./routes/acussedRouter");
const contractRouter_1 = require("./routes/contractRouter");
const controlFileRouter_1 = require("./routes/controlFileRouter");
const customerRouter_1 = require("./routes/customerRouter");
const emailLinkRoute_1 = require("./routes/emailLinkRoute");
const employeeRouter_1 = require("./routes/employeeRouter");
const infoContractRouter_1 = require("./routes/infoContractRouter");
const UserRouter_1 = require("./routes/UserRouter");
const corsOptions = {
    origin: 'http://localhost:5173',
    credentials: true,
};
dotenv_1.default.config();
const app = (0, express_1.default)();
app.disable('x-powered-by');
app.use(express_1.default.json());
app.use((0, cookie_parser_1.default)());
app.use((0, cors_1.default)(corsOptions));
// authRequired,
app.use('/customer', customerRouter_1.customerRouter);
app.use('/accused', acussedRouter_1.accusedRouter);
app.use('/employee', employeeRouter_1.employeeRouter);
app.use('/infoContract', infoContractRouter_1.InfoContractRouter);
app.use('/contract', contractRouter_1.contractRouter);
app.use('/send-email', emailLinkRoute_1.EmailLinkRoute);
app.use('/control-files', controlFileRouter_1.controlFileRouter);
app.use('/user', UserRouter_1.UserRouter);
const PORT = process.env.PORT ?? 1234;
app.listen(PORT, () => {
    console.log(`Server is listening on port http://localhost:${PORT}`);
});
