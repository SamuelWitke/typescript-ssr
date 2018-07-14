"use strict";
exports.__esModule = true;
var express = require("express");
var React = require("react");
var server_1 = require("react-dom/server");
var App_1 = require("../shared/App");
var html_1 = require("./html");
var app = express();
var PORT = 8000;
app.get("**", function (req, res) {
    var body = server_1.renderToString(React.createElement(App_1["default"]));
    res.send(html_1["default"]({
        body: body
    }));
});
app.listen(PORT, function () {
    console.log("Listening at http://localhost:" + PORT + "/");
});
