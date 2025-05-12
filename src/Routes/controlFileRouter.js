import { Router } from "express";

import { ControlFileController } from "../Controllers/controlFileController.js";

import { upload } from '../Middleware/uploadMemory.js';

export const controlFileRouter = Router();

controlFileRouter.post('/upload', upload.single('file'),ControlFileController.uploadFile);