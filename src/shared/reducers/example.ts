import { StoreState } from '../types/'
import { INCREMENT_ENTHUSIASM, DECREMENT_ENTHUSIASM } from '../constants/example';

export default function enthusiasm(state: any ={}, action: any): StoreState {
	switch (action.type) {
		case INCREMENT_ENTHUSIASM:
			return { ...state, enthusiasmLevel: state.enthusiasmLevel + 1 };
		case DECREMENT_ENTHUSIASM:
			return { ...state, enthusiasmLevel: Math.max(1, state.enthusiasmLevel - 1) };
		default:
			return state;
	}
}
