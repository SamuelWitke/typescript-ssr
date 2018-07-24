import { BOOK_SUCCESS, BOOKS_SUCCESS, BOOK_REMOVE} from '../constants/book';
import { SIMILAR_SUCCESS } from '../constants/request';
//import { StoreState } from '../types/'

export default (state: any = { allBook: [], selectedBook: {}, similar: [] }, action : any) : any=> {
	switch (action.type) {
		case BOOK_REMOVE:
			return { ...state, selectedBook: null, similar: [] };
		case BOOKS_SUCCESS:
			return { allBooks: action.payload, similar: [] };
		case BOOK_SUCCESS:
			return { ...state, selectedBook: action.payload, similar: [] };
		case SIMILAR_SUCCESS:
			return {...state, similar: action.payload };
		default:
			return state;
	}
}

