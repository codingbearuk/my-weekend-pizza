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
var gsap_1 = __importDefault(require("gsap"));
var colors_1 = require("styled/colors");
var carret_button_view_1 = __importDefault(require("./carret-button.view"));
var CarretButton = function (p) {
    var _a = react_1.useState(false), isActive = _a[0], setActive = _a[1];
    var plusOneRef = react_1.useRef();
    var handleOnClickAnimation = react_1.useCallback(function () {
        setActive(true);
        p.onClick();
    }, []);
    var motion = react_1.useCallback(function () {
        var plusOne = plusOneRef.current;
        var tl = gsap_1.default.timeline({ repeat: 0, delay: 0 });
        tl.fromTo(plusOne, {
            fontSize: '4em',
            opacity: 0,
            color: colors_1.yellow,
            duration: 0.8,
        }, {
            fontSize: '1.2em',
            opacity: 1,
            color: colors_1.white,
        })
            .to(plusOne, {
            opacity: 0,
            fontSize: '.1em',
            delay: 0.4,
        })
            .then(function () { return setActive(false); });
    }, []);
    react_1.useEffect(function () {
        if (isActive)
            motion();
    }, [isActive]);
    return (<carret_button_view_1.default {...{
        refs: {
            plusOne: plusOneRef,
        },
        handleOnClickAnimation: handleOnClickAnimation,
        isActive: isActive,
    }}/>);
};
exports.default = CarretButton;
