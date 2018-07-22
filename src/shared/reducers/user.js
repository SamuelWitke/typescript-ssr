"use strict";
exports.__esModule = true;
var user_1 = require("../constants/user");
//import { StoreState } from '../types/'
exports["default"] = (function (state, action) {
    if (state === void 0) { state = null; }
    switch (action.type) {
        case user_1.LOGGED_USER:
            return action.payload;
        default:
            return state;
    }
});
