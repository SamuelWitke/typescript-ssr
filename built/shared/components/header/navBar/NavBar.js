import * as React from "react";
import { Link } from "react-router-dom";
import { homePath, signUpPath } from "../../../routes/paths";
import logo from "./logo.svg";
import "./NavBar.css";
export default function NavBar(props) {
    var authenticationLink = (React.createElement(Link, { to: signUpPath, className: "nav-link" }, "Sign in / up"));
    if (props.isAuthenticated) {
        authenticationLink = (React.createElement("a", { href: "#", onClick: props.handleSignOut, className: "nav-link" }, "Sign out"));
    }
    return (React.createElement("nav", { className: "navbar navbar-expand-md navbar-dark bg-dark" },
        React.createElement("div", { className: "container-fluid" },
            React.createElement(Link, { to: homePath, className: "navbar-brand" },
                React.createElement("img", { src: logo, className: "brand-logo d-inline-block align-top", alt: "" }),
                "React app"),
            React.createElement("button", { className: "navbar-toggler", type: "button", "data-toggle": "collapse", "data-target": "#navbarSupportedContent", "aria-controls": "navbarSupportedContent", "aria-expanded": "false", "aria-label": "Toggle navigation" },
                React.createElement("span", { className: "navbar-toggler-icon" })),
            React.createElement("div", { className: "collapse navbar-collapse", id: "navbarSupportedContent" },
                React.createElement("ul", { className: "navbar-nav ml-auto" },
                    React.createElement("li", { className: "nav-item" }, authenticationLink))))));
}
//# sourceMappingURL=NavBar.js.map