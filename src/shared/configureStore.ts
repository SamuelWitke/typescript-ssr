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
import createHistory from "history/createBrowserHistory";
import {
	routerReducer,
	routerMiddleware,
} from "react-router-redux";

export const history = createHistory();


export function configureStore(){
	const store: Store<any,EnthusiasmAction> = 
		applyMiddleware(
			thunk.withExtraArgument(api) as ThunkMiddleware<any, EnthusiasmAction, string> , 
			logger, 
			routerMiddleware(history))(createStore)
	(combineReducers({
		router: routerReducer,
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

