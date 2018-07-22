import {  BOOK_REQUESTING, BOOK_SUCCESS, BOOK_FAILURE,  } from '../constants/book';

import {
	SIMILAR_FAILURE,
	SIMILAR_SUCCESS,
	SIMILAR_REQUESTING,
} from '../constants/request';

import { Dispatch } from "redux";
import BOOK from '../types/book'


const entryLoading = (id :number) => ({ type: BOOK_REQUESTING, payload: id });
const entryLoaded = (book : BOOK) => ({ type: BOOK_SUCCESS, payload: book });
const entryLoadError = () => ({ type: BOOK_FAILURE });

export const requestBook = (id : number) => (
	(dispatch: Dispatch<any>, getState: any, api : any) : any => {
		dispatch(entryLoading(id));
		return api.fetchBook(id)
			.then(( book : BOOK) => {
				dispatch( entryLoaded(book) );
				return book;
			})
			.catch( (err : Error) => {
				dispatch( entryLoadError() );
			});
	}
);

const similarEntriesLoading = (tags :Array<string>) => ({ type: SIMILAR_REQUESTING, payload: tags });
const similarEntriesLoaded = (books : BOOK) => ({ type: SIMILAR_SUCCESS, payload: books });
const similarEntriesLoadError = () => ({ type: SIMILAR_FAILURE });

export const requestBooksByTags = (id : number, tags : Array<string>) => (
	(dispatch : Dispatch<any>, getState: any, api : any) => {
		dispatch(similarEntriesLoading(tags));
		api.fetchBooksByTags(tags)
			.then( (books : any ) => {
				dispatch( similarEntriesLoaded(books.filter( (p : BOOK) => p.id !== id)) );
			})
			.catch( (err : Error) => {
				dispatch( similarEntriesLoadError() );
			});
	}
);


export const requestBookAndSimilars = (id : number) => (
	(dispatch : Dispatch<any>,getState : any) => {
		dispatch(requestBook(id))
		const {books} = getState(); 
		dispatch(requestBooksByTags(id, books.selectedBook.tags));
	}
)
