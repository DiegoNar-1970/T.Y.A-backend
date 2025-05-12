import express from 'express';
import { EmailLinkController } from '../controllers/EmailLinkController.js';

export const EmailLinkRoute = express.Router();

EmailLinkRoute.post('/', EmailLinkController.send);

