import { BOOK_REQUESTING, BOOK_SUCCESS, BOOK_FAILURE, } from '../constants/book';
import { SIMILAR_FAILURE, SIMILAR_SUCCESS, SIMILAR_REQUESTING, } from '../constants/request';
var entryLoading = function (id) { return ({ type: BOOK_REQUESTING, payload: id }); };
var entryLoaded = function (book) { return ({ type: BOOK_SUCCESS, payload: book }); };
var entryLoadError = function () { return ({ type: BOOK_FAILURE }); };
export var requestBook = function (id) { return (function (dispatch, getState, api) {
    dispatch(entryLoading(id));
    return api.fetchBook(id)
        .then(function (book) {
        dispatch(entryLoaded(book));
        return book;
    })
        .catch(function (err) {
        dispatch(entryLoadError());
    });
}); };
var similarEntriesLoading = function (tags) { return ({ type: SIMILAR_REQUESTING, payload: tags }); };
var similarEntriesLoaded = function (books) { return ({ type: SIMILAR_SUCCESS, payload: books }); };
var similarEntriesLoadError = function () { return ({ type: SIMILAR_FAILURE }); };
export var requestBooksByTags = function (id, tags) { return (function (dispatch, getState, api) {
    dispatch(similarEntriesLoading(tags));
    api.fetchBooksByTags(tags)
        .then(function (books) {
        dispatch(similarEntriesLoaded(books.filter(function (p) { return p.id !== id; })));
    })
        .catch(function (err) {
        dispatch(similarEntriesLoadError());
    });
}); };
export var requestBookAndSimilars = function (id) { return (function (dispatch, getState) {
    var bookPromise = dispatch(requestBook(id));
    bookPromise.then(function (book) { return dispatch(requestBooksByTags(id, book.tags)); });
}); };
//# sourceMappingURL=book.js.map