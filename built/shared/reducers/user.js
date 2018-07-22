import { LOGGED_USER } from '../constants/user';
//import { StoreState } from '../types/'
export default (function (state, action) {
    if (state === void 0) { state = null; }
    switch (action.type) {
        case LOGGED_USER:
            return action.payload;
        default:
            return state;
    }
});
//# sourceMappingURL=user.js.map