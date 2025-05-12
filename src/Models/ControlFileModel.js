import { PutObjectCommand } from "@aws-sdk/client-s3";
import { createUrl, paramsS3, s3Client } from '../config/s3Config.js';
export class ControlFileModel { 

    static async uploadPdf(file,archiveName) {
        console.log('esto contiene el file',file)
        
        const params = {
            ...paramsS3,
            Key: `pdfs/${archiveName}`,
            Body: file.buffer,
            ContentType: 'application/pdf',
        };

        try{
            const response = await s3Client.send(new PutObjectCommand(params));
            console.log('esta es la response manito',response);
            const url = createUrl(archiveName)
            return {respone:response,url:url};
        }catch(error){
            console.error('Error uploading PDF:', error);
            throw new Error('Failed to upload PDF');
        }
    }
}
