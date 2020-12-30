import React from 'react';
import { Link } from 'react-router-dom';

export default class Index extends React.Component {
	render() {
		return (
			<div>
				<p>404: Page not found</p>
				<Link to="/">Home</Link>
			</div>
		);
	}
}
