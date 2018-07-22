import { BOOK_SUCCESS } from '../constants/book';
import { SIMILAR_SUCCESS } from '../constants/request';
//import { StoreState } from '../types/'

export default (state: any = { selectedBook: {}, similar: [] }, action : any) : any=> {
	switch (action.type) {
		case BOOK_SUCCESS:
			return { selectedBook: action.payload, similar: [] };
		case SIMILAR_SUCCESS:
			return {...state, similar: action.payload };
		default:
			return state;
	}
}

