"use strict";
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
var react_1 = require("react");
var react_redux_1 = require("react-redux");
var react_stripe_js_1 = require("@stripe/react-stripe-js");
var post_1 = __importDefault(require("api-comunication/post"));
var third_stage_view_1 = __importDefault(require("./third-stage.view"));
var getTotal_1 = __importDefault(require("../getTotal"));
var ThirdStep = function (p) {
    var cart = react_redux_1.useSelector(function (s) { return s.cart; });
    var user = react_redux_1.useSelector(function (s) { return s.user; });
    var finnishAndPayState = react_redux_1.useSelector(function (s) { return s.finishAndPay; });
    var stripe = react_stripe_js_1.useStripe();
    var handleNextButton = function () { return __awaiter(void 0, void 0, void 0, function () {
        var paymentSessionID, cartStringify, result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, post_1.default('/create-checkout-session', {
                        amount: fullPrice(),
                        cart: JSON.stringify(cart),
                        deliveryDate: finnishAndPayState.deliveryDate,
                        address: {
                            city: user.city,
                            postcode: user.postcode,
                            address: user.adress,
                            phone: user.phone,
                        },
                    })];
                case 1:
                    paymentSessionID = _a.sent();
                    cartStringify = JSON.stringify(cart);
                    window.localStorage.setItem(paymentSessionID.id, cartStringify);
                    return [4 /*yield*/, stripe.redirectToCheckout({ sessionId: paymentSessionID.session_id })];
                case 2:
                    result = _a.sent();
                    if (result.error)
                        alert(result.error);
                    return [2 /*return*/];
            }
        });
    }); };
    var fullPrice = react_1.useCallback(function () {
        var orderPrice = getTotal_1.default(cart);
        var deliveryPrice = finnishAndPayState.deliveryPrice;
        return orderPrice + deliveryPrice;
    }, []);
    return third_stage_view_1.default({
        handlers: {
            handleNextButton: handleNextButton,
        },
        fullPrice: fullPrice(),
        deliveryPrice: finnishAndPayState.deliveryPrice,
        cartItems: cart.map(function (item) { return ({
            name: item.name,
            price: item.price,
            size: item.size,
            amount: item.amount,
        }); }),
    });
};
exports.default = ThirdStep;
