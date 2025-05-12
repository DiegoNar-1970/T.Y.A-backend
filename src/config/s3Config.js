import { S3Client } from "@aws-sdk/client-s3"

export const miRegion = 'us-east-2'
export const bucketName = 'trujillo-y-asociadospdf'

export const s3Client = new S3Client({
    region:miRegion,
    Credentials:{
        AccessKeyId: process.env.AWS_ACCESS_KEY_ID,
        SecretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    }
})

export const paramsS3 = {
    Bucket: bucketName,
    ACL: 'public-read',
    Key:String,
    ContentType: String,
    Body:null
}


export const createUrl=(fileName)=>{
    return "https://"+bucketName+".s3."+miRegion+".amazonaws.com/"+fileName
}
