"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUrl = exports.paramsS3 = exports.s3Client = exports.bucketName = exports.miRegion = void 0;
const client_s3_1 = require("@aws-sdk/client-s3");
exports.miRegion = 'us-east-2';
exports.bucketName = 'trujillo-y-asociadospdf';
const accessKeyId = process.env.AWS_ACCESS_KEY_ID;
const secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY;
if (!accessKeyId || !secretAccessKey) {
    throw new Error("Las credenciales AWS no están definidas.");
}
exports.s3Client = new client_s3_1.S3Client({
    region: exports.miRegion,
    credentials: {
        accessKeyId: accessKeyId,
        secretAccessKey: secretAccessKey,
    }
});
exports.paramsS3 = {
    Bucket: exports.bucketName,
    // ACL: 'public-read' as const ,
    Key: String,
    ContentType: String,
    Body: null
};
const createUrl = (fileName, folder) => {
    return "https://" + exports.bucketName + ".s3." + exports.miRegion + ".amazonaws.com/" + folder + "/" + fileName;
};
exports.createUrl = createUrl;
