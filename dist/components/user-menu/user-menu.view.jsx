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
var react_1 = __importDefault(require("react"));
var menu_1 = __importDefault(require("components/UI/menu"));
var user_menu_1 = __importDefault(require("utils/menues/user-menu"));
var Icons = __importStar(require("react-bootstrap-icons"));
var separator_1 = __importDefault(require("components/UI/separator"));
var react_redux_1 = require("react-redux");
var user_menu_styles_1 = require("./user-menu.styles");
var button_1 = __importDefault(require("./button"));
var View = function (p) {
    var device = react_redux_1.useSelector(function (s) { return s.device.resolution; });
    return (<menu_1.default positionLeft={p.positionLeft} buttonWidth={p.buttonWidth}>
      <user_menu_styles_1.Container width={p.buttonWidth} device={device}>
        {user_menu_1.default.map(function (item) {
        var Icon = Icons[item.iconName];
        return (<button_1.default key={item.name} onClick={p.menuMethods[item.name]}>
              <Icon />
              <separator_1.default width={10}/>
              {item.title}
            </button_1.default>);
    })}
      </user_menu_styles_1.Container>
    </menu_1.default>);
};
exports.default = View;
