"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
exports.__esModule = true;
var cart_1 = require("../constants/cart");
//import { StoreState } from '../types/'
exports["default"] = (function (state, action) {
    if (state === void 0) { state = []; }
    switch (action.type) {
        case cart_1.ADDED_TO_CART:
            return __assign({}, state, { cart: action.payload });
        default:
            return state;
    }
});
