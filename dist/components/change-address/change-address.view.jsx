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
var BSIcon = __importStar(require("react-bootstrap-icons"));
var react_bootstrap_icons_1 = require("react-bootstrap-icons");
var react_redux_1 = require("react-redux");
var separator_1 = __importDefault(require("components/UI/separator"));
var change_address_styles_1 = require("./change-address.styles");
var language_sources_1 = __importDefault(require("language-sources"));
var View = function (p) {
    var device = react_redux_1.useSelector(function (s) { return s.device.resolution; });
    return (<change_address_styles_1.Container ref={p.refs.container}>
      <change_address_styles_1.Modal ref={p.refs.modal}>
        <nav>
          <react_bootstrap_icons_1.XCircleFill onClick={p.handlers.handleCloseModal}/>
        </nav>
        <section>
          <h1>{language_sources_1.default.changeAddressModal.title}</h1>
          <separator_1.default height={30}/>
          {p.inputs.map(function (input, index) {
        var Icon = BSIcon[input.icon];
        return (<change_address_styles_1.InputContainer key={name + index} device={device}>
                <div>
                  <Icon />
                  {device === 'desktop' && input.title}
                </div>
                <input title={input.title} name={input.name} value={input.value} onChange={function (e) { return p.handlers.handleSetMyAddress(e.target.name, e.target.value); }}/>
              </change_address_styles_1.InputContainer>);
    })}
        </section>
        <change_address_styles_1.UpdateButton isLoading={p.state.isLoading} isUpdated={p.state.isUpdated} onClick={!p.state.isLoading && p.handlers.handleUpdateButton}>
          {p.state.isLoading
        ? language_sources_1.default.changeAddressModal.loading
        : p.state.isUpdated
            ? language_sources_1.default.changeAddressModal.updated
            : language_sources_1.default.changeAddressModal.button}
        </change_address_styles_1.UpdateButton>
      </change_address_styles_1.Modal>
    </change_address_styles_1.Container>);
};
exports.default = View;
