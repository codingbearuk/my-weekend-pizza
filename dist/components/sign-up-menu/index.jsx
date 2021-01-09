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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var react_redux_1 = require("react-redux");
var popup_action_1 = require("redux/actions/popup.action");
var navigation_actions_1 = require("redux/actions/navigation.actions");
var post_1 = __importDefault(require("api-comunication/post"));
var language_sources_1 = __importDefault(require("language-sources"));
var sign_up_menu_view_1 = __importDefault(require("./sign-up-menu.view"));
var sign_up_menu_state_1 = require("./sign-up-menu.state");
var SignUpMenu = function (p) {
    var _a = react_1.useReducer(sign_up_menu_state_1.reducer, sign_up_menu_state_1.initialState), state = _a[0], dispatch = _a[1];
    var _b = react_1.useState(false), isValidationOk = _b[0], setValidation = _b[1];
    var _c = react_1.useState(false), isLoading = _c[0], setLoading = _c[1];
    var positionLeft = p.buttonRef.current.offsetLeft;
    var buttonWidth = p.buttonRef.current.offsetWidth;
    var reduxDispatch = react_redux_1.useDispatch();
    function handleInputs(value, name) {
        if (name === "email") {
            dispatch({
                type: "insert email",
                payload: { email: value },
            });
        }
        else if (name === "password") {
            dispatch({
                type: "insert password",
                payload: { password: value },
            });
        }
        else if (name === "address") {
            dispatch({
                type: "insert address",
                payload: { address: value },
            });
        }
        else if (name === "city") {
            dispatch({
                type: "insert city",
                payload: { city: value },
            });
        }
        else if (name === "postcode") {
            dispatch({
                type: "insert postcode",
                payload: { postcode: value },
            });
        }
        else if (name === "phone") {
            dispatch({
                type: "insert phone",
                payload: { phone: value },
            });
        }
    }
    function handleValidationErrors() {
        var errors = state.errors;
        if (errors.email)
            return true;
        else if (errors.password)
            return true;
        else if (errors.address)
            return true;
        else if (errors.city)
            return true;
        else if (errors.postcode)
            return true;
        else if (errors.phone)
            return true;
        else
            return false;
    }
    function handleRegister() {
        return __awaiter(this, void 0, void 0, function () {
            var isError, body, res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        setValidation(false);
                        isError = handleValidationErrors();
                        if (!!isError) return [3 /*break*/, 2];
                        body = {
                            email: state.email,
                            password: state.password,
                            address: state.address,
                            city: state.city,
                            postcode: state.postcode,
                            phone: state.phone,
                        };
                        return [4 /*yield*/, post_1.default("/register", body)];
                    case 1:
                        res = _a.sent();
                        console.log(res);
                        if (res.status === "error") {
                            setLoading(false);
                            dispatch({
                                type: "throw general error",
                                payload: {
                                    generalError: res.msg,
                                },
                            });
                        }
                        else {
                            setLoading(false);
                            reduxDispatch(popup_action_1.showPopup({
                                title: language_sources_1.default.signUp.popup.title,
                                msg: language_sources_1.default.signUp.popup.msg,
                            }));
                            reduxDispatch(navigation_actions_1.menuOFF());
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        setLoading(false);
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    }
    // error handlers for halidation
    var throwError = function (type) {
        dispatch({
            type: "throw error",
            payload: {
                errorType: type,
            },
        });
    };
    var releaseError = function (type) {
        dispatch({
            type: "release error",
            payload: {
                errorType: type,
            },
        });
    };
    function handleCreateAccountButton() {
        setLoading(true);
        // regular expressions
        var mailRegEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        var passwordRegEx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
        var postcodeRegEx = /[A-Z]{1,2}[0-9]{1,2} ?[0-9][A-Z]{2}/i;
        var phoneRegEx = /(((\+44)? ?(\(0\))? ?)|(0))( ?[0-9]{3,4}){3}/;
        // validation
        if (!mailRegEx.test(state.email))
            throwError("email");
        else if (mailRegEx.test(state.email))
            releaseError("email");
        if (!passwordRegEx.test(state.password))
            throwError("password");
        else if (passwordRegEx.test(state.password))
            releaseError("password");
        if (state.address.length <= 0)
            throwError("address");
        else if (state.address.length > 0)
            releaseError("address");
        if (state.city.length === 0)
            throwError("city");
        else if (state.city.length > 0)
            releaseError("city");
        if (!postcodeRegEx.test(state.postcode))
            throwError("postcode");
        else if (postcodeRegEx.test(state.postcode))
            releaseError("postcode");
        if (!phoneRegEx.test(state.phone))
            throwError("phone");
        else if (phoneRegEx.test(state.phone))
            releaseError("phone");
        setValidation(true);
    }
    react_1.useEffect(function () {
        if (isValidationOk)
            handleRegister();
    }, [isValidationOk]);
    return (<sign_up_menu_view_1.default {...{
        positionLeft: positionLeft,
        buttonWidth: buttonWidth,
        handleInputs: handleInputs,
        handleCreateAccountButton: handleCreateAccountButton,
        isLoading: isLoading,
    }} errors={state.errors}/>);
};
exports.default = SignUpMenu;
