import * as express from 'express';
import { Request, Response, } from 'express'
import { renderToString } from 'react-dom/server';
//import { StaticRouter, } from "react-router-dom"
import html from './html';
import { Provider } from "react-redux";
import * as React from "react";
import { configureStore } from "../shared/configureStore";
import * as path from 'path';
import App from '../shared/App';
import { StaticRouter } from "react-router-dom"

const app: express.Application = express();
const PORT: number = Number() || 8000;

//app.use(express.static(path.join(__dirname + './)))//serves the index.html
app.use(express.static(path.join(__dirname, './assets/')));

app.get("**", (req: Request, res: Response): void => {
  console.log(req.url);
  const context = {};
  const store = configureStore();
  const initialData = store.getState();
  const bundlePath = path.join('./bundle.js');
  console.log(bundlePath)
  const body = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.url} context={context}>
        <App />
      </StaticRouter>
    </Provider>
  );
  res.send(
    html({
      body,
      initialData,
      bundlePath
    })
  );
  //res.sendFile(path.join(__dirname + '../../../public/index.html'));
});

app.listen(PORT, () => {
  console.log(`Listening at http://localhost:${PORT}/`);
});
