"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var gsap_1 = require("gsap");
var menu_view_1 = __importDefault(require("./menu.view"));
var SignInMenu = function (p) {
    var container = react_1.useRef();
    function enterAnimations() {
        var tl = gsap_1.gsap.timeline({ repeat: 0, delay: 0 });
        tl.fromTo(container.current, {
            opacity: 0,
            duration: 0.3,
            height: 0,
        }, {
            opacity: 1,
            height: "auto",
        });
    }
    react_1.useEffect(function () {
        enterAnimations();
    }, []);
    return (<menu_view_1.default {...p} containerRef={container}>
      {p.children}
    </menu_view_1.default>);
};
exports.default = SignInMenu;
