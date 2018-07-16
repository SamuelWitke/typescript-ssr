import { applyMiddleware, createStore, Store} from 'redux';
import { EnthusiasmAction } from './actions/example';
import {enthusiasm} from './reducers/example';
import { StoreState } from './types/';
import thunk from "redux-thunk";
import logger from 'redux-logger'


function configureStore(){
	const store: Store<StoreState,EnthusiasmAction> = applyMiddleware(thunk, logger)(createStore)(enthusiasm, {
		enthusiasmLevel: 1,
		languageName: 'TypeScript',
	},
	);
	return store;
}

export default configureStore;
