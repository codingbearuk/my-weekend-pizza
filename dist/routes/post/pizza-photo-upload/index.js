"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var path_1 = __importDefault(require("path"));
var pizzaPhotoUpload = function (req, res) {
    var files = req.files;
    var multiFiles = Object.values(files);
    var error = false;
    var handleFile = function (file) {
        if (file.mimetype !== "image/png") {
            res.status(200).json({
                status: "error",
                msg: "wrong file format",
            });
        }
        var uploadPath = path_1.default.join(__dirname, "../", "../", "../", "public", "images", "pizzas", file.name);
        file.mv(uploadPath, function (err) {
            if (err)
                error = true;
        });
    };
    for (var _i = 0, multiFiles_1 = multiFiles; _i < multiFiles_1.length; _i++) {
        var file = multiFiles_1[_i];
        handleFile(file);
    }
    if (error)
        res.status(500).json({
            status: "error",
            msg: "moving file to folder error",
        });
    else
        res.status(201).json({
            status: "ok",
            msg: "file/files uploaded",
        });
};
exports.default = pizzaPhotoUpload;
