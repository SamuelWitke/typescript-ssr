import ActionTypeKeys from "../actions/ActionTypeKeys";
import initialState from "./initialState";
export default function authenticationReducer(state, action) {
    if (state === void 0) { state = initialState.isAuthenticated; }
    switch (action.type) {
        case ActionTypeKeys.SIGNIN_SUCCESS:
            return onSignIn();
        case ActionTypeKeys.SIGNOUT_SUCCESS:
            return onSignOut();
        default:
            return state;
    }
}
function onSignIn() {
    return true;
}
function onSignOut() {
    return false;
}
//# sourceMappingURL=authenticationReducer.js.map