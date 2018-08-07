"use strict";
exports.__esModule = true;
var React = require("react");
var semantic_ui_react_1 = require("semantic-ui-react");
exports["default"] = (function () { return (React.createElement(semantic_ui_react_1.Segment, { inverted: true, vertical: true, style: { padding: '5em 0em' } },
    React.createElement(semantic_ui_react_1.Container, null,
        React.createElement(semantic_ui_react_1.Grid, { divided: true, inverted: true, stackable: true },
            React.createElement(semantic_ui_react_1.Grid.Row, null,
                React.createElement(semantic_ui_react_1.Grid.Column, { width: 3 },
                    React.createElement(semantic_ui_react_1.Header, { inverted: true, as: 'h4', content: 'About' }),
                    React.createElement(semantic_ui_react_1.List, { link: true, inverted: true },
                        React.createElement(semantic_ui_react_1.List.Item, { as: 'a' }, "Sitemap"),
                        React.createElement(semantic_ui_react_1.List.Item, { as: 'a' }, "Contact Us"),
                        React.createElement(semantic_ui_react_1.List.Item, { as: 'a' }, "Religious Ceremonies"),
                        React.createElement(semantic_ui_react_1.List.Item, { as: 'a' }, "Gazebo Plans"))),
                React.createElement(semantic_ui_react_1.Grid.Column, { width: 3 },
                    React.createElement(semantic_ui_react_1.Header, { inverted: true, as: 'h4', content: 'Services' }),
                    React.createElement(semantic_ui_react_1.List, { link: true, inverted: true },
                        React.createElement(semantic_ui_react_1.List.Item, { as: 'a' }, "Banana Pre-Order"),
                        React.createElement(semantic_ui_react_1.List.Item, { as: 'a' }, "DNA FAQ"),
                        React.createElement(semantic_ui_react_1.List.Item, { as: 'a' }, "How To Access"),
                        React.createElement(semantic_ui_react_1.List.Item, { as: 'a' }, "Favorite X-Men"))),
                React.createElement(semantic_ui_react_1.Grid.Column, { width: 7 },
                    React.createElement(semantic_ui_react_1.Header, { as: 'h4', inverted: true }, "Footer Header"),
                    React.createElement("p", null, "Extra space for a call to action inside the footer that could help re-engage users."))))))); });
