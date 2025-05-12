
import brevo from '@getbrevo/brevo';
// import dotenv from 'dotenv';

// dotenv.config();

export class EmailLinkModel {
  static async sendEmail() {
    try {
      const apiInstance = new brevo.TransactionalEmailsApi();
      
      // Configuración de la API key desde variables de entorno
      apiInstance.setApiKey(
        brevo.TransactionalEmailsApiApiKeys.apiKey,
        process.env.BREVO_EMAIL_KEY
        
      );

      const sendSmtpEmail = new brevo.SendSmtpEmail();
      
      sendSmtpEmail.subject = "Notificación de contrato";
      sendSmtpEmail.to = [{ email:"diegoalejandroapexmen@gmail.com"  }];
      sendSmtpEmail.htmlContent = `
        <h1>Cordial Saludo,</h1>
        <p>Adjuntamos el documento de autorización para su revisión. Para proceder con la firma del contrato, por favor haga clic en el siguiente enlace:</p>
        <span>link</span>
        <h3>Si tiene alguna duda, no dude en contactarnos.</h3>
        <span>Atentamente,</span>
        <span>Grupo Trujillo y Asociados</span>
        
      `;
      sendSmtpEmail.sender = {
        name: "Trujillo y Asociados",
        email: "asesorias@grupotrujilloyasociado.com"
      };

      const result = await apiInstance.sendTransacEmail(sendSmtpEmail);
      return result;
    } catch (error) {
      console.error('Error en EmailModel:', error);
      throw error;
    }
  }
}