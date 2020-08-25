import { FileArray, UploadedFile } from "express-fileupload";

export interface HandleFile {
  (file: UploadedFile | any): string | boolean;
}
