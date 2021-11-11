import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from 'react-bootstrap/Card';


//import df bootstarp
import Button from 'react-bootstrap/Button';
import { setAuthedUser } from '../actions/authedUser';

import Form from 'react-bootstrap/Form';
//removed
class Login extends Component {
	state = {
		errorMsg: ''
	};

	handleSubmit = (e) => {
		const userID = this.userID.value;
		const { dispatch } = this.props;

		e.preventDefault();

		if (userID !== '') {
			dispatch(setAuthedUser(userID));
		} else {
			this.setState({ errorMsg: 'You must choose a username' });
		}
	};

	render() {
		const { userNames } = this.props;
		//const { errorMsg } = this.state;

		return (
			<dev>
			<dev>
		
					<Card >
						<Card.Body>
							<Form onSubmit={this.handleSubmit}>
								<Form.Group controlId="formGridState">
						
									<Form.Control
										as="select"
										ref={(id) => (this.userID = id)}
									>
										<option value="">CHOOSE USER FROM DROPDOWN</option>
										{userNames.map((item) => (
											<option value={item.value} key={item.value}>
												{item.label}
											</option>
										))}
									</Form.Control>
								</Form.Group>

								<Button type="submit">
								SIGN IN
								</Button>
							</Form>
						</Card.Body>
					</Card>
	
			</dev>
			</dev>
		);
	}
}

function mapStateToProps({ users }) {
	return {
		userNames: Object.keys(users).map((id) => ({
			value: id,
			label: users[id].name
		}))
	};
}

export default connect(mapStateToProps)(Login);