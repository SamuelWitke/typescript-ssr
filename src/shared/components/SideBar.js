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
var react_redux_1 = require("react-redux");
var react_router_redux_1 = require("react-router-redux");
var SidebarContainer = /** @class */ (function (_super) {
    __extends(SidebarContainer, _super);
    function SidebarContainer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = { visible: true };
        _this.handleButtonClick = function () { return _this.setState({ visible: !_this.state.visible }); };
        _this.handleSidebarHide = function () { return _this.setState({ visible: false }); };
        return _this;
    }
    SidebarContainer.prototype.render = function () {
        var _this = this;
        var visible = this.state.visible;
        var _a = this.props, user = _a.user, cart = _a.cart;
        return (React.createElement("div", { style: { height: '100vh', width: '100%', overflow: 'hidden', padding: '10px', marginLeft: 'auto', marginRight: "auto" } },
            React.createElement(semantic_ui_react_1.Button, { onClick: this.handleButtonClick }, "Navigation"),
            React.createElement(semantic_ui_react_1.Sidebar.Pushable, { as: semantic_ui_react_1.Segment },
                React.createElement(semantic_ui_react_1.Sidebar, { as: semantic_ui_react_1.Menu, animation: 'overlay', icon: 'labeled', inverted: true, onHide: this.handleSidebarHide, vertical: true, style: { width: '100%', margin: '10px', textAlign: 'center' }, visible: visible },
                    React.createElement(semantic_ui_react_1.Menu.Item, { as: 'a', onClick: function () { return _this.props.changeLocation('/'); } },
                        React.createElement(semantic_ui_react_1.Icon, { name: 'home' }),
                        "Home"),
                    React.createElement(semantic_ui_react_1.Menu.Item, { as: 'a', onClick: function () { return _this.props.changeLocation('/user'); } },
                        React.createElement(semantic_ui_react_1.Icon, { name: 'user' }),
                        user != null ?
                            user.username :
                            "User"),
                    React.createElement(semantic_ui_react_1.Menu.Item, { as: 'a', onClick: function () { return _this.props.changeLocation('/cart'); } },
                        React.createElement(semantic_ui_react_1.Icon, { name: 'shopping cart' }),
                        React.createElement(semantic_ui_react_1.Label, { color: 'blue', floating: true, style: { margin: '10px' } }, cart.length),
                        "Shopping Cart")),
                React.createElement(semantic_ui_react_1.Sidebar.Pusher, null))));
    };
    return SidebarContainer;
}(React.Component));
function mapStateToProps(state) {
    var user = state.user, cart = state.cart;
    return { user: user, cart: cart };
}
function mapDispatchToProps(dispatch) {
    return {
        changeLocation: function (loc) { return dispatch(react_router_redux_1.push(loc)); }
    };
}
exports["default"] = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(SidebarContainer);
