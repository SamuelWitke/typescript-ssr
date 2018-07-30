import { ADDED_TO_CART } from '../constants/cart';
import { Dispatch } from "redux";

const added = (cart: number) => ({ type: ADDED_TO_CART, payload: cart });

export const addToCart = (bookId: number) => (
	(dispatch: Dispatch, getState: any, api: any) => {
		const state = getState();
		const { user } = state;
		if (user) {
			api.addToCart()
				.then(dispatch(added(bookId)));
		}
	}
);
