import { ADDED_TO_CART } from '../constants/cart';
//import { StoreState } from '../types/'

export default (state: any =[], action : any) => {
	switch (action.type) {
		case ADDED_TO_CART:
			return {...state, cart: action.payload};
		default:
			return state;
	}
}
