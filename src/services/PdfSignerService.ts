import { GetObjectCommand, PutObjectCommand } from '@aws-sdk/client-s3';
import { PDFDocument } from 'pdf-lib';
import { Readable } from 'stream';
import { bucketName, s3Client } from '../config/s3Config';

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
    const pngDims = signatureImage.scale(0.5);
    const page = pdfDoc.getPages()[0]; // Asumimos que la firma va en la primera página

    // 3. Insertar firma en dos coordenadas (ajústalas según tu PDF)
      page.drawImage(signatureImage, { x: 130, y: 250, width: pngDims.width, height: pngDims.height }); // Firma 1
      page.drawImage(signatureImage, { x: 130, y: 100, width: pngDims.width, height: pngDims.height }); // Firma 2

    const signedPdf = await pdfDoc.save();

    // 4. Subir el nuevo PDF reemplazando el original
    const putCmd = new PutObjectCommand({
      Bucket: bucketName,
      Key: key, // mismo key para sobreescribir
      Body: signedPdf,
      ContentType: 'application/pdf',
    });
    await s3Client.send(putCmd);

    return { ok: true };
  }
}
