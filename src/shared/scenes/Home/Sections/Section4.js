"use strict";
exports.__esModule = true;
var React = require("react");
var semantic_ui_react_1 = require("semantic-ui-react");
exports["default"] = (function () { return (React.createElement(semantic_ui_react_1.Segment, { inverted: true, vertical: true, style: { padding: '5em 0em' } },
    React.createElement(semantic_ui_react_1.Container, null,
        React.createElement(semantic_ui_react_1.Grid, { divided: true, inverted: true, stackable: true },
            React.createElement(semantic_ui_react_1.Grid.Row, null,
                React.createElement(semantic_ui_react_1.Grid.Column, { width: 3 },
                    React.createElement(semantic_ui_react_1.Header, { inverted: true, as: 'h4', content: 'Personal Projects' }),
                    React.createElement(semantic_ui_react_1.List, { link: true, inverted: true },
                        React.createElement(semantic_ui_react_1.List.Item, { as: 'a', href: "http://partifystart.herokuapp.com" }, " Partify "),
                        React.createElement(semantic_ui_react_1.List.Item, { as: 'a', href: "https://samuelwitke.github.io/website/" }, "React App Projects"),
                        React.createElement(semantic_ui_react_1.List.Item, { as: 'a', href: "https://github.com/SamuelWitke/Door-bell" }, " Door Bell Api"))),
                React.createElement(semantic_ui_react_1.Grid.Column, { width: 7 },
                    React.createElement(semantic_ui_react_1.Header, { as: 'h4', inverted: true }, "Samuel Witke"),
                    React.createElement("p", null, "Samuel Witke @2018"),
                    React.createElement("p", null, "Page Image Taken by Samuel Witke in Copenhagen Denmark"))))))); });
