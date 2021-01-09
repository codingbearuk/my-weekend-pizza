import Route from '../../route.type';
import path from 'path';

import { FileArray, UploadedFile } from 'express-fileupload';
import { HandleFile } from './@pizza-photo-upload.t';

const pizzaPhotoUpload: Route = (req, res) => {
  const files: FileArray = req.files;
  const multiFiles = Object.values(files);
  let error: boolean = false;
  console.log(files);

  const handleFile: HandleFile = file => {
    if (file.mimetype !== 'image/png') {
      res.status(200).json({
        status: 'error',
        msg: 'wrong file format',
      });
    }

    let uploadPath: string;
    if (process.env.NODE_ENV === 'development'){
      uploadPath = path.join(
        __dirname,
        '../',
        '../',
        '../',
        'public',
        'images',
        'pizzas',
        file.name
      );
    } else {
      uploadPath = path.join(
        __dirname,
        '../',
        '../',
        '../',
        '../',
        'public',
        'images',
        'pizzas',
        file.name
      );
    }
    file.mv(uploadPath, err => {
      if (err) error = true;
    });
  };

  for (let file of multiFiles) {
    handleFile(file);
  }

  if (error)
    res.status(500).json({
      status: 'error',
      msg: 'moving file to folder error',
    });
  else
    res.status(201).json({
      status: 'ok',
      msg: 'file/files uploaded',
    });
};

export default pizzaPhotoUpload;
