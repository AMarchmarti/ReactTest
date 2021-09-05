import React from 'react';
import { Route, Switch } from 'react-router';
import Home from '../pages/Home/Home';
import Register from '../pages/Register/Register';
import Complete from '../pages/Complete/Complete';

export const App = () => {
	return (
		<>
			<Switch>
				<Route exact path="/">
					<Home />
				</Route>
				<Route exact path="/register/:typeUser">
					<Register />
				</Route>
				<Route exact path="/complete">
					<Complete />
				</Route>
			</Switch>
		</>
	);
};
