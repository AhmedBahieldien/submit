import React, { Component  } from 'react';
import {Fragment} from 'react';
import { connect } from 'react-redux';
import PrivateApp from './components/PrivateApp';
import { handleInitialData } from './actions/shared';
import Spinner from 'react-bootstrap/Spinner';
import Login from './components/Login';


class App extends Component {
	componentDidMount() {
		this.props.dispatch(handleInitialData());
	}

	render() {
		const { authedUser } = this.props;
		const {loadingBar} = this.props;

		if (loadingBar.default === undefined || loadingBar.default === 1) {
			return (
				<div className="d-flex justify-content-center">
					<Spinner>
						<span >LOADING PAGE</span>
					</Spinner>
				</div>
			);
		} else {
			return <Fragment >{!authedUser ? <Login /> : <PrivateApp />}</Fragment>;
		}
	}
}

function mapStateToProps({ authedUser, loadingBar }) {
	return {
		authedUser,
		loadingBar
	};
}

export default connect(mapStateToProps)(App);