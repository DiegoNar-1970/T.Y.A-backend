import { Router } from "express";

import { ControlFileController } from "../controllers/controlFileController.js";

import { upload } from '../middleware/uploadMemory.js';

export const controlFileRouter = Router();

controlFileRouter.post('/upload', upload.single('file'),ControlFileController.uploadFile);
controlFileRouter.post('/upload-without-email',upload.single('file'),ControlFileController.upLoadFileWithoutEmail);
controlFileRouter.post('/send-sings/:id',ControlFileController.signContract);