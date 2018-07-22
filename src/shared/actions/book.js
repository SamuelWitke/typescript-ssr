"use strict";
exports.__esModule = true;
var book_1 = require("../constants/book");
var request_1 = require("../constants/request");
var entryLoading = function (id) { return ({ type: book_1.BOOK_REQUESTING, payload: id }); };
var entryLoaded = function (book) { return ({ type: book_1.BOOK_SUCCESS, payload: book }); };
var entryLoadError = function () { return ({ type: book_1.BOOK_FAILURE }); };
exports.requestBook = function (id) { return (function (dispatch, getState, api) {
    dispatch(entryLoading(id));
    return api.fetchBook(id)
        .then(function (book) {
        dispatch(entryLoaded(book));
        return book;
    })["catch"](function (err) {
        dispatch(entryLoadError());
    });
}); };
var similarEntriesLoading = function (tags) { return ({ type: request_1.SIMILAR_REQUESTING, payload: tags }); };
var similarEntriesLoaded = function (books) { return ({ type: request_1.SIMILAR_SUCCESS, payload: books }); };
var similarEntriesLoadError = function () { return ({ type: request_1.SIMILAR_FAILURE }); };
exports.requestBooksByTags = function (id, tags) { return (function (dispatch, getState, api) {
    dispatch(similarEntriesLoading(tags));
    api.fetchBooksByTags(tags)
        .then(function (books) {
        dispatch(similarEntriesLoaded(books.filter(function (p) { return p.id !== id; })));
    })["catch"](function (err) {
        dispatch(similarEntriesLoadError());
    });
}); };
exports.requestBookAndSimilars = function (id) { return (function (dispatch, getState) {
    var bookPromise = dispatch(exports.requestBook(id));
    bookPromise.then(function (book) { return dispatch(exports.requestBooksByTags(id, book.tags)); });
}); };
