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
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
exports.__esModule = true;
var React = require("react");
var semantic_ui_react_1 = require("semantic-ui-react");
var react_redux_1 = require("react-redux");
var react_router_redux_1 = require("react-router-redux");
var HomeHeading_1 = require("./HomeHeading");
var imageURL = "https://raw.githubusercontent.com/SamuelWitke/website/master/src/components/Home/img/20170704_182759.jpg";
var landingImage = {
    height: '100%',
    backgroundImage: "url(" + imageURL + ") ",
    backgroundSize: "cover "
};
var DesktopContainer = /** @class */ (function (_super) {
    __extends(DesktopContainer, _super);
    function DesktopContainer(props) {
        var _this = _super.call(this, props) || this;
        _this.hideFixedMenu = function () { return _this.setState({ fixed: false }); };
        _this.showFixedMenu = function () { return _this.setState({ fixed: true }); };
        _this.state = {
            fixed: false
        };
        return _this;
    }
    DesktopContainer.prototype.render = function () {
        var _this = this;
        var children = this.props.children;
        var fixed = this.state.fixed;
        return (React.createElement(semantic_ui_react_1.Responsive, { minWidth: semantic_ui_react_1.Responsive.onlyTablet.minWidth },
            React.createElement(semantic_ui_react_1.Visibility, { once: false, onBottomPassed: this.showFixedMenu, onBottomPassedReverse: this.hideFixedMenu },
                React.createElement(semantic_ui_react_1.Segment, { style: { minHeight: 700, padding: '1em 0em' }, inverted: true, textAlign: 'center', vertical: true },
                    React.createElement(semantic_ui_react_1.Menu, { fixed: fixed ? 'top' : undefined, inverted: !fixed, pointing: !fixed, secondary: !fixed, size: 'large' },
                        React.createElement(semantic_ui_react_1.Container, null,
                            React.createElement(semantic_ui_react_1.Menu.Item, { as: 'a', active: true }, "Home"),
                            React.createElement(semantic_ui_react_1.Menu.Item, { as: 'a', onClick: function () { return _this.props.changeLocation('/store'); } }, "Demo Store"),
                            React.createElement(semantic_ui_react_1.Menu.Item, { position: 'right' },
                                React.createElement(semantic_ui_react_1.Button, { as: 'a', inverted: !fixed }, "Log in"),
                                React.createElement(semantic_ui_react_1.Button, { as: 'a', inverted: !fixed, primary: fixed, style: { marginLeft: '0.5em' }, onClick: function () { return _this.props.changeLocation('/sign-up'); } }, "Sign Up")))),
                    React.createElement(semantic_ui_react_1.Segment, { style: __assign({}, landingImage, { minHeight: 900, padding: '1em 0em' }), inverted: true, textAlign: 'center', vertical: true },
                        React.createElement("div", { className: "LandingImage" },
                            React.createElement(HomeHeading_1["default"], { mobile: false }))))),
            children));
    };
    return DesktopContainer;
}(React.Component));
function mapDispatchToProps(dispatch) {
    return {
        changeLocation: function (loc) { return dispatch(react_router_redux_1.push(loc)); }
    };
}
exports["default"] = react_redux_1.connect(null, mapDispatchToProps)(DesktopContainer);
