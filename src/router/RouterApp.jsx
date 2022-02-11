import React from 'react';
import { LoginScreen } from '../components/auth/LoginScreen';
import { CalendarScreen } from '../components/calendar/CalendarScreen';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

export const RouterApp = () => {
	return (
		<Router>
			<div>
				<Switch>
					<Route exact path="/" component={CalendarScreen} />
					<Route exact path="/login" component={LoginScreen} />
				</Switch>
			</div>
		</Router>
	);
};
