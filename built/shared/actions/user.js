import { LOG_USER, LOGGED_USER, USER_FAILURE } from '../constants/user';
var userLoading = function (id) { return ({ type: LOG_USER, payload: id }); };
var userLoaded = function (user) { return ({ type: LOGGED_USER, payload: user }); };
var userLoadError = function () { return ({ type: USER_FAILURE }); };
export var getUser = function () { return (function (dispatch, getState, api) {
    dispatch(userLoading(1));
    return api.getUser()
        .then(function (user) {
        dispatch(userLoaded(user));
        return user;
    })
        .catch(function (err) {
        dispatch(userLoadError());
    });
}); };
//# sourceMappingURL=user.js.map