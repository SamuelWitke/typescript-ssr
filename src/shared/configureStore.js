"use strict";
exports.__esModule = true;
var redux_1 = require("redux");
var example_1 = require("./reducers/example");
function configureStore() {
    return redux_1.createStore(example_1.enthusiasm, {
        enthusiasmLevel: 1,
        languageName: 'TypeScript'
    });
}
exports["default"] = configureStore;
