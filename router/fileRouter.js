import express from 'express';
import multer from 'multer';
import fileController from '../controller/fileController.js';

const catchAsync = (fn) => (req, res, next) => {
    Promise.resolve(fn(req, res, next)).catch((err) => next(err))
}

const router = express.Router();
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });


router.post('/upload', upload.single('upfile'), catchAsync(fileController.uploadFile));

export default router;