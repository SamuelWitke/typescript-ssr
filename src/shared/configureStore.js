"use strict";
exports.__esModule = true;
var redux_1 = require("redux");
//import { StoreState } from './types/';
var redux_logger_1 = require("redux-logger/");
var api_1 = require("./api");
var redux_thunk_1 = require("redux-thunk");
var book_1 = require("./reducers/book");
var user_1 = require("./reducers/user");
var cart_1 = require("./reducers/cart");
var example_1 = require("./reducers/example");
var redux_2 = require("redux");
function configureStore() {
    var store = redux_1.applyMiddleware(redux_thunk_1["default"].withExtraArgument(api_1["default"]), redux_logger_1["default"])(redux_1.createStore)(redux_2.combineReducers({
        books: book_1["default"],
        user: user_1["default"],
        cart: cart_1["default"],
        example: example_1["default"]
    }), {
        example: {
            enthusiasmLevel: 1,
            languageName: 'TypeScript'
        },
        books: {
            selectedBook: {},
            similar: []
        }
    });
    return store;
}
exports["default"] = configureStore;
