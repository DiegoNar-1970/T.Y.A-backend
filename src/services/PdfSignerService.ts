import { GetObjectCommand, PutObjectCommand } from '@aws-sdk/client-s3';
import { bucketName, s3Client } from '@config/s3Config';
import { PDFDocument } from 'pdf-lib';
import { Readable } from 'stream';

function streamToBuffer(stream: Readable): Promise<Buffer> {
  return new Promise((resolve, reject) => {
    const chunks: any[] = [];
    stream.on('data', (chunk) => chunks.push(chunk));
    stream.on('end', () => resolve(Buffer.concat(chunks)));
    stream.on('error', reject);
  });
}

export class PdfSignerService {
  static async signPdf({ key, signatureBase64 }: { key: string, signatureBase64: string }) {
    // 1. Descargar el PDF de S3
    const getCmd = new GetObjectCommand({
      Bucket: bucketName,
      Key: key
    });
    const pdfStream = await s3Client.send(getCmd);
    const pdfBuffer = await streamToBuffer(pdfStream.Body as Readable);

    // 2. Cargar el PDF y la imagen de la firma
    const pdfDoc = await PDFDocument.load(pdfBuffer);
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
    const putCmd = new PutObjectCommand({
      Bucket: bucketName,
      Key: key,
      Body: signedPdf,
      ContentType: 'application/pdf',
    });
    await s3Client.send(putCmd);

    return { ok: true };
  }
}