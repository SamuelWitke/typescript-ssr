import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "../shared/App";
import store from "../shared/configureStore";
ReactDOM.render(React.createElement(Provider, { store: store },
    React.createElement(App, null)), document.getElementById("root"));
//# sourceMappingURL=index.js.map