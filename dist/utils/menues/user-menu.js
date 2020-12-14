"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var language_sources_1 = __importDefault(require("language-sources"));
var userMenu = [
    {
        name: 'logout',
        title: language_sources_1.default.userMenu.logout,
        iconName: 'ArrowDownLeftSquare',
    },
    {
        name: 'changeAddress',
        title: language_sources_1.default.userMenu.changeAddress,
        iconName: 'HouseFill',
    },
];
exports.default = userMenu;
