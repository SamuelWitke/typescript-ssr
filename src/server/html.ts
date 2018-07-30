import * as serialize from "serialize-javascript";

const html = ({ body, initialData, bundlePath }: { body: string, initialData: Object, bundlePath: string }) => `
		<html>
		<head>
		<link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.6/semantic.min.css">
		</head>
		<body style="margin:0">
		<div id="root">${body}</div>
		<script src=${bundlePath} defer></script>
		 <script>window.__initialData__ = ${serialize(initialData)}</script>
		</body>
		</html>
`;
export default html;
