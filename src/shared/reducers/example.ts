import { EnthusiasmAction } from '../actions/example';
import { StoreState } from '../types/example'
import { INCREMENT_ENTHUSIASM, DECREMENT_ENTHUSIASM } from '../constants/example';

export function enthusiasm(state: StoreState, action: EnthusiasmAction): StoreState {
	switch (action.type) {
		case INCREMENT_ENTHUSIASM:
			return { ...state, enthusiasmLevel: state.enthusiasmLevel + 1 };
		case DECREMENT_ENTHUSIASM:
			return { ...state, enthusiasmLevel: Math.max(1, state.enthusiasmLevel - 1) };
		default:
			return state;
	}
}