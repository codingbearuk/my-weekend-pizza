"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var path_1 = __importDefault(require("path"));
var handleFile = function (file) {
    if (file.mimetype !== "image/png")
        return "ext error";
    var uploadPath = path_1.default.join(__dirname, "../", "../", "../", "public", "images", "sauces", file.name);
    file.mv(uploadPath, function (err) {
        if (err)
            return "moving file to new directory error";
        else
            return false;
    });
};
exports.default = handleFile;
