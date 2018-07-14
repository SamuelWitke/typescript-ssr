import * as express from 'express';
import * as React from 'react';
import { renderToString } from 'react-dom/server';
import App from '../shared/App';
import html from './html';
var app = express();
var PORT = 8000;
app.get("**", function (req, res) {
    var body = renderToString(React.createElement(App));
    res.send(html({
        body: body
    }));
});
app.listen(PORT, function () {
    console.log("Listening at http://localhost:" + PORT + "/");
});
//# sourceMappingURL=index.js.map