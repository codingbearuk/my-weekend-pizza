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
var main_menu_styles_1 = require("./main-menu.styles");
var language_sources_1 = __importDefault(require("language-sources"));
var menu_t_1 = __importDefault(require("utils/menues/menu.t"));
var MainMenu = function (p) {
    var containerRef = react_1.useRef(null);
    var menuBoxRef = react_1.useRef(null);
    react_1.useEffect(function () {
        p.animations.enter(containerRef, menuBoxRef);
    }, []);
    return (<>
      <main_menu_styles_1.Container ref={containerRef} onClick={function () { return p.animations.close(containerRef, menuBoxRef); }}/>
      <main_menu_styles_1.MenuBox ref={menuBoxRef}>
        <main_menu_styles_1.CloseContainer>
          <react_bootstrap_icons_1.X size='20px' onClick={function () { return p.animations.close(containerRef, menuBoxRef); }}/>
        </main_menu_styles_1.CloseContainer>
        <h1>{language_sources_1.default.menu.header}</h1>
        <nav>
          {menu_t_1.default.map(function (item) { return (<main_menu_styles_1.MenuItem key={item.name} onClick={function () { return p.handleMenuItemClick(item.name); }}>
              <react_bootstrap_icons_1.ArrowRightCircleFill />
              {item.title}
            </main_menu_styles_1.MenuItem>); })}
        </nav>
      </main_menu_styles_1.MenuBox>
    </>);
};
exports.default = MainMenu;
