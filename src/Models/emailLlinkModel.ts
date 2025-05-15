import brevo from '@getbrevo/brevo';

export class EmailLinkModel {
  static async sendEmail(emails: {email: string, name: string, link: string}[], pdfBuffer: Buffer, fileName: string,linkFirma:string) {
    try {
      const apiInstance = new brevo.TransactionalEmailsApi();
      const apiKey = process.env.BREVO_EMAIL_KEY;

      if (!apiKey) throw new Error("Falta la variable de entorno BREVO_EMAIL_KEY");

      apiInstance.setApiKey(brevo.TransactionalEmailsApiApiKeys.apiKey, apiKey);

      const sendSmtpEmail = new brevo.SendSmtpEmail();

      sendSmtpEmail.subject = "Notificación de contrato";
      sendSmtpEmail.to = emails;
      sendSmtpEmail.htmlContent = `
        <h1>Cordial saludo, ${emails[0].name}</h1>
        <p>Muy buen dia, en el presente correo se envia el documento de autorizacion con el cual a partir del momento nuestra compañia se encargara de su todo su tramite </p>
        <p>Adjuntamos el Link de la firma</p>
        <a href="${linkFirma}">${linkFirma}</a>
        <h3>Si tiene alguna duda, no dude en contactarnos.</h3>
        <p>Atentamente,<br>Grupo Trujillo y Asociados</p>
      `;
      sendSmtpEmail.sender = {
        name: "Trujillo y Asociados",
        email: "Asesorias@grupotrujilloyasociados.com"
      };

      // ➕ Aquí se agrega el PDF como adjunto en base64
      const base64PDF = pdfBuffer.toString('base64');

      sendSmtpEmail.attachment = [
        {
          content: base64PDF,
          name: fileName.endsWith('.pdf') ? fileName : `${fileName}.pdf`
        }
      ];

      const result = await apiInstance.sendTransacEmail(sendSmtpEmail);

      return result;
    } catch (error) {
      console.error('Error en EmailModel:', error);
      throw error;
    }
  }
}
