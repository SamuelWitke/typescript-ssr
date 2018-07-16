import { combineReducers } from "redux";
import isAuthenticated from "./authenticationReducer";
import pendingActions from "./pendingActionsReducer";
var rootReducer = combineReducers({
    isAuthenticated: isAuthenticated,
    pendingActions: pendingActions
});
export default rootReducer;
//# sourceMappingURL=rootReducer.js.map