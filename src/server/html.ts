import * as serialize from "serialize-javascript";

const html = ({ body, initialData }: { body: string, initialData: Object}) => `
	<!DOCTYPE html>
		<html>
		<head>
		</head>
		<body style="margin:0">
		<div id="root">${body}</div>
		<script src="./bundle.js" defer></script>
		 <script>window.__initialData__ = ${serialize(initialData)}</script>
		</body>
		</html>
`;
export default html;
