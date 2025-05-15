import express from 'express';
import { EmailLinkController } from '../Controllers/emailLinkController';

export const EmailLinkRoute = express.Router();

EmailLinkRoute.post('/', EmailLinkController.send);

