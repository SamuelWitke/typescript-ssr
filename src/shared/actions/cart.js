"use strict";
exports.__esModule = true;
var cart_1 = require("../constants/cart");
var added = function (cart) { return ({ type: cart_1.ADDED_TO_CART, payload: cart }); };
exports.addToCart = function (bookId) { return (function (dispatch, getState, api) {
    var state = getState();
    var user = state.user;
    if (user) {
        api.addToCart()
            .then(dispatch(added(bookId)));
    }
}); };
