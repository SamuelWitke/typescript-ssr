import * as express from 'express';
import { Request, Response, } from 'express'
import * as React from 'react';
import { renderToString } from 'react-dom/server';
import App  from '../shared/App'; 
import html from './html';

const app: express.Application = express();
const PORT: number =8000;

app.get("**", (req: Request, res: Response): void => {
	const body = renderToString(React.createElement(App));
	(<any>res).send(
		html({
			body
		})
	);
});

app.listen(PORT, () => {
	console.log(`Listening at http://localhost:${PORT}/`);
});
