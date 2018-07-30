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
var book_1 = require("../../actions/book");
//import './Home.css';
var book_2 = require("../../actions/book");
var react_redux_1 = require("react-redux");
var semantic_ui_react_2 = require("semantic-ui-react");
var semantic_ui_react_3 = require("semantic-ui-react");
var react_router_redux_1 = require("react-router-redux");
var Home = /** @class */ (function (_super) {
    __extends(Home, _super);
    function Home(props) {
        var _this = _super.call(this, props) || this;
        _this.onReset = function () {
            _this.setState({
                selectedId: null
            });
        };
        _this.onSelectedChange = function (value) {
            _this.setState({ selectedId: value }, function () { return _this.props.push("/book/" + _this.state.selectedId); });
        };
        _this.state = {
            selectedId: null,
            text: [{}]
        };
        _this.props.requestAllBooks();
        return _this;
    }
    Home.prototype.componentWillReceiveProps = function (nextProps) {
        if (nextProps.allBooks !== this.props.allBooks) {
            var allBooks = nextProps.allBooks;
            if (allBooks) {
                var text = allBooks.map(function (book) { return { text: book.title, value: book.id }; });
                this.setState({ text: text });
            }
        }
    };
    Home.prototype.render = function () {
        var _this = this;
        var text = this.state.text;
        var allBooks = this.props.allBooks;
        var COL1, COL2;
        if (allBooks) {
            COL1 = allBooks.slice(0, allBooks.length / 2);
            COL2 = allBooks.slice(allBooks.length / 2, allBooks.length);
        }
        return (React.createElement("div", null,
            React.createElement("div", null,
                React.createElement(semantic_ui_react_1.Segment, null,
                    React.createElement(semantic_ui_react_1.Dropdown, { placeholder: 'Select a Book', options: text, onChange: function (e, selected) { return _this.onSelectedChange(selected.value); }, fluid: true, search: true, selection: true })),
                React.createElement(semantic_ui_react_1.Segment, null,
                    React.createElement(semantic_ui_react_2.Grid, null,
                        React.createElement(semantic_ui_react_2.Grid.Row, { columns: 2 },
                            React.createElement(semantic_ui_react_2.Grid.Column, null, COL1 && COL1.map(function (book) { return (React.createElement(semantic_ui_react_3.Card, { key: book.id, onClick: function () { return _this.onSelectedChange(book.id); } },
                                React.createElement(semantic_ui_react_3.Image, { src: book.image }),
                                React.createElement(semantic_ui_react_3.Card.Content, null,
                                    React.createElement(semantic_ui_react_3.Card.Header, null, book.title),
                                    React.createElement(semantic_ui_react_3.Card.Meta, null,
                                        React.createElement("span", { className: 'date' }, book.author)),
                                    React.createElement(semantic_ui_react_3.Card.Description, null, book.series)))); })),
                            React.createElement(semantic_ui_react_2.Grid.Column, null, COL2 && COL2.map(function (book) { return (React.createElement(semantic_ui_react_3.Card, { key: book.id, onClick: function () { return _this.onSelectedChange(book.id); } },
                                React.createElement(semantic_ui_react_3.Image, { src: book.image }),
                                React.createElement(semantic_ui_react_3.Card.Content, null,
                                    React.createElement(semantic_ui_react_3.Card.Header, null, book.title),
                                    React.createElement(semantic_ui_react_3.Card.Meta, null,
                                        React.createElement("span", { className: 'date' }, book.author)),
                                    React.createElement(semantic_ui_react_3.Card.Description, null, book.series)))); }))))))));
    };
    return Home;
}(React.Component));
function mapStateToProps(_a) {
    var books = _a.books;
    var allBooks = books.allBooks, selectedBook = books.selectedBook, similar = books.similar;
    return {
        allBooks: allBooks,
        selectedBook: selectedBook,
        similar: similar
    };
}
exports.mapStateToProps = mapStateToProps;
function mapDispatchToProps(dispatch) {
    return {
        push: function (loc) { return dispatch(react_router_redux_1.push(loc)); },
        requestAllBooks: function () { return dispatch(book_2.requestAllBooks()); },
        requestBookAndSimilars: function (id) { return dispatch(book_1.requestBookAndSimilars(id)); }
    };
}
exports.mapDispatchToProps = mapDispatchToProps;
exports["default"] = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(Home);
