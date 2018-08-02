"use strict";
exports.__esModule = true;
var user_1 = require("../constants/user");
//const userLoading = (key : number) => ({ type: LOG_USER, payload: key });
var userLoaded = function (user) { return ({ type: user_1.LOGGED_USER, payload: user }); };
var userLoadError = function () { return ({ type: user_1.USER_FAILURE }); };
exports.loadUser = function (user) { return (function (dispatch) {
    if (user == null)
        dispatch(userLoadError());
    dispatch(userLoaded(user));
}); };
