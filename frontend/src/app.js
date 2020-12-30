'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Styles
import 'normalize.css/normalize.css';
import './styles/styles.scss';

// Pages
import index from './pages/index';
import pageNotFound from './pages/pageNotFound';

const routes = (
	<BrowserRouter>
		<Switch>
			<Route exact path="/" component={index} />
			<Route component={pageNotFound} />
		</Switch>
	</BrowserRouter>
);

ReactDOM.render(routes, document.getElementById('app'));
