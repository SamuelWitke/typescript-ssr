"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
exports.__esModule = true;
var React = require("react");
var react_redux_1 = require("react-redux");
var user_1 = require("../../actions/user");
var redux_form_1 = require("redux-form");
//import { WrappedFieldProps} from 'redux-form';
var react_router_redux_1 = require("react-router-redux");
var semantic_ui_react_1 = require("semantic-ui-react");
var submit_1 = require("../../utils/submit");
/*
type InputProps = {
  checked?: boolean,
  name: string,
  onBlur: { (eventOrValue: Event | any): void },
  onChange: { (eventOrValue: Event | any): void },
  onDrop: { (event: Event): void },
  onDragStart: { (event: Event): void },
  onFocus: { (event: Event): void },
  value: any
};
type FieldProps = {
  input: InputProps,
  meta: {
    error?: any,
    touched: boolean
  },
  required?: boolean,
  width?: string,
  label?: string,
  inline?: boolean,
  defaultChecked?: boolean
};
*/
var renderInput = function (_a) {
    var input = _a.input, label = _a.label, required = _a.required, width = _a.width, inline = _a.inline, _b = _a.meta, touched = _b.touched, error = _b.error, rest = __rest(_a, ["input", "label", "required", "width", "inline", "meta"]);
    return (React.createElement(semantic_ui_react_1.Form.Field, { error: !!(touched && error), required: required, inline: inline },
        label && React.createElement("label", null, label),
        React.createElement(semantic_ui_react_1.Input, __assign({ required: required }, input, rest)),
        touched && error ? (React.createElement(semantic_ui_react_1.Label, { basic: true, color: "red", pointing: true }, error)) : null));
};
var ContactForm = /** @class */ (function (_super) {
    __extends(ContactForm, _super);
    function ContactForm() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.handleSubmit = function () {
            setTimeout(function () {
                console.log(_this.props);
                var _a = _this.props, username = _a.username, lastName = _a.lastName, firstName = _a.firstName, email = _a.email;
                var user = {
                    lastName: lastName,
                    firstName: firstName,
                    username: username,
                    email: email
                };
                _this.props.loadUser(user);
                _this.props.push('/');
            }, Math.random() * 1000);
        };
        return _this;
    }
    ContactForm.prototype.render = function () {
        var _a = this.props, error = _a.error, submitSucceeded = _a.submitSucceeded, handleSubmit = _a.handleSubmit, pristine = _a.pristine, reset = _a.reset, submitting = _a.submitting;
        return (React.createElement(semantic_ui_react_1.Form, { error: error != null, success: submitSucceeded, loading: submitting, className: "form-horizontal", onSubmit: handleSubmit(this.handleSubmit) },
            error &&
                React.createElement(semantic_ui_react_1.Message, { error: true, header: 'Error', content: error }),
            submitSucceeded &&
                React.createElement(semantic_ui_react_1.Message, { success: true, header: 'Form Completed', content: "You're all signed up" }),
            React.createElement(redux_form_1.Field, { name: "username", component: renderInput, placeholder: "User Name", type: "text" }),
            React.createElement(semantic_ui_react_1.Form.Group, { widths: 'equal' },
                React.createElement(redux_form_1.Field, { name: "firstName", component: renderInput, placeholder: "First Name", type: "text" }),
                React.createElement(redux_form_1.Field, { name: "lastName", component: renderInput, placeholder: "Last Name", type: "text" })),
            React.createElement(redux_form_1.Field, { name: "email", component: renderInput, placeholder: "Email", type: "email" }),
            React.createElement(semantic_ui_react_1.Button, { type: "submit", disabled: submitting }, "Submit"),
            React.createElement(semantic_ui_react_1.Button, { type: "button", disabled: pristine || submitting, onClick: reset }, "Clear Values")));
    };
    return ContactForm;
}(React.Component));
var selector = redux_form_1.formValueSelector('signup');
function mapStateToProps(state) {
    var _a = selector(state, 'firstName', 'lastName', 'email', "username"), firstName = _a.firstName, lastName = _a.lastName, username = _a.username, email = _a.email;
    return {
        email: email,
        firstName: firstName,
        lastName: lastName,
        username: username
    };
}
function mapDispatchToProps(dispatch) {
    return {
        push: function (loc) { return dispatch(react_router_redux_1.push(loc)); },
        loadUser: function (user) { return dispatch(user_1.loadUser(user)); }
    };
}
var FormRedux = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(ContactForm);
exports["default"] = redux_form_1.reduxForm({
    form: 'signup',
    validate: submit_1.sigunUpValidate,
    asyncValidate: submit_1.signUpValidateAync
})(FormRedux);
