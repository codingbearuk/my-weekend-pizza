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
var react_bootstrap_icons_1 = require("react-bootstrap-icons");
var react_stripe_js_1 = require("@stripe/react-stripe-js");
var stripe_js_1 = require("@stripe/stripe-js");
var stage_dots_1 = __importDefault(require("components/UI/stage-dots"));
var finish_pay_styles_1 = require("./finish&pay.styles");
var first_1 = __importDefault(require("./stages/first"));
var second_1 = __importDefault(require("./stages/second"));
var third_1 = __importDefault(require("./stages/third"));
var View = function (p) {
    var publicKey = 'pk_test_51HJQuYLdXVP8SwrclLKdz1gUe5iYZqbl7c4vjAZQX7zBjITqUZYzHJoZAqgJQoJH8yIXVL0qLYVSbrRBMwOPUgQe00WlXEHY1G';
    var stripePromise = stripe_js_1.loadStripe(publicKey);
    var containerRef = react_1.useRef();
    var windowRef = react_1.useRef();
    var getStage = function () {
        if (p.stage === 1)
            return <first_1.default setStage={p.handlers.setStage} setNoStages={p.handlers.setNoStages}/>;
        else if (p.stage === 2)
            return <second_1.default setStage={p.handlers.setStage} setNoStages={p.handlers.setNoStages}/>;
        else if (p.stage === 3)
            return (<react_stripe_js_1.Elements stripe={stripePromise}>
          <third_1.default />
        </react_stripe_js_1.Elements>);
    };
    react_1.useEffect(function () {
        p.handlers.enterAnimation(containerRef.current, windowRef.current);
    }, []);
    return (<finish_pay_styles_1.Container ref={containerRef}>
      <finish_pay_styles_1.Window ref={windowRef}>
        <finish_pay_styles_1.TopBar>
          <react_bootstrap_icons_1.XCircle onClick={function () { return p.handlers.handleCloseModal(containerRef.current, windowRef.current); }}/>
        </finish_pay_styles_1.TopBar>
        <finish_pay_styles_1.Content>{getStage()}</finish_pay_styles_1.Content>
        <stage_dots_1.default numberOfStages={p.noStages} activeStage={p.stage} setStage={p.handlers.setStage}/>
      </finish_pay_styles_1.Window>
    </finish_pay_styles_1.Container>);
};
exports.default = View;
