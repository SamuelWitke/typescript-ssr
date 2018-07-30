import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "../shared/App";
import { configureStore, history } from "../shared/configureStore";

import {
  ConnectedRouter,
} from "react-router-redux";

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>
  ,
  document.getElementById("root")
);
