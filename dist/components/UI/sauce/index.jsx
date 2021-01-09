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
var carret_button_1 = __importDefault(require("components/UI/carret-button"));
var react_bootstrap_1 = require("react-bootstrap");
var react_redux_1 = require("react-redux");
var sauce_styles_1 = require("./sauce.styles");
var separator_1 = __importDefault(require("../separator"));
var Sauce = function (p) {
    var _a = react_1.useState(false), isHover = _a[0], setHover = _a[1];
    var device = react_redux_1.useSelector(function (s) { return s.device.resolution; });
    var amountRef = react_1.useRef();
    var handleCarretButton = function () { return p.callback(p.sauce, Number(amountRef.current.value)); };
    return (<sauce_styles_1.Container onMouseEnter={function () { return setHover(true); }} onMouseLeave={function () { return setHover(false); }} isHover={isHover}>
      <img src={"/images/sauces/" + p.sauce.image} alt={p.sauce.name}/>
      <h2>{p.sauce.name}</h2>
      <sauce_styles_1.Description>{p.sauce.description}</sauce_styles_1.Description>
      <separator_1.default height={10}/>
      <sauce_styles_1.Price>£{p.sauce.price.toFixed(2)}</sauce_styles_1.Price>
      {isHover || device === 'mobile' ? (<sauce_styles_1.DisplayOnHover>
          <react_bootstrap_1.Form.Control ref={amountRef} as='select' size='sm'>
            <option>{1}</option>
            <option>{2}</option>
            <option>{3}</option>
            <option>{4}</option>
            <option>{5}</option>
          </react_bootstrap_1.Form.Control>
          <separator_1.default width={15}/>
          <carret_button_1.default onClick={handleCarretButton}/>
        </sauce_styles_1.DisplayOnHover>) : (<separator_1.default height={80}/>)}
    </sauce_styles_1.Container>);
};
exports.default = Sauce;
