import { applyMiddleware, createStore, Store } from 'redux';
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
import createBrowserHistory from 'history/createBrowserHistory';
import createMemoryHistory from 'history/createMemoryHistory';

import { reducer as formReducer } from 'redux-form'
import {
	routerReducer,
	routerMiddleware,
} from "react-router-redux";

export let history: any;
if (typeof window === 'undefined') {
	// since the server has no HTML5 push states,
	// history must be temporarily created in memory
	history = createMemoryHistory();
}
else {
	// on the client, we can go ahead and make a standard
	// `history` state
	history = createBrowserHistory();
}

export function configureStore() {


	const store: Store<any, EnthusiasmAction> =
		applyMiddleware(
			thunk.withExtraArgument(api) as ThunkMiddleware<any, EnthusiasmAction, string>,
			logger,
			routerMiddleware(history))(createStore)
			(combineReducers({
				router: routerReducer,
				books,
				user,
				form: formReducer,
				cart,
				example
			})
			, <any>{
				example: {
					enthusiasmLevel: 1,
					languageName: 'TypeScript',
				},
				books: <any>{
					selectedBook: <any>{},
					similar: <any>[],
				},
				cart: [],
			},
		);
	return store;
}
