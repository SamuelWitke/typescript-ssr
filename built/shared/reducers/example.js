var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
import { INCREMENT_ENTHUSIASM, DECREMENT_ENTHUSIASM } from '../constants/example';
export function enthusiasm(state, action) {
    switch (action.type) {
        case INCREMENT_ENTHUSIASM:
            return __assign({}, state, { enthusiasmLevel: state.enthusiasmLevel + 1 });
        case DECREMENT_ENTHUSIASM:
            return __assign({}, state, { enthusiasmLevel: Math.max(1, state.enthusiasmLevel - 1) });
        default:
            return state;
    }
}
//# sourceMappingURL=example.js.map