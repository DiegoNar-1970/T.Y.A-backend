import multer from 'multer';

// Configuración en memoria
const storage = multer.memoryStorage(); 
export const upload = multer({ storage });