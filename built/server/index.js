import * as express from 'express';
import { renderToString } from 'react-dom/server';
import App from '../shared/App';
import html from './html';
import { Provider } from "react-redux";
import * as React from "react";
import configureStore from "../shared/configureStore";
import * as path from 'path';
var app = express();
var PORT = 8000;
app.use(express.static(path.join(__dirname + '/../../build/'))); //serves the index.html
app.get("**", function (req, res) {
    var store = configureStore();
    var initialData = store.getState();
    var body = renderToString(React.createElement(Provider, { store: store },
        React.createElement(App, null)));
    res.send(html({
        body: body,
        initialData: initialData
    }));
});
app.listen(PORT, function () {
    console.log("Listening at http://localhost:" + PORT + "/");
});
//# sourceMappingURL=index.js.map