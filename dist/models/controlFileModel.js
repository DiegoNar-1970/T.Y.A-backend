"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ControlFileModel = void 0;
const client_s3_1 = require("@aws-sdk/client-s3");
const configDb_1 = require("../config/configDb");
const s3Config_1 = require("../config/s3Config");
class ControlFileModel {
    static async uploadPdf(file, archiveName, folder) {
        const params = {
            ...s3Config_1.paramsS3,
            Key: `${folder}/${archiveName}`,
            Body: file.buffer,
            ContentType: 'application/pdf',
        };
        try {
            const response = await s3Config_1.s3Client.send(new client_s3_1.PutObjectCommand(params));
            const url = (0, s3Config_1.createUrl)(archiveName, folder ?? '');
            return { response: response, url: url };
        }
        catch (error) {
            console.error('Error uploading PDF:', error);
            throw new Error('Failed to upload PDF');
        }
    }
    static async getById(id) {
        const result = await configDb_1.connection.query('SELECT * FROM contract WHERE id = $1', [id]);
        return result.rows[0] || null;
    }
    static async updateSignedStatus(id, signed) {
        await configDb_1.connection.query('UPDATE contract SET asigned = $1, updated_at = CURRENT_TIMESTAMP WHERE id = $2', [signed, id]);
    }
}
exports.ControlFileModel = ControlFileModel;
