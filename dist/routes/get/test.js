"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var test = function (req, res) {
    res.status(200).json({
        status: 'test ok',
    });
};
exports.default = test;
