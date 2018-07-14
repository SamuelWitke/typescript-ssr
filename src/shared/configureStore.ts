import {  createStore} from 'redux';
import { EnthusiasmAction } from './actions/example';
import {enthusiasm} from './reducers/example';
import { StoreState } from './types/example';

const store = createStore<StoreState,EnthusiasmAction,null,null>(enthusiasm, {
	enthusiasmLevel: 1,
	languageName: 'TypeScript',
},
);

export default store;
