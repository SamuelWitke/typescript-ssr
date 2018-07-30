"use strict";
exports.__esModule = true;
var cart_1 = require("../constants/cart");
//import { StoreState } from '../types/'
exports["default"] = (function (state, action) {
    if (state === void 0) { state = []; }
    switch (action.type) {
        case cart_1.ADDED_TO_CART:
            return state.concat([action.payload]);
        default:
            return state;
    }
});
