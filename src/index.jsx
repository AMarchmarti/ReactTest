import * as React from 'react';
import { render } from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';
import { App } from './components/app';

const app = document.getElementById('app');

render(
	<Router>
		<App />
	</Router>,
	app
);
