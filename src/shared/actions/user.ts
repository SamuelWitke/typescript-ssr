import { 
	LOG_USER, LOGGED_USER, USER_FAILURE
} from '../constants/user';

import { Dispatch } from "redux";

interface USER {
	id: number,
	name: string,
	token: string,
}


const userLoading = (id : number) => ({ type: LOG_USER, payload: id });
const userLoaded = (user: USER) => ({ type: LOGGED_USER, payload: user });
const userLoadError = () => ({ type: USER_FAILURE });

export const getUser = () => (
	(dispatch : Dispatch, getState : any, api : any) => {
		dispatch(userLoading(1));
		return api.getUser()
			.then( (user : USER)=> {
				dispatch( userLoaded(user) );
				return user;
			})
			.catch( (err : Error) => {
				dispatch( userLoadError() );
			});
	}
);
