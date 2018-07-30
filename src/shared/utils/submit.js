"use strict";
exports.__esModule = true;
var es6_promise_1 = require("es6-promise");
//const userNameAPI = (ms: number) => new Promise(resolve => setTimeout(resolve(['john', 'paul', 'george', 'ringo']), ms))
function signUpValidateAync(values) {
    return new es6_promise_1.Promise(function (resolve, reject) {
        setTimeout(function () {
            var errors = {
                _error: "Login Failed"
            };
            if (['john', 'paul', 'george', 'ringo'].includes(values.username)) {
                errors.username = 'User Name Taken';
            }
            if (errors.username) {
                reject(errors);
            }
            else {
                resolve();
            }
        }, Math.random() * 1000);
    });
}
exports.signUpValidateAync = signUpValidateAync;
function sigunUpValidate(values) {
    var errors = {};
    if (!values.firstName) {
        errors.firstName = "Required";
    }
    if (!values.lastName) {
        errors.lastName = "Required";
    }
    if (!values.username) {
        errors.username = 'Required';
    }
    else if (values.username.length > 15) {
        errors.username = 'Must be 15 characters or less';
    }
    if (!values.email) {
        errors.email = 'Required';
    }
    else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
    }
    return errors;
}
exports.sigunUpValidate = sigunUpValidate;
