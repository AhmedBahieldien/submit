import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import QuestionPage from './QuestionPage';
import { BrowserRouter as Router } from 'react-router-dom';

import Home from './Home';

import LeaderBoard from './LeaderBoard';
import NavigationBar from './NavigationBar';


import PageNotFound from './PageNotFound';

//import NewQuestion from './NewQuestion';
import NewQuestion from './NewQuestion';
class PrivateApp extends Component {
	render() {
		return (
			<Router>
									<NavigationBar />
					
						<Switch>
							<Route path="/" exact component={Home} />
							<Route path="/questions/:id" component={QuestionPage} />
							<Route path="/add" component={NewQuestion} />
							<Route path="/leaderboard" component={LeaderBoard} />
							<Route component={PageNotFound} />
						</Switch>
					
			
			</Router>
		);
	}
}

export default PrivateApp;