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
exports.__esModule = true;
var book_1 = require("../../../actions/book");
var cart_1 = require("../../../actions/cart");
var React = require("react");
var semantic_ui_react_1 = require("semantic-ui-react");
//import { StoreState } from '../../types/';
var react_redux_1 = require("react-redux");
var BookDetails = /** @class */ (function (_super) {
    __extends(BookDetails, _super);
    function BookDetails(props) {
        var _this = _super.call(this, props) || this;
        _this.handleAddToCart = function () {
            _this.props.addToCart(_this.props.id);
        };
        return _this;
    }
    BookDetails.prototype.componentDidMount = function () {
        this.props.requestBookAndSimilars(this.props.id);
    };
    BookDetails.prototype.render = function () {
        var _a = this.props, id = _a.id, series = _a.series, title = _a.title, author = _a.author, image = _a.image, tags = _a.tags, similarBooks = _a.similarBooks;
        return (React.createElement(semantic_ui_react_1.Segment.Group, null,
            React.createElement(semantic_ui_react_1.Segment, { size: 'big' }, series),
            React.createElement(semantic_ui_react_1.Segment, null,
                React.createElement("img", { src: image, alt: name, className: 'cover' }),
                React.createElement("h1", null,
                    "ID: ",
                    id,
                    " - ",
                    title),
                React.createElement("h2", null,
                    "By ",
                    author),
                tags && tags.map(function (tag) { return React.createElement(semantic_ui_react_1.Label, { key: tag, color: 'yellow' }, tag); }),
                React.createElement(semantic_ui_react_1.Button, { content: 'Buy', icon: 'shop', onClick: this.handleAddToCart }),
                React.createElement("div", { className: 'similar' },
                    React.createElement("h3", null, "You might also like:"),
                    similarBooks && similarBooks.map(function (similar) { return (React.createElement("div", { key: similar.id },
                        similar.author,
                        similar.title,
                        React.createElement("ul", null, similar.tags.map(function (tag, id) { return (React.createElement("li", { key: id },
                            " ",
                            tag,
                            " ")); })))); })))));
    };
    return BookDetails;
}(React.Component));
function mapStateToProps(_a) {
    var books = _a.books;
    var selectedBook = books.selectedBook, similar = books.similar;
    return __assign({}, selectedBook, { series: selectedBook.series || selectedBook.title, similarBooks: similar });
}
exports.mapStateToProps = mapStateToProps;
function mapDispatchToProps(dispatch) {
    return {
        requestBookAndSimilars: function (id) { return dispatch(book_1.requestBookAndSimilars(id)); },
        addToCart: function (id) { return dispatch(cart_1.addToCart(id)); }
    };
}
exports.mapDispatchToProps = mapDispatchToProps;
exports["default"] = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(BookDetails);
