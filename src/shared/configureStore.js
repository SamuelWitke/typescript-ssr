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
var createBrowserHistory_1 = require("history/createBrowserHistory");
var createMemoryHistory_1 = require("history/createMemoryHistory");
var redux_form_1 = require("redux-form");
var react_router_redux_1 = require("react-router-redux");
if (typeof window === 'undefined') {
    // since the server has no HTML5 push states,
    // history must be temporarily created in memory
    exports.history = createMemoryHistory_1["default"]();
}
else {
    // on the client, we can go ahead and make a standard
    // `history` state
    exports.history = createBrowserHistory_1["default"]();
}
function configureStore() {
    var store = redux_1.applyMiddleware(redux_thunk_1["default"].withExtraArgument(api_1["default"]), redux_logger_1["default"], react_router_redux_1.routerMiddleware(exports.history))(redux_1.createStore)(redux_2.combineReducers({
        router: react_router_redux_1.routerReducer,
        books: book_1["default"],
        user: user_1["default"],
        form: redux_form_1.reducer,
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
        },
        cart: []
    });
    return store;
}
exports.configureStore = configureStore;
