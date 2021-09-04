import React from 'react';
import { Route, Switch } from 'react-router';
import Home from '../pages/Home/Home';
import Register from '../pages/Register/Register';

export const App = () => {
	return (
		<>
			<Switch>
				<Route exact path="/">
					<Home />
				</Route>
				<Route exact path="/:typeUser">
					<Register />
				</Route>
			</Switch>
		</>
	);
};
