"use strict";
exports.__esModule = true;
var serialize = require("serialize-javascript");
var html = function (_a) {
    var body = _a.body, initialData = _a.initialData;
    return "\n\t<!DOCTYPE html>\n\t\t<html>\n\t\t<head>\n\t\t</head>\n\t\t<body style=\"margin:0\">\n\t\t<script src=\"./bundle.js\" defer></script>\n\t\t <script>window.__initialData__ = " + serialize(initialData) + "</script>\n\t\t</body>\n\t\t</html>\n";
};
exports["default"] = html;
