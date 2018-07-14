import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import  App  from "../shared/App";
import configureStore from "../shared/configureStore";

const store = configureStore();



ReactDOM.render(
	<Provider store={store}>
		<App/>
	</Provider>
	,
	document.getElementById("root")
);
