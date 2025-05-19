"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.accusedRouter = void 0;
const express_1 = require("express");
const accusedController_1 = require("../controllers/accusedController");
exports.accusedRouter = (0, express_1.Router)();
exports.accusedRouter.get('/', accusedController_1.AccusedController.getAllAccused);
exports.accusedRouter.get('/:cc', accusedController_1.AccusedController.getAccusedByCc);
exports.accusedRouter.post('/', accusedController_1.AccusedController.createAccused);
