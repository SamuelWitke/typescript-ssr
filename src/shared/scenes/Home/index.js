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
exports.__esModule = true;
var React = require("react");
var semantic_ui_react_1 = require("semantic-ui-react");
var Book_1 = require("./components/Book");
var Home = /** @class */ (function (_super) {
    __extends(Home, _super);
    function Home(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            selectedId: null
        };
        return _this;
    }
    Home.prototype.render = function () {
        var _this = this;
        console.log(this.state);
        return (React.createElement("div", null, this.state.selectedId !== null ?
            React.createElement(Book_1["default"], { id: this.state.selectedId })
            :
                React.createElement(semantic_ui_react_1.Segment, null,
                    React.createElement(semantic_ui_react_1.Dropdown, { placeholder: 'Select a Book', options: [
                            { text: 'Harry Potter', value: 1 },
                            { text: 'Lord of the Rings', value: 2 },
                            { text: 'Game of Thrones', value: 3 },
                            { text: 'Sherlock Holmes', value: 4 },
                            { text: 'Murder in the Orient Express', value: 5 },
                            { text: 'Neuromancer', value: 6 },
                            { text: 'Ready Player One', value: 7 },
                        ], onChange: function (e, selected) { return _this.setState({ selectedId: selected.value }); }, fluid: true, search: true, selection: true }))));
    };
    return Home;
}(React.Component));
exports["default"] = Home;
