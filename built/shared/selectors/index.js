import { createSelector } from "reselect";
// Derived data selectors = using reselect
var pendingActionsSelector = function (state) { return state.pendingActions; };
export var isBusy = createSelector([pendingActionsSelector], function (pendingActions) { return pendingActions > 0; });
//# sourceMappingURL=index.js.map