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
var semantic_ui_react_1 = require("semantic-ui-react");
var Link = require('react-router-hash-link');
var HomepageHeading = /** @class */ (function (_super) {
    __extends(HomepageHeading, _super);
    function HomepageHeading() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HomepageHeading.prototype.render = function () {
        var mobile = this.props.mobile;
        return (React.createElement(semantic_ui_react_1.Container, { text: true },
            React.createElement(semantic_ui_react_1.Header, { as: 'h1', content: 'Samuel Witke', inverted: true, style: {
                    fontSize: mobile ? '2em' : '4em',
                    fontWeight: 'normal',
                    marginBottom: 0,
                    marginTop: mobile ? '1.5em' : '3em'
                } }),
            React.createElement(semantic_ui_react_1.Header, { as: 'h2', content: 'Portfolio.', inverted: true, style: {
                    fontSize: mobile ? '1.5em' : '1.7em',
                    fontWeight: 'normal',
                    marginTop: mobile ? '0.5em' : '1.5em'
                } }),
            React.createElement(Link.HashLink, { to: "/#about" },
                React.createElement(semantic_ui_react_1.Button, { secondary: true, size: 'huge' },
                    "Get Started",
                    React.createElement(semantic_ui_react_1.Icon, { name: 'angle left' })))));
    };
    return HomepageHeading;
}(React.Component));
exports["default"] = HomepageHeading;
