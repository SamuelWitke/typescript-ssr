import { LOGGED_USER } from '../constants/user';
import { StoreState } from '../types/'

export default (state: StoreState, action : any) : any => {
	switch (action.type) {
		case LOGGED_USER:
			return action.payload;
		default:
			return state;
	}
}