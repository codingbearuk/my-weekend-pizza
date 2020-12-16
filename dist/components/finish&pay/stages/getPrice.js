"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var getPrice = function (itemPrice, itemSize, itemAmount) {
    var price = itemPrice;
    if (itemSize) {
        switch (itemSize[0]) {
            case 's':
                return price;
            case 'm':
                return price + 3;
            case 'l':
                return price + 5;
        }
    }
    else {
        return price * itemAmount;
    }
};
exports.default = getPrice;
