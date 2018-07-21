import { combineReducers } from 'redux';
import books from './book';
//import user from './user';
//import cart from './cart';
import example from './example';

const rootReducer = combineReducers({
	books,
	example
});

export default rootReducer;
