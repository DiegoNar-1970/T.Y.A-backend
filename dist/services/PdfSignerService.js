"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PdfSignerService = void 0;
const client_s3_1 = require("@aws-sdk/client-s3");
const pdf_lib_1 = require("pdf-lib");
const s3Config_1 = require("../config/s3Config");
function streamToBuffer(stream) {
    return new Promise((resolve, reject) => {
        const chunks = [];
        stream.on('data', (chunk) => chunks.push(chunk));
        stream.on('end', () => resolve(Buffer.concat(chunks)));
        stream.on('error', reject);
    });
}
class PdfSignerService {
    static async signPdf({ key, signatureBase64 }) {
        // 1. Descargar el PDF de S3
        const getCmd = new client_s3_1.GetObjectCommand({
            Bucket: s3Config_1.bucketName,
            Key: key
        });
        const pdfStream = await s3Config_1.s3Client.send(getCmd);
        const pdfBuffer = await streamToBuffer(pdfStream.Body);
        // 2. Cargar el PDF y la imagen de la firma
        const pdfDoc = await pdf_lib_1.PDFDocument.load(pdfBuffer);
        const signatureImage = await pdfDoc.embedPng(signatureBase64);
        const pngDims = signatureImage.scale(0.3); // Reducción del 30% para mejor ajuste
        // 3. Insertar firmas en las páginas correspondientes
        const pages = pdfDoc.getPages();
        // Firma en página 3 (contrato)
        if (pages.length > 2) { // Página 3 es índice 2 (0-based)
            pages[2].drawImage(signatureImage, {
                x: 10,
                y: 170,
                width: 150,
                height: 50
            });
        }
        // Firma en página 4 (autorización de datos)
        if (pages.length > 3) { // Página 4 es índice 3 (0-based)
            pages[3].drawImage(signatureImage, {
                x: 10,
                y: 130,
                width: 150,
                height: 50
            });
        }
        const signedPdf = await pdfDoc.save();
        // 4. Subir el nuevo PDF
        const putCmd = new client_s3_1.PutObjectCommand({
            Bucket: s3Config_1.bucketName,
            Key: key,
            Body: signedPdf,
            ContentType: 'application/pdf',
        });
        await s3Config_1.s3Client.send(putCmd);
        return { ok: true };
    }
}
exports.PdfSignerService = PdfSignerService;
