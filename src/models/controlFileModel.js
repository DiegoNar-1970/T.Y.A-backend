import { PutObjectCommand } from "@aws-sdk/client-s3";
import { connection } from '../config/configDb.js';
import { createUrl, paramsS3, s3Client } from '../config/s3Config.js';

export class ControlFileModel { 

    static async uploadPdf(file,archiveName,folder) {
        const params = {
            ...paramsS3,
            Key: `${folder}/${archiveName}`,
            Body: file.buffer,
            ContentType: 'application/pdf',
        };
        try{    
            const response = await s3Client.send(new PutObjectCommand(params));

            const url = createUrl(archiveName,folder??'')
            
            return {response:response,url:url};
        }catch(error){

            console.error('Error uploading PDF:', error);
            throw new Error('Failed to upload PDF');
        }
    }

    static async getById(id) {
        const result = await connection.query('SELECT * FROM contract WHERE id = $1', [id]);
        return result.rows[0] || null;
      }
      
      static async updateSignedStatus(id, signed) {
        await connection.query('UPDATE contract SET asigned = $1, updated_at = CURRENT_TIMESTAMP WHERE id = $2', [signed, id]);
      }

    
}
