"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.contractRouter = void 0;
const express_1 = require("express");
const contractController_1 = require("../controllers/contractController");
exports.contractRouter = (0, express_1.Router)();
exports.contractRouter.get("/", contractController_1.ContractController.getAll);
exports.contractRouter.post("/", contractController_1.ContractController.create);
exports.contractRouter.get("/contracts-by-date", contractController_1.ContractController.getContractsByDates);
exports.contractRouter.get("/get-general-info", contractController_1.ContractController.getGeneralInfo);
exports.contractRouter.post("/get-any-contract", contractController_1.ContractController.getAnyContract);
//rutas genericas al final
exports.contractRouter.get("/:contract", contractController_1.ContractController.getByRadicado);
