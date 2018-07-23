import { ADDED_TO_CART } from '../constants/cart';
import { Dispatch } from "redux";

const added = (id : number) => ({ type: ADDED_TO_CART, payload: id });

export const addToCart = (bookId : number) => (
	(dispatch : Dispatch , getState : any, api : any) => {
		console.log(bookId);
		const user = getState().user;
		if(user){
			api.addToCart(bookId)
				.then(dispatch(added(bookId)));
		}
	}
);
