import { applyMiddleware, createStore, Store} from 'redux';
import { EnthusiasmAction } from './actions/example';
//import { StoreState } from './types/';
import logger from 'redux-logger/'
import api from './api';
import thunk, { ThunkMiddleware } from 'redux-thunk';
import books from './reducers/book';
import user from './reducers/user';
import cart from './reducers/cart';
import example from './reducers/example';
import { combineReducers } from 'redux';



function configureStore(){
	const store: Store<any,EnthusiasmAction> = 
	applyMiddleware(thunk.withExtraArgument(api) as ThunkMiddleware<any, EnthusiasmAction, string> , logger)(createStore)
	(combineReducers({
	books,
	user,
	cart,
	example})
	, <any> {
		example : {
			enthusiasmLevel: 1,
			languageName: 'TypeScript',
		},
		books: <any>{
			selectedBook : <any>{},
			similar : <any>[],
		},		
	} ,
	);
	return store;
}

export default configureStore;
