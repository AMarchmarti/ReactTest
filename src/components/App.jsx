import React from 'react';
import { Route, Switch } from 'react-router';
import Agency from '../pages/Agency/Agency';
import Home from '../pages/Home/Home';
import Hotel from '../pages/Hotel/Hotel';

export const App = () => {
	return (
		<>
			<Switch>
				<Route exact path="/">
					<Home />
				</Route>
				<Route exact path="/hotel">
					<Hotel />
				</Route>
				<Route exact path="/agency">
					<Agency />
				</Route>
			</Switch>
		</>
	);
};
