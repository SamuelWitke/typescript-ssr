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
import NavBar from "./navBar/NavBar";
import Progress from "./progress/Progress";
export default function Header(_a) {
    var isBusy = _a.isBusy, rest = __rest(_a, ["isBusy"]);
    return (React.createElement("div", { className: "sticky-top" },
        React.createElement(NavBar, __assign({}, rest)),
        React.createElement(Progress, { isBusy: isBusy })));
}
//# sourceMappingURL=Header.js.map