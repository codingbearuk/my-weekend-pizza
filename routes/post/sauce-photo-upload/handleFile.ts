import path from "path";

import { HandleFile } from "./@sauce-photo-upload.t";

const handleFile: HandleFile = (file) => {
  if (file.mimetype !== "image/png") return "ext error";

  let uploadPath: string;
  if (process.env.NODE_ENV === 'development') {
    path.join(
      __dirname,
      "../",
      "../",
      "../",
      "public",
      "images",
      "sauces",
      file.name
    );
  } else {
    path.join(
      __dirname,
      '../',
      "../",
      "../",
      "../",
      "public",
      "images",
      "sauces",
      file.name
    );
  }

  file.mv(uploadPath, (err) => {
    if (err) return "moving file to new directory error";
    else return false;
  });
};

export default handleFile;
