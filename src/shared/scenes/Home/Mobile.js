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
var HomeHeading_1 = require("./HomeHeading");
var react_redux_1 = require("react-redux");
var react_router_redux_1 = require("react-router-redux");
var imageURL = "https://raw.githubusercontent.com/SamuelWitke/website/master/src/components/Home/img/20170704_182759.jpg";
var landingImage = {
    height: '100%',
    backgroundImage: "url(" + imageURL + ") ",
    backgroundSize: "cover "
};
var MobileContainer = /** @class */ (function (_super) {
    __extends(MobileContainer, _super);
    function MobileContainer(props) {
        var _this = _super.call(this, props) || this;
        _this.handlePusherClick = function () {
            var sidebarOpened = _this.state.sidebarOpened;
            if (sidebarOpened)
                _this.setState({ sidebarOpened: false });
        };
        _this.handleToggle = function () { return _this.setState({ sidebarOpened: !_this.state.sidebarOpened }); };
        _this.state = {
            sidebarOpened: false
        };
        return _this;
    }
    MobileContainer.prototype.render = function () {
        var _this = this;
        var children = this.props.children;
        var sidebarOpened = this.state.sidebarOpened;
        return (React.createElement(semantic_ui_react_1.Responsive, { maxWidth: semantic_ui_react_1.Responsive.onlyMobile.maxWidth },
            React.createElement(semantic_ui_react_1.Sidebar.Pushable, null,
                React.createElement(semantic_ui_react_1.Sidebar, { as: semantic_ui_react_1.Menu, animation: 'uncover', inverted: true, vertical: true, visible: sidebarOpened },
                    React.createElement(semantic_ui_react_1.Menu.Item, { as: 'a', active: true }, "Home"),
                    React.createElement(semantic_ui_react_1.Menu.Item, { as: 'a', onClick: function () { return _this.props.changeLocation('/store'); } }, "Demo Store"),
                    React.createElement(semantic_ui_react_1.Menu.Item, { as: 'a' }, "Log in"),
                    React.createElement(semantic_ui_react_1.Menu.Item, { as: 'a', onClick: function () { return _this.props.changeLocation('/sign-up'); } }, "Sign Up")),
                React.createElement(semantic_ui_react_1.Sidebar.Pusher, { dimmed: sidebarOpened, onClick: this.handlePusherClick, style: { minHeight: '100vh' } },
                    React.createElement(semantic_ui_react_1.Segment, { inverted: true, textAlign: 'center', style: { minHeight: 350, padding: '1em 0em' }, vertical: true },
                        React.createElement(semantic_ui_react_1.Container, null,
                            React.createElement(semantic_ui_react_1.Menu, { inverted: true, pointing: true, secondary: true, size: 'large' },
                                React.createElement(semantic_ui_react_1.Menu.Item, { onClick: this.handleToggle },
                                    React.createElement(semantic_ui_react_1.Icon, { name: 'sidebar' })),
                                React.createElement(semantic_ui_react_1.Menu.Item, { position: 'right' },
                                    React.createElement(semantic_ui_react_1.Button, { as: 'a', inverted: true }, "Log in"),
                                    React.createElement(semantic_ui_react_1.Button, { as: 'a', inverted: true, style: { marginLeft: '0.5em' }, onClick: function () { return _this.props.changeLocation('/sign-up'); } }, "Sign Up")))),
                        React.createElement(semantic_ui_react_1.Segment, { inverted: true, textAlign: 'center', style: __assign({}, landingImage, { minHeight: 350, padding: '1em 0em' }), vertical: true },
                            React.createElement(HomeHeading_1["default"], { mobile: true }))),
                    children))));
    };
    return MobileContainer;
}(React.Component));
function mapDispatchToProps(dispatch) {
    return {
        changeLocation: function (loc) { return dispatch(react_router_redux_1.push(loc)); }
    };
}
exports["default"] = react_redux_1.connect(null, mapDispatchToProps)(MobileContainer);
