"use strict";
exports.__esModule = true;
var React = require("react");
function Hello(_a) {
    var name = _a.name, _b = _a.enthusiasmLevel, enthusiasmLevel = _b === void 0 ? 1 : _b, onIncrement = _a.onIncrement, onDecrement = _a.onDecrement;
    if (enthusiasmLevel <= 0) {
        throw new Error('You could be a little more enthusiastic. :D');
    }
    return (React.createElement("div", { className: "hello" },
        React.createElement("div", { className: "greeting" },
            "Hello ",
            name + getExclamationMarks(enthusiasmLevel)),
        React.createElement("div", null,
            React.createElement("button", { onClick: onDecrement }, "-"),
            React.createElement("button", { onClick: onIncrement }, "+"))));
}
exports["default"] = Hello;
// helpers
function getExclamationMarks(numChars) {
    return Array(numChars + 1).join('!');
}
