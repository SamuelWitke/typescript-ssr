import { applyMiddleware, createStore, Store} from 'redux';
import { EnthusiasmAction } from './actions/example';
import rootReducer from './reducers/index';
//import { StoreState } from './types/';
import logger from 'redux-logger/'
import api from './api';
import thunk, { ThunkMiddleware } from 'redux-thunk';



function configureStore(){
	const store: Store<any,EnthusiasmAction> = 
	applyMiddleware(thunk.withExtraArgument(api) as ThunkMiddleware<any, EnthusiasmAction, string> , logger)(createStore)
	(rootReducer, <any> {
		enthusiasmLevel: 1,
		languageName: 'TypeScript',
		book: <any>{
			selectedBook : <any>{},
			similar : <any>[],
		},		
	} ,
	);
	return store;
}

export default configureStore;
