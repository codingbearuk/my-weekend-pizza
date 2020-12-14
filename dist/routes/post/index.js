"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var test_1 = __importDefault(require("./test"));
var register_1 = __importDefault(require("./register"));
var login_1 = __importDefault(require("./login"));
var authorisation_1 = __importDefault(require("./authorisation"));
var pizza_photo_upload_1 = __importDefault(require("./pizza-photo-upload"));
var add_pizza_1 = __importDefault(require("./add-pizza"));
var sauce_photo_upload_1 = __importDefault(require("./sauce-photo-upload"));
var add_sauce_1 = __importDefault(require("./add-sauce"));
var create_checkout_session_1 = __importDefault(require("./create-checkout-session"));
var finnish_order_1 = __importDefault(require("./finnish-order"));
var update_user_details_1 = __importDefault(require("./update-user-details"));
var create_new_message_1 = __importDefault(require("./create-new-message"));
var edit_order_status_1 = __importDefault(require("./edit-order-status"));
var archive_order_1 = __importDefault(require("./archive-order"));
var index = {
    test: test_1.default,
    register: register_1.default,
    login: login_1.default,
    authorisation: authorisation_1.default,
    pizzaPhotoUpload: pizza_photo_upload_1.default,
    addPizza: add_pizza_1.default,
    saucePhotoUpload: sauce_photo_upload_1.default,
    addSauce: add_sauce_1.default,
    createCheckoutSession: create_checkout_session_1.default,
    finnishOrder: finnish_order_1.default,
    updateUserDetails: update_user_details_1.default,
    createNewMessage: create_new_message_1.default,
    editOrderStatus: edit_order_status_1.default,
    archiveOrder: archive_order_1.default,
};
exports.default = index;
