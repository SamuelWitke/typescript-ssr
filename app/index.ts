import * as express from 'express';
import * as React from 'react';
import { renderToString } from 'react-dom/server';
import { App } from '../src/App'; 
import html from './html';


const app: express.Application = express();
const PORT: number = parseFloat(process.env.PORT) || 3000;

app.use(express.static("dist"));
app.get("**", (req, res) => {
	const body = renderToString(React.createElement(App));
	res.send(
		html({
			body
		})
	);
});

app.listen(PORT, () => {
	console.log(`Listening at http://localhost:${PORT}/`);
});
