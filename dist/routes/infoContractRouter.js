"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InfoContractRouter = void 0;
const express_1 = require("express");
const infoContractController_1 = require("../controllers/infoContractController");
exports.InfoContractRouter = (0, express_1.Router)();
exports.InfoContractRouter.get('/', infoContractController_1.InfoContractController.getAllInfoContracts);
exports.InfoContractRouter.get('/:id', infoContractController_1.InfoContractController.getInfoContractById);
exports.InfoContractRouter.post('/', infoContractController_1.InfoContractController.createInfoContract);
