import { ADDED_TO_CART } from '../constants/cart';
var added = function (id) { return ({ type: ADDED_TO_CART, payload: id }); };
export var addToCart = function (bookId) { return (function (dispatch, getState, api) {
    var user = getState().user;
    if (user) {
        api.addToCart(bookId)
            .then(dispatch(added(bookId)));
    }
}); };
//# sourceMappingURL=cart.js.map