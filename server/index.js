"use strict";
exports.__esModule = true;
var express = require("express");
var React = require("react");
var server_1 = require("react-dom/server");
var App_1 = require("../src/App");
var html_1 = require("./html");
var app = express();
var PORT = parseFloat(process.env.PORT) || 3000;
app.use(express.static("build"));
app.get("**", function (req, res) {
    var body = server_1.renderToString(React.createElement(App_1.App));
    res.send(html_1["default"]({
        body: body
    }));
});
app.listen(PORT, function () {
    console.log("Listening at http://localhost:" + PORT + "/");
});
