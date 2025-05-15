import { S3Client } from "@aws-sdk/client-s3";

export const miRegion = 'us-east-2'
export const bucketName = 'trujillo-y-asociadospdf'
const accessKeyId = process.env.AWS_ACCESS_KEY_ID;
const secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY;

if (!accessKeyId || !secretAccessKey) {
  throw new Error("Las credenciales AWS no están definidas.");
}

export const s3Client = new S3Client({
    region:miRegion,
    credentials:{
        accessKeyId: accessKeyId,
        secretAccessKey: secretAccessKey,
    }
})

export const paramsS3 = {
    Bucket: bucketName,
    // ACL: 'public-read' as const ,
    Key:String,
    ContentType: String,
    Body:null
}


export const createUrl=(fileName:string,folder:string)=>{
    return "https://"+bucketName+".s3."+miRegion+".amazonaws.com/"+folder+"/"+fileName
}