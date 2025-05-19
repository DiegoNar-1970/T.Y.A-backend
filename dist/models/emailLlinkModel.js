"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailLinkModel = void 0;
const brevo_1 = __importDefault(require("@getbrevo/brevo"));
class EmailLinkModel {
    static async sendEmail(emails, pdfBuffer, fileName, linkFirma) {
        try {
            const apiInstance = new brevo_1.default.TransactionalEmailsApi();
            const apiKey = process.env.BREVO_EMAIL_KEY;
            if (!apiKey)
                throw new Error("Falta la variable de entorno BREVO_EMAIL_KEY");
            apiInstance.setApiKey(brevo_1.default.TransactionalEmailsApiApiKeys.apiKey, apiKey);
            const sendSmtpEmail = new brevo_1.default.SendSmtpEmail();
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
        }
        catch (error) {
            console.error('Error en EmailModel:', error);
            throw error;
        }
    }
}
exports.EmailLinkModel = EmailLinkModel;
