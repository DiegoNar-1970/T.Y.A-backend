"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ControlFileController = void 0;
const accusedModel_1 = require("../models/accusedModel");
const contractModel_1 = require("../models/contractModel");
const controlFileModel_1 = require("../models/controlFileModel");
const customerModel_1 = require("../models/customerModel");
const emailLlinkModel_1 = require("../models/emailLlinkModel");
const employeeModel_1 = require("../models/employeeModel");
const infoContractModel_1 = require("../models/infoContractModel");
const PdfSignerService_1 = require("../services/PdfSignerService");
const AppError_1 = require("../utils/AppError");
class ControlFileController {
    static async uploadFile(req, res) {
        try {
            const file = req.file;
            if (!file) {
                throw new AppError_1.AppError("Error del Navegador, El archivo no se cargo correctamente", 'NO_CHARGE _RESOURCE', 400);
            }
            const { folderSave, data, customer, accused, info_contract, contract } = req.body;
            let idAccused = null;
            const dataParsed = JSON.parse(data);
            const folder = JSON.parse(folderSave);
            const customerParsed = JSON.parse(customer);
            const infoConParse = JSON.parse(info_contract);
            const contractParse = JSON.parse(contract);
            const accusedParsed = JSON.parse(accused);
            try {
                await contractModel_1.ContractModel.ifExist(dataParsed.num_contract);
            }
            catch (error) {
                const status = error instanceof AppError_1.AppError ? error.statusCode : 500;
                const code = error instanceof AppError_1.AppError ? error.code : 'INTERNAL_ERROR';
                const message = error instanceof AppError_1.AppError ? error.message : 'Error interno al verificar contrato';
                res.status(status).json({
                    error: {
                        message,
                        code,
                        statusCode: status
                    }
                });
                return;
            }
            const idCustomer = await customerModel_1.CustomerModel.findByCcAndCreate(customerParsed);
            if (accusedParsed.name != null) {
                idAccused = await accusedModel_1.AccusedModel.findByCcAndCreate(accusedParsed);
            }
            const employee = await employeeModel_1.EmployeeModel.getByDocument(dataParsed.executive);
            const infoContractFinal = {
                ...infoConParse,
                id_customer: idCustomer,
                id_accused: idAccused
            };
            const resContract = await infoContractModel_1.InfoContractModel.createInfoContract(infoContractFinal);
            console.log(resContract);
            if (!resContract) {
                res.status(500).json({ message: 'No se pudo crear el contrato (resContract es null)' });
                return;
            }
            const { url } = await controlFileModel_1.ControlFileModel.uploadPdf(file, dataParsed.fileName, folder);
            const createContract = {
                id_info_contract: resContract.id,
                id_employee: employee.id,
                ...contractParse,
                path: url
            };
            const contractCreated = await contractModel_1.ContractModel.create(createContract);
            const linkToSigned = `http://localhost:5173/contratos/signed/${contractCreated.id || 'error'}`;
            const email = [{
                    link: url,
                    name: dataParsed.client_name ? dataParsed.client_name : dataParsed.demandados[0].name,
                    email: dataParsed.email
                }];
            const { response, body } = await emailLlinkModel_1.EmailLinkModel.sendEmail(email, file.buffer, file.originalname, linkToSigned);
            res.json({
                success: true,
                email: 'Email enviado correctamente',
                file: 'archivo generado correctamente',
                status: response.statusCode,
                body: body,
                url: url,
                contractCreated: contractCreated,
                linkToSigned: linkToSigned
            });
        }
        catch (error) {
            console.error(error);
            if (error instanceof AppError_1.AppError) {
                res.status(400).json({
                    error: {
                        message: error.message || 'Error En el servidor',
                        statusCode: error.statusCode,
                        code: error.code || 500
                    }
                });
                return;
            }
            res.status(400).json({
                error: {
                    code: error.code || 500,
                    message: error.message || 'Error En el servidor'
                }
            });
        }
    }
    static async upLoadFileWithoutEmail(req, res) {
        try {
            const file = req.file;
            if (!file) {
                res.status(400).json({ message: 'No file uploaded' });
                return;
            }
            const { folderSave, data, customer, accused, info_contract, contract } = req.body;
            let idAccused = null;
            const dataParsed = JSON.parse(data);
            const folder = JSON.parse(folderSave);
            const customerParsed = JSON.parse(customer);
            const infoConParse = JSON.parse(info_contract);
            const contractParse = JSON.parse(contract);
            const accusedParsed = JSON.parse(accused);
            if (dataParsed.num_contract) {
                try {
                    await contractModel_1.ContractModel.ifExist(dataParsed.num_contract);
                }
                catch (error) {
                    const status = error instanceof AppError_1.AppError ? error.statusCode : 500;
                    const code = error instanceof AppError_1.AppError ? error.code : 'INTERNAL_ERROR';
                    const message = error instanceof AppError_1.AppError ? error.message : 'Error interno al verificar contrato';
                    res.status(status).json({
                        error: {
                            message,
                            code,
                            statusCode: status
                        }
                    });
                    return;
                }
            }
            const idCustomer = await customerModel_1.CustomerModel.findByCcAndCreate(customerParsed);
            if (accusedParsed.name != null) {
                idAccused = await accusedModel_1.AccusedModel.findByCcAndCreate(accusedParsed);
            }
            const employee = await employeeModel_1.EmployeeModel.getByDocument(dataParsed.executive);
            const infoContractFinal = {
                ...infoConParse,
                id_customer: idCustomer,
                id_accused: idAccused
            };
            const resContract = await infoContractModel_1.InfoContractModel.createInfoContract(infoContractFinal);
            if (!resContract) {
                res.status(500).json({ message: 'No se pudo crear el contrato (resContract es null)' });
                return;
            }
            const { url } = await controlFileModel_1.ControlFileModel.uploadPdf(file, dataParsed.fileName, folder);
            const createContract = {
                id_info_contract: resContract.id,
                id_employee: employee.id,
                ...contractParse,
                path: url
            };
            const contractCreated = await contractModel_1.ContractModel.create(createContract);
            const linkToSigned = `http://localhost:5173/contratos/signed/${contractCreated.id || 'error'}`;
            res.json({
                success: true,
                file: 'archivo generado correctamente',
                url: url,
                contractCreated: contractCreated,
                linkToSigned: linkToSigned
            });
        }
        catch (error) {
            console.error(error);
            if (error instanceof AppError_1.AppError) {
                res.status(error.statusCode).json({
                    error: {
                        message: error.message || 'Error En el servidor',
                        statusCode: error.statusCode,
                        code: error.code || 500
                    }
                });
                return;
            }
        }
    }
    static async signContract(req, res) {
        try {
            const { id } = req.params;
            const { signature } = req.body;
            if (!signature) {
                throw new AppError_1.AppError(`Error al mandar la firma`, 'EXISTING_RESOURCE', 400);
            }
            const contract = await contractModel_1.ContractModel.getById(id);
            if (!contract) {
                throw new AppError_1.AppError(`Contrato no encontrado`, 'EXISTING_RESOURCE', 400);
            }
            const path = contract.path;
            if (!path) {
                throw new AppError_1.AppError(`El contrato no cuenta con un archivo gaurdado, revisa la base de datos`, 'EXISTING_RESOURCE', 400);
            }
            const key = path.split('.com/')[1];
            if (!key) {
                throw new AppError_1.AppError(`No se encontro la ubicacion del archivo`, 'EXISTING_RESOURCE', 400);
            }
            await PdfSignerService_1.PdfSignerService.signPdf({ key, signatureBase64: signature });
            await controlFileModel_1.ControlFileModel.updateSignedStatus(id, true);
            res.json({ message: 'Contrato firmado con éxito' });
        }
        catch (error) {
            if (error instanceof AppError_1.AppError) {
                console.error('AppError:', error.message);
                res.status(error.statusCode).json({ message: error.message, code: error.code });
                return;
            }
            res.status(500).json({ message: 'Error interno al firmar contrato' });
            return;
        }
    }
}
exports.ControlFileController = ControlFileController;
