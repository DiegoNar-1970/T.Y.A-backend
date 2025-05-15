import { Request, Response } from 'express';

import { EmailLinkModel } from '../models/emailLlinkModel';

export const EmailLinkController = {
  send: async (req:Request, res:Response) => {
    try {
      const email=[req.body]
      console.log(email)
      const {response,body} = await EmailLinkModel.sendEmail(email);

      res.json({
        success: true,
        message: 'Email enviado correctamente',
        status: response.statusCode,
        body:body
      });

    } catch (error:unknown) {
      console.error('Error en emailController:', error);
      res.status(500).json({ 
        success: false,
        error: 'Error al enviar el email',
        details: error instanceof Error ? error.message : 'Error desconocido'
 
      });
    }
  }
};