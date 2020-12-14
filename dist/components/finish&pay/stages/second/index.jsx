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
var locationQ_1 = __importDefault(require("locationQ"));
var finish_pay_action_1 = require("redux/actions/finish&pay.action");
var date_fns_1 = require("date-fns");
var second_view_1 = __importDefault(require("./second.view"));
var finish_pay_action_2 = require("redux/actions/finish&pay.action");
var SecondStage = function (p) {
    var _a = react_1.useState(date_fns_1.setHours(date_fns_1.setMinutes(new Date(), 30), 13)), deliveryDate = _a[0], setDeliveryDate = _a[1];
    var user = react_redux_1.useSelector(function (s) { return s.user; });
    var dispatch = react_redux_1.useDispatch();
    var getDeliveryPrice = function () { return __awaiter(void 0, void 0, void 0, function () {
        var myLocation, lat, lon, wrexLat, wrexLon, coordString, getRoute, distance, distanceInMiles;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch("https://eu1.locationiq.com/v1/search.php?key=" + locationQ_1.default + "&city=" + user.city + "&country=great%britain&street=" + user.adress + "&format=json").then(function (res) { return res.json(); })];
                case 1:
                    myLocation = _a.sent();
                    lat = myLocation[0].lat;
                    lon = myLocation[0].lon;
                    wrexLat = '53.046910';
                    wrexLon = '-2.991670';
                    coordString = lon + "," + lat + ";" + wrexLon + "," + wrexLat;
                    return [4 /*yield*/, fetch("https://eu1.locationiq.com/v1/directions/driving/" + coordString + "?key=" + locationQ_1.default).then(function (res) { return res.json(); })];
                case 2:
                    getRoute = _a.sent();
                    distance = getRoute.routes[0].distance;
                    distanceInMiles = Math.round(distance * 0.000621371192);
                    if (distanceInMiles <= 5)
                        dispatch(finish_pay_action_1.setDeliveryPrice(1));
                    else if (distanceInMiles <= 10)
                        dispatch(finish_pay_action_1.setDeliveryPrice(2));
                    else if (distanceInMiles <= 15)
                        dispatch(finish_pay_action_1.setDeliveryPrice(5));
                    else if (distanceInMiles <= 20)
                        dispatch(finish_pay_action_1.setDeliveryPrice(10));
                    else if (distanceInMiles <= 30)
                        dispatch(finish_pay_action_1.setDeliveryPrice(20));
                    else if (distanceInMiles <= 40)
                        dispatch(finish_pay_action_1.setDeliveryPrice(30));
                    else if (distanceInMiles <= 50)
                        dispatch(finish_pay_action_1.setDeliveryPrice(40));
                    else if (distanceInMiles <= 60)
                        dispatch(finish_pay_action_1.setDeliveryPrice(50));
                    else if (distanceInMiles <= 70)
                        dispatch(finish_pay_action_1.setDeliveryPrice(60));
                    else
                        dispatch(finish_pay_action_1.setDeliveryPrice(100));
                    return [2 /*return*/];
            }
        });
    }); };
    var handleNextButton = react_1.useCallback(function () {
        p.setNoStages(3);
        p.setStage(3);
    }, []);
    var handleSetDate = function (date) {
        setDeliveryDate(date);
        dispatch(finish_pay_action_2.setDeliveryDate(date));
    };
    var handleSetStartAndEndDate = function () {
        var today = date_fns_1.setHours(date_fns_1.setMinutes(new Date(), 30), 13);
        var dayOfWeek = today.getDay();
        var getNewDate = function (plusDays) {
            var date = today.getMonth() + 1 + "." + (today.getDate() + plusDays) + "." + today.getFullYear();
            return date_fns_1.setHours(date_fns_1.setMinutes(new Date(date), 0), 12);
        };
        var toReturn = function (startDays, endDays) {
            var objectToReturn = { start: getNewDate(startDays), end: getNewDate(endDays) };
            return objectToReturn;
        };
        switch (dayOfWeek) {
            case 0:
                return toReturn(0, 0);
            case 1:
                return toReturn(5, 6);
            case 2:
                return toReturn(4, 5);
            case 3:
                return toReturn(3, 4);
            case 4:
                return toReturn(2, 3);
            case 5:
                return toReturn(1, 2);
            case 6:
                return toReturn(0, 1);
        }
    };
    react_1.useEffect(function () {
        getDeliveryPrice();
        setDeliveryDate(handleSetStartAndEndDate().start);
        dispatch(finish_pay_action_2.setDeliveryDate(handleSetStartAndEndDate().start));
    }, []);
    return second_view_1.default({
        state: {
            deliveryDate: deliveryDate,
        },
        handlers: {
            handleNextButton: handleNextButton,
            handleSetDate: handleSetDate,
            handleSetStartAndEndDate: handleSetStartAndEndDate,
        },
    });
};
exports.default = SecondStage;
