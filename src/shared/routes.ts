import Store from './scenes/Store';
import Book from './scenes/Book';
import User from './scenes/User';

export interface Routes {
	path: string,
	exact: boolean,
	component: any,
}

const routes: Array<Object> = [
	{
		path: "/store",
		exact: true,
		component: Store
	},
	{
		path: '/book/:key',
		exact: true,
		component: Book
	}, {
		path: "/sign-up",
		exact: true,
		component: User
	}
];
export default routes;
