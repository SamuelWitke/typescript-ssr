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
import * as React from "react";
import { Redirect, Route } from "react-router-dom";
export default function AuthenticateRoute(_a) {
    var component = _a.component, authenticatePath = _a.authenticatePath, isAuthenticated = _a.isAuthenticated, rest = __rest(_a, ["component", "authenticatePath", "isAuthenticated"]);
    var Component = component;
    var render = function (renderProps) {
        var element = (React.createElement(Redirect, { to: {
                pathname: authenticatePath,
                state: { from: renderProps.location }
            } }));
        if (isAuthenticated) {
            element = React.createElement(Component, __assign({}, renderProps));
        }
        return element;
    };
    return React.createElement(Route, __assign({}, rest, { render: render }));
}
//# sourceMappingURL=AuthenticateRoute.js.map