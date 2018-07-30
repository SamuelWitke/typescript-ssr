"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var React = require("react");
var Form_1 = require("./Form");
var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App(props) {
        return _super.call(this, props) || this;
    }
    App.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement("div", null,
                React.createElement("h2", null, "Welcome to the Book Store")),
            React.createElement("div", null,
                React.createElement("p", { className: "App-intro" }, "To get started, edit fill out the form data and submit to save."),
                React.createElement(Form_1["default"], null))));
    };
    return App;
}(React.Component));
exports["default"] = App;
