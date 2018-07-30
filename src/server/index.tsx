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
const PORT: number = 8000;

app.use(express.static(path.join(__dirname + '/build/')))//serves the index.html
app.get("**", (req: Request, res: Response): void => {
  const context = {};
  const store = configureStore();
  const initialData = store.getState();
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
      initialData
    })
  );
});

app.listen(PORT, () => {
  console.log(`Listening at http://localhost:${PORT}/`);
});
