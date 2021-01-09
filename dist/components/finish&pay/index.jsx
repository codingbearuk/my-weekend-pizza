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
var react_redux_1 = require("react-redux");
var gsap_1 = __importDefault(require("gsap"));
var finish_pay_view_1 = __importDefault(require("./finish&pay.view"));
var finish_pay_action_1 = require("redux/actions/finish&pay.action");
var FinishAndPay = function (p) {
    var _a = react_1.useState(1), stage = _a[0], setStage = _a[1];
    var _b = react_1.useState(1), noStages = _b[0], setNoStages = _b[1];
    var dispatch = react_redux_1.useDispatch();
    var handleCloseModal = react_1.useCallback(function () { return dispatch(finish_pay_action_1.closeFinishAndPayWindow()); }, []);
    var enterAnimation = function (containerEl, windowEl) {
        var tl = gsap_1.default.timeline({ repeat: 0, delay: 0 });
        tl.fromTo(containerEl, {
            opacity: 0,
        }, {
            opacity: 1,
            duration: 0.4,
        }).fromTo(windowEl, {
            opacity: 0,
            width: 0,
            overflowX: 'hidden',
        }, {
            opacity: 1,
            width: '80%',
            duration: 0.7,
        });
    };
    var handleClose = function (containerEl, windowEl) {
        var tl = gsap_1.default.timeline({ repeat: 0, delay: 0 });
        tl.fromTo(windowEl, {
            opacity: 1,
            width: '80%',
        }, {
            opacity: 0,
            width: '0px',
            duration: 0.7,
        })
            .fromTo(containerEl, {
            opacity: 1,
        }, {
            opacity: 0,
            duration: 0.4,
        })
            .then(function () { return handleCloseModal(); });
    };
    react_1.useEffect(function () {
        var body = document.body;
        body.style.overflowY = 'hidden';
        return function () {
            body.style.overflowY = 'scroll';
        };
    }, []);
    return (<finish_pay_view_1.default {...{
        handlers: {
            handleCloseModal: handleClose,
            enterAnimation: enterAnimation,
            setStage: setStage,
            setNoStages: setNoStages,
        },
        stage: stage,
        noStages: noStages,
    }}/>);
};
exports.default = FinishAndPay;
