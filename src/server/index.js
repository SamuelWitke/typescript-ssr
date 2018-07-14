"use strict";
exports.__esModule = true;
var express = require("express");
var server_1 = require("react-dom/server");
var App_1 = require("../shared/App");
var html_1 = require("./html");
var react_redux_1 = require("react-redux");
var React = require("react");
var configureStore_1 = require("../shared/configureStore");
var path = require("path");
var app = express();
var PORT = 8000;
app.use(express.static(path.join(__dirname + '/../../build/'))); //serves the index.html
app.get("**", function (req, res) {
    var store = configureStore_1["default"]();
    var initialData = store.getState();
    var body = server_1.renderToString(React.createElement(react_redux_1.Provider, { store: store },
        React.createElement(App_1["default"], null)));
    res.send(html_1["default"]({
        body: body,
        initialData: initialData
    }));
});
app.listen(PORT, function () {
    console.log("Listening at http://localhost:" + PORT + "/");
});
