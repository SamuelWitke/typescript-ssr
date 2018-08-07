"use strict";
exports.__esModule = true;
var React = require("react");
var semantic_ui_react_1 = require("semantic-ui-react");
var Typist = require('react-typist/src/Typist');
exports["default"] = (function (_a) {
    var mobile = _a.mobile;
    return (React.createElement(semantic_ui_react_1.Container, { text: true },
        React.createElement(semantic_ui_react_1.Header, { as: 'h1', content: 'Samuel Witke', inverted: true, style: {
                fontSize: mobile ? '2em' : '4em',
                fontWeight: 'normal',
                marginBottom: 0,
                marginTop: mobile ? '1.5em' : '3em'
            } }),
        React.createElement(semantic_ui_react_1.Header, { as: 'h2', content: React.createElement(Typist.Typist, null, "Animate this text."), inverted: true, style: {
                fontSize: mobile ? '1.5em' : '1.7em',
                fontWeight: 'normal',
                marginTop: mobile ? '0.5em' : '1.5em'
            } }),
        React.createElement(semantic_ui_react_1.Button, { primary: true, size: 'huge' },
            "Get Started",
            React.createElement(semantic_ui_react_1.Icon, { name: 'angle left' }))));
});
