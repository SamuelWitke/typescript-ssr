"use strict";
exports.__esModule = true;
var React = require("react");
var Home_1 = require("./scenes/Home");
function App() {
    return (React.createElement("div", { className: "App" },
        React.createElement("div", { className: "App-header" },
            React.createElement("h2", null, "Something")),
        React.createElement("p", { className: "App-intro" },
            "To get started, edit ",
            React.createElement("code", null, "src/App.tsx"),
            " and save to reload."),
        React.createElement(Home_1["default"], null)));
}
exports["default"] = App;
