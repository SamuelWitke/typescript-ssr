import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import  App  from "../shared/App";
import store from "../shared/configureStore";


ReactDOM.render(
	<Provider store={store}>
	<App/>
	</Provider>
		,
    document.getElementById("root")
);
