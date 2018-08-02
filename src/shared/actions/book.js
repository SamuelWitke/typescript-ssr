"use strict";
exports.__esModule = true;
var book_1 = require("../constants/book");
var request_1 = require("../constants/request");
exports.removeBook = ({ type: book_1.BOOK_REMOVE, payload: null });
var entryLoading = function (key) { return ({ type: book_1.BOOK_REQUESTING, payload: key }); };
var entryLoaded = function (book) { return ({ type: book_1.BOOK_SUCCESS, payload: book }); };
var entryiesLoaded = function (books) { return ({ type: book_1.BOOKS_SUCCESS, payload: books }); };
var entryLoadError = function () { return ({ type: book_1.BOOK_FAILURE }); };
exports.requestBook = function (key) { return (function (dispatch, getState, api) {
    if (key == null)
        throw Error('key undefined');
    dispatch(entryLoading(key));
    return api.fetchBook(key)
        .then(function (book) {
        if (book == null)
            throw Error('Book undefined');
        dispatch(entryLoaded(book));
        return book;
    })["catch"](function (err) {
        dispatch(entryLoadError());
    });
}); };
exports.requestAllBooks = function () { return (function (dispatch, getState, api) {
    return api.fetchBooks()
        .then(function (books) {
        dispatch(entryiesLoaded(books));
    })["catch"](function (err) {
        dispatch(entryLoadError());
    });
}); };
var similarEntriesLoading = function (tags) { return ({ type: request_1.SIMILAR_REQUESTING, payload: tags }); };
var similarEntriesLoaded = function (books) { return ({ type: request_1.SIMILAR_SUCCESS, payload: books }); };
var similarEntriesLoadError = function () { return ({ type: request_1.SIMILAR_FAILURE }); };
exports.requestBooksByTags = function (key, tags) { return (function (dispatch, getState, api) {
    dispatch(similarEntriesLoading(tags));
    api.fetchBooksByTags(tags)
        .then(function (books) {
        dispatch(similarEntriesLoaded(books.filter(function (p) { return p.key !== key; })));
    })["catch"](function (err) {
        dispatch(similarEntriesLoadError());
    });
}); };
exports.requestBookAndSimilars = function (key) { return (function (dispatch, getState) {
    var bookPromise = dispatch(exports.requestBook(key));
    bookPromise.then(function (book) { return dispatch(exports.requestBooksByTags(key, book.tags)); });
}); };
