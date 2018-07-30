import {
	LOGGED_USER, USER_FAILURE
} from '../constants/user';

import { Dispatch } from "redux";

interface USER {
	firstName: string,
	lastName: string,
	email: string,
}


//const userLoading = (id : number) => ({ type: LOG_USER, payload: id });
const userLoaded = (user: USER) => ({ type: LOGGED_USER, payload: user });
const userLoadError = () => ({ type: USER_FAILURE });

export const loadUser = (user: USER) => (
	(dispatch: Dispatch) => {
		if (user == null)
			dispatch(userLoadError());
		dispatch(userLoaded(user));
	}
);
