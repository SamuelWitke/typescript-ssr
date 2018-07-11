const html = ({ body }: { body: string }) => `
	<!DOCTYPE html>
		<html>
		<head>
		</head>
		<body style="margin:0">
		<div id="root">${body}</div>
		</body>
		</html>
`;
export default html;
