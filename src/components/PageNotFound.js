import React from 'react';
import { Link } from 'react-router-dom';

function PageNotFound() {
	return (
		<dev>
			<h1 >404 ERROR</h1>
			<h1>
				<Link to="/">GO BACK TO HOME</Link>
			</h1>
		</dev>
	);
}

export default PageNotFound;