"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
exports.__esModule = true;
var React = require("react");
/*
import Home from './scenes/Home';
import Book from './scenes/Book';
import User from './scenes/User'
import { Route } from "react-router";
*/
var SideBar_1 = require("./components/SideBar");
var semantic_ui_react_1 = require("semantic-ui-react");
var semantic_ui_react_2 = require("semantic-ui-react");
var routes_1 = require("./routes");
var react_router_dom_1 = require("react-router-dom");
var Home_1 = require("./scenes/Home");
/*
const Store = () => (
        {routes.map(({ path, exact, component: Component, ...rest }: Routes) => (
            <Route key={path} path={path} exact={exact} render={(props) => (
              <Component {...props} {...rest} />
            )} />
          ))}
        )
*/
exports["default"] = (function () { return (React.createElement(react_router_dom_1.Switch, null,
    React.createElement(react_router_dom_1.Route, { path: "/", exact: true, render: Home_1["default"] }),
    routes_1["default"].map(function (_a) {
        var path = _a.path, exact = _a.exact, Component = _a.component, rest = __rest(_a, ["path", "exact", "component"]);
        return (React.createElement(react_router_dom_1.Route, { key: path, path: path, exact: exact, render: function (props) { return (React.createElement(semantic_ui_react_2.Grid, { celled: true },
                React.createElement(semantic_ui_react_2.Grid.Row, null,
                    React.createElement(semantic_ui_react_2.Grid.Column, { width: 4, style: { overflow: 'hidden' } },
                        React.createElement(SideBar_1["default"], null)),
                    React.createElement(semantic_ui_react_2.Grid.Column, { width: 12 },
                        React.createElement(semantic_ui_react_1.Container, null,
                            React.createElement(Component, __assign({}, props, rest))))))); } }));
    }))); });
