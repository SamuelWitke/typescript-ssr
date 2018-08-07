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
var TypistLoop = /** @class */ (function (_super) {
    __extends(TypistLoop, _super);
    function TypistLoop() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            currentIndex: 0
        };
        _this.onTypingDone = function () {
            _this._timer = window.setTimeout(_this.showNext, _this.props.interval);
        };
        _this.showNext = function () {
            var children = _this.props.children;
            _this.setState(function (_a) {
                var currentIndex = _a.currentIndex;
                return ({
                    currentIndex: (currentIndex + 1) % React.Children.count(children)
                });
            });
        };
        return _this;
    }
    TypistLoop.prototype.componentWillUnmount = function () {
        if (this._timer) {
            clearTimeout(this._timer);
        }
    };
    TypistLoop.prototype.render = function () {
        var onTypingDone = this.onTypingDone;
        var currentIndex = this.state.currentIndex;
        var children = this.props.children;
        return React.Children.map(children, function (child, i) {
            return i === currentIndex && React.cloneElement(child, { onTypingDone: onTypingDone });
        });
    };
    TypistLoop.defaultProps = {
        interval: 1000
    };
    return TypistLoop;
}(React.Component));
exports["default"] = TypistLoop;
