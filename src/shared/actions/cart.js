"use strict";
exports.__esModule = true;
var cart_1 = require("../constants/cart");
var added = function (id) { return ({ type: cart_1.ADDED_TO_CART, payload: id }); };
exports.addToCart = function (bookId) { return (function (dispatch, getState, api) {
    var user = getState().user;
    if (user) {
        api.addToCart(bookId)
            .then(dispatch(added(bookId)));
    }
}); };
