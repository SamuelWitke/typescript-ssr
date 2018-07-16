import { ActionTypeStates } from "../actions/ActionTypeKeys";
import initialState from "./initialState";
export default function pendingActionsReducer(state, action) {
    if (state === void 0) { state = initialState.pendingActions; }
    if (actionTypeEndsInInProgress(action.type)) {
        return onInProgressAction(state);
    }
    else if (actionTypeEndsInSuccess(action.type) ||
        actionTypeEndsInFail(action.type)) {
        return onSuccessOrFailAction(state);
    }
    else {
        return state;
    }
}
function actionTypeEndsInInProgress(type) {
    var inProgress = ActionTypeStates.INPROGRESS;
    return type.substring(type.length - inProgress.length) === inProgress;
}
function actionTypeEndsInSuccess(type) {
    var success = ActionTypeStates.SUCCESS;
    return type.substring(type.length - success.length) === success;
}
function actionTypeEndsInFail(type) {
    var fail = ActionTypeStates.FAIL;
    return type.substring(type.length - fail.length) === fail;
}
function onInProgressAction(state) {
    return state + 1;
}
function onSuccessOrFailAction(state) {
    return state - 1;
}
//# sourceMappingURL=pendingActionsReducer.js.map