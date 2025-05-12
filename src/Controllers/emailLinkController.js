import { EmailLinkModel } from '../Models/emailLlinkModel.js';

export const EmailLinkController = {
  send: async (req, res) => {
    try {

      const result = await EmailLinkModel.sendEmail();

      res.json({
        success: true,
        message: 'Email enviado correctamente',
        data: result
      });

    } catch (error) {
      console.error('Error en emailController:', error);
      res.status(500).json({ 
        success: false,
        error: 'Error al enviar el email',
        details: error.message 
      });
    }
  }
};