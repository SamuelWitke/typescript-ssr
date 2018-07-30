import Home from './scenes/Home';
import Book from './scenes/Book';
import User from './scenes/User';

export interface Routes {
	path: string,
	exact: boolean,
	component: any,
}

const routes: Array<Object> = [
	{
		path: "/",
		exact: true,
		component: Home
	},
	{
		path: '/book/:id',
		exact: true,
		component: Book
	}, {
		path: "/User",
		exact: true,
		component: User
	}
];
export default routes;
