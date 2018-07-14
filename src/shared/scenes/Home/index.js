"use strict";
exports.__esModule = true;
var Home_1 = require("./components/Home");
var actions = require("../../actions/example");
var react_redux_1 = require("react-redux");
function mapStateToProps(_a) {
    var enthusiasmLevel = _a.enthusiasmLevel, languageName = _a.languageName;
    return {
        enthusiasmLevel: enthusiasmLevel,
        name: languageName
    };
}
exports.mapStateToProps = mapStateToProps;
function mapDispatchToProps(dispatch) {
    return {
        onIncrement: function () { return dispatch(actions.incrementEnthusiasm()); },
        onDecrement: function () { return dispatch(actions.decrementEnthusiasm()); }
    };
}
exports.mapDispatchToProps = mapDispatchToProps;
exports["default"] = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(Home_1["default"]);
