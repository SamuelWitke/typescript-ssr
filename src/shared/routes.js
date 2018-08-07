"use strict";
exports.__esModule = true;
var Store_1 = require("./scenes/Store");
var Book_1 = require("./scenes/Book");
var User_1 = require("./scenes/User");
var routes = [
    {
        path: "/store",
        exact: true,
        component: Store_1["default"]
    },
    {
        path: '/book/:key',
        exact: true,
        component: Book_1["default"]
    }, {
        path: "/sign-up",
        exact: true,
        component: User_1["default"]
    }
];
exports["default"] = routes;
