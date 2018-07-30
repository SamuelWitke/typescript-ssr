"use strict";
exports.__esModule = true;
var serialize = require("serialize-javascript");
var html = function (_a) {
    var body = _a.body, initialData = _a.initialData, bundlePath = _a.bundlePath;
    return "\n\t\t<html>\n\t\t<head>\n\t\t<link rel=\"stylesheet\" href=\"//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.6/semantic.min.css\">\n\t\t</head>\n\t\t<body style=\"margin:0\">\n\t\t<div id=\"root\">" + body + "</div>\n\t\t<script src=" + bundlePath + " defer></script>\n\t\t <script>window.__initialData__ = " + serialize(initialData) + "</script>\n\t\t</body>\n\t\t</html>\n";
};
exports["default"] = html;
