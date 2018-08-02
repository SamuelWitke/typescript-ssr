import { BOOK_REQUESTING, BOOK_SUCCESS, BOOK_REMOVE, BOOK_FAILURE, BOOKS_SUCCESS } from '../constants/book';

import {
	SIMILAR_FAILURE,
	SIMILAR_SUCCESS,
	SIMILAR_REQUESTING,
} from '../constants/request';

import { Dispatch } from "redux";
import BOOK from '../types/book'


export const removeBook = ({ type: BOOK_REMOVE, payload: null });
const entryLoading = (key: number) => ({ type: BOOK_REQUESTING, payload: key });
const entryLoaded = (book: BOOK) => ({ type: BOOK_SUCCESS, payload: book });
const entryiesLoaded = (books: Array<BOOK>) => ({ type: BOOKS_SUCCESS, payload: books });
const entryLoadError = () => ({ type: BOOK_FAILURE });


export const requestBook = (key: number) => (
	(dispatch: Dispatch<any>, getState: any, api: any): any => {
		if (key == null) throw Error('key undefined');
		dispatch(entryLoading(key));
		return api.fetchBook(key)
			.then((book: BOOK) => {
				if (book == null) throw Error('Book undefined');
				dispatch(entryLoaded(book));
				return book;
			})
			.catch((err: Error) => {
				dispatch(entryLoadError());
			});
	}
);

export const requestAllBooks = () => (
	(dispatch: Dispatch<any>, getState: any, api: any): any => {
		return api.fetchBooks()
			.then((books: Array<BOOK>) => {
				dispatch(entryiesLoaded(books));
			})
			.catch((err: Error) => {
				dispatch(entryLoadError());
			});
	}
)

const similarEntriesLoading = (tags: Array<string>) => ({ type: SIMILAR_REQUESTING, payload: tags });
const similarEntriesLoaded = (books: BOOK) => ({ type: SIMILAR_SUCCESS, payload: books });
const similarEntriesLoadError = () => ({ type: SIMILAR_FAILURE });

export const requestBooksByTags = (key: number, tags: Array<string>) => (
	(dispatch: Dispatch<any>, getState: any, api: any) => {
		dispatch(similarEntriesLoading(tags));
		api.fetchBooksByTags(tags)
			.then((books: any) => {
				dispatch(similarEntriesLoaded(books.filter((p: BOOK) => p.key !== key)));
			})
			.catch((err: Error) => {
				dispatch(similarEntriesLoadError());
			});
	}
);


export const requestBookAndSimilars = (key: number) => (
	(dispatch: Dispatch<any>, ) => {
		const bookPromise: any = dispatch(requestBook(key));
		bookPromise.then((book: BOOK) => dispatch(requestBooksByTags(key, book.tags)));
	}
)
