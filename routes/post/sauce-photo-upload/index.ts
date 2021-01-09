import Route from "../../route.type";
import handleFile from "./handleFile";

const saucePhotoUpload: Route = async (req, res) => {
  const { files } = req;
  const filesArr: any[] = Object.values(files);
  let flag: boolean | string = false;

  for (let file of filesArr) {
    const saveFile = await handleFile(file);
    if (saveFile) flag = saveFile;
    else flag = false;
  }

  if (flag)
    res.status(500).json({
      status: "error",
      msg: flag,
    });
  else
    res.status(201).json({
      status: "ok",
      msg: "sauce photos added succesfully",
    });
};

export default saucePhotoUpload;
