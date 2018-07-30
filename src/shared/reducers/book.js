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
var book_1 = require("../constants/book");
var request_1 = require("../constants/request");
//import { StoreState } from '../types/'
exports["default"] = (function (state, action) {
    if (state === void 0) { state = { allBook: [], selectedBook: {}, similar: [] }; }
    switch (action.type) {
        case book_1.BOOK_REMOVE:
            return __assign({}, state, { selectedBook: null, similar: [] });
        case book_1.BOOKS_SUCCESS:
            return { allBooks: action.payload, similar: [] };
        case book_1.BOOK_SUCCESS:
            return __assign({}, state, { selectedBook: action.payload, similar: [] });
        case request_1.SIMILAR_SUCCESS:
            return __assign({}, state, { similar: action.payload });
        default:
            return state;
    }
});
