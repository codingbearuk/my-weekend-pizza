"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var test = function (req, res) {
    var test = req.body.test;
    res.status(200).json({
        status: "deleted",
        test: test,
    });
};
exports.default = test;
