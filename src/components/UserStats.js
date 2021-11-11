import React, { Component } from 'react';
import { connect } from 'react-redux';
import Avatar from './Avatar';

//bootstrap
import Card from 'react-bootstrap/Card';


/*
function mapStateToProps({ users }, { id }) {
	return {
		user: users[id]
	};
}
*/
class UserStats extends Component {
	render() {
		
		const { user } = this.props;
		const { name } = user;
		const {avatarURL} = user;
		const {answers}= user;
		const {questions} =user;
		return (
			<dev>
					<Card>
						<Card.Header>
							<Avatar avatarURL={avatarURL} />
							-- {name}
						</Card.Header>
						<Card.Body>
							<Card.Text>
								YOU ANSWERED ---&gt; {Object.keys(answers).length}
								<br />
								YOU CREATED ---&gt; {questions.length}
								<br />
								YOUR SCORE ---&gt;{Object.keys(answers).length + questions.length}
							</Card.Text>
						</Card.Body>
					</Card>
					</dev>
		);
	}
}

function mapStateToProps({ users }, { id }) {
	return {
		user: users[id]
	};
}

export default connect(mapStateToProps)(UserStats);