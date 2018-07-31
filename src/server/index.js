"use strict";
exports.__esModule = true;
var express = require("express");
var server_1 = require("react-dom/server");
//import { StaticRouter, } from "react-router-dom"
var html_1 = require("./html");
var react_redux_1 = require("react-redux");
var React = require("react");
var configureStore_1 = require("../shared/configureStore");
var path = require("path");
var App_1 = require("../shared/App");
var react_router_dom_1 = require("react-router-dom");
var app = express();
var PORT = Number(process.env.PORT) || 8000;
app.use(express.static(path.join(__dirname + '../../../public/'))); //serves the index.html
app.get("**", function (req, res) {
    var context = {};
    var store = configureStore_1.configureStore();
    var initialData = store.getState();
    var bundlePath = path.join(__dirname + '../../build/bundle.js');
    var body = server_1.renderToString(React.createElement(react_redux_1.Provider, { store: store },
        React.createElement(react_router_dom_1.StaticRouter, { location: req.url, context: context },
            React.createElement(App_1["default"], null))));
    res.send(html_1["default"]({
        body: body,
        initialData: initialData,
        bundlePath: bundlePath
    }));
    //res.sendFile(path.join(__dirname + '../../../public/index.html'));
});
app.listen(PORT, function () {
    console.log("Listening at http://localhost:" + PORT + "/");
});
