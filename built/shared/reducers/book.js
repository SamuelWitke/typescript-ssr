var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
import { BOOK_SUCCESS } from '../constants/book';
import { SIMILAR_SUCCESS } from '../constants/request';
//import { StoreState } from '../types/'
export default (function (state, action) {
    if (state === void 0) { state = { selectedBook: {}, similar: [] }; }
    switch (action.type) {
        case BOOK_SUCCESS:
            return { selectedBook: action.payload, similar: [] };
        case SIMILAR_SUCCESS:
            return __assign({}, state, { similar: action.payload });
        default:
            return state;
    }
});
//# sourceMappingURL=book.js.map