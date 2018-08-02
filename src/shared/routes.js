"use strict";
exports.__esModule = true;
var Home_1 = require("./scenes/Home");
var Book_1 = require("./scenes/Book");
var User_1 = require("./scenes/User");
var routes = [
    {
        path: "/",
        exact: true,
        component: Home_1["default"]
    },
    {
        path: '/book/:key',
        exact: true,
        component: Book_1["default"]
    }, {
        path: "/User",
        exact: true,
        component: User_1["default"]
    }
];
exports["default"] = routes;
