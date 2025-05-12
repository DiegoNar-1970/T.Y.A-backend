import { ControlFileModel } from "../Models/ControlFileModel.js";
export class ControlFileController{
    static async uploadFile(req, res){
        try {
            const file = req.file;
            if (!file) {
                return res.status(400).json({ message: 'No file uploaded' });
            }
            const {data} = req.body
            const dataParsed = JSON.parse(data)
            console.log(JSON.parse(data))
            const {response,url} = await ControlFileModel.uploadPdf(file,dataParsed.fileName)
            console.log('aqui sale lo mismo ',response,'y esta es la url',url)

            return res.status(200).json({ message: 'File uploaded successfully', file: file });
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: 'Internal server error' });
        }
    }
}