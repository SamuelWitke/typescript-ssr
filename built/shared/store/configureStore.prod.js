import { applyMiddleware, createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import rootReducer from "../reducers/rootReducer";
export default function configureStore() {
    return createStore(rootReducer, applyMiddleware(thunkMiddleware));
}
//# sourceMappingURL=configureStore.prod.js.map