"use strict";
exports.__esModule = true;
var React = require("react");
var semantic_ui_react_1 = require("semantic-ui-react");
var TypistLoop_1 = require("../TypistLoop");
var Typist = require('react-typist')["default"];
exports["default"] = (function () { return (React.createElement(semantic_ui_react_1.Segment, { style: { padding: '8em 0em' }, vertical: true },
    React.createElement(semantic_ui_react_1.Grid, { container: true, stackable: true, verticalAlign: 'middle' },
        React.createElement(semantic_ui_react_1.Grid.Row, null,
            React.createElement(semantic_ui_react_1.Grid.Column, { width: 8 },
                React.createElement(semantic_ui_react_1.Header, { as: 'h1' }, "Professional"),
                React.createElement(semantic_ui_react_1.Header, { as: 'h3', style: {
                        fontSize: '2em', margin: '1em 0',
                        display: "inline",
                        whiteSpace: 'nowrap'
                    } },
                    React.createElement(TypistLoop_1["default"], { interval: 3000 }, ['Software Engineer', "Fullstack Developer", "Linux Developer", "Front-End Developer", "JavaScript Engineer",]
                        .map(function (text) { return React.createElement(Typist, { key: text, startDelay: 1000, avgTypingSpeed: 40 }, React.createElement(semantic_ui_react_1.Label, { size: "massive", color: "blue" }, text)); }))),
                React.createElement("br", null),
                React.createElement(semantic_ui_react_1.Segment, { vertical: true }, "Experienced Software Engineer with a demonstrated history of working in cutting edge full stack technologies."),
                React.createElement(semantic_ui_react_1.Segment, { vertical: true }, "Strong engineering professional with a Bachelor's degree focused in Computer Science from Brooklyn College."),
                React.createElement("h4", null, " Professional Development Experience in ..."),
                React.createElement(semantic_ui_react_1.Segment, { vertical: true },
                    React.createElement(semantic_ui_react_1.Label, { color: 'red', horizontal: true }, "Php"),
                    React.createElement(semantic_ui_react_1.Label, { color: 'green', horizontal: true }, "Java/Java EE"),
                    React.createElement(semantic_ui_react_1.Label, { color: 'blue', horizontal: true }, "Node"),
                    React.createElement(semantic_ui_react_1.Label, { color: 'purple', horizontal: true }, "React/Redux"),
                    React.createElement(semantic_ui_react_1.Label, { color: 'yellow', horizontal: true }, "Express"),
                    React.createElement(semantic_ui_react_1.Label, { color: 'violet', horizontal: true }, "VBA"),
                    React.createElement(semantic_ui_react_1.Label, { color: 'olive', horizontal: true }, "Python")),
                React.createElement("br", null),
                React.createElement("h4", null, " Personal Development Experience in ..."),
                React.createElement(semantic_ui_react_1.Segment, { vertical: true },
                    React.createElement(semantic_ui_react_1.Label, { color: 'teal', horizontal: true }, "Go"),
                    React.createElement(semantic_ui_react_1.Label, { color: 'orange', horizontal: true }, "ASP.NET"),
                    React.createElement(semantic_ui_react_1.Label, { color: 'pink', horizontal: true }, "Django"),
                    React.createElement(semantic_ui_react_1.Label, { color: 'purple', horizontal: true }, "Flask"),
                    React.createElement(semantic_ui_react_1.Label, { color: 'grey', horizontal: true }, "C / C++")),
                React.createElement("br", null)),
            React.createElement(semantic_ui_react_1.Grid.Column, { floated: 'right', width: 6 },
                React.createElement(semantic_ui_react_1.Header, { as: 'h3', style: { fontSize: '2em' } },
                    React.createElement(semantic_ui_react_1.Icon, { name: "chart line" }),
                    "Highly Motivated Self-Driven"),
                React.createElement("p", { style: { fontSize: '1.33em' } }, "Continually developing and perfecting runtimes and preformance stacks, from personal and professional projects to leetcode and hackerrank challenges."),
                React.createElement("p", { style: { fontSize: '1.33em' } }, "This website is a Typescript Server Side React/Redux Application. Inspect this website to view."),
                React.createElement("p", { style: { fontSize: '1.33em' } },
                    "Source code available",
                    React.createElement("a", { href: "https://github.com/SamuelWitke/typescript-ssr" }, " here")),
                React.createElement("a", { href: "https://www.linkedin.com/in/samuelwitke/" },
                    React.createElement(semantic_ui_react_1.Icon, { size: "huge", name: "linkedin square" })),
                React.createElement("a", { href: "https://github.com/SamuelWitke" },
                    React.createElement(semantic_ui_react_1.Icon, { size: "huge", name: "github" })),
                React.createElement("a", { href: "https://docs.google.com/document/d/1Q7Ed1mpcnPyNY3sZK6LZyoUrv-YRULx255IWvTHOHow/edit" },
                    React.createElement(semantic_ui_react_1.Icon, { size: "huge", name: "file text" }))))))); });
