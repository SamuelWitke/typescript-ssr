"use strict";
exports.__esModule = true;
var React = require("react");
var Mobile_1 = require("./Mobile");
var Container_1 = require("./Container");
var index_1 = require("./Sections/index");
var ResponsiveContainer = function (_a) {
    var children = _a.children;
    return (React.createElement("div", null,
        React.createElement(Container_1["default"], null, children),
        React.createElement(Mobile_1["default"], null, children)));
};
exports["default"] = (function () { return (React.createElement(ResponsiveContainer, null,
    React.createElement("div", { id: "about" },
        React.createElement(index_1["default"], null)))); });
