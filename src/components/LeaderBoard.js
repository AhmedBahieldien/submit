import React, { Component } from 'react';
import { connect } from 'react-redux';
import UserStats from './UserStats';

class LeaderBoard extends Component {
	render() {
		return (
			<dev>
									LEARERBOARD
				{this.props.userIDs.map((id) => (
					<UserStats key={id} id={id} />
				))}
			</dev>
		);
	}
}

function mapStateToProps({ users }) {
	const sortedUserIDs = Object.keys(users).sort((idA, idB) => {
		const scoreA =Object.keys(users[idA].answers).length + users[idA].questions.length;
		const scoreB =Object.keys(users[idB].answers).length + users[idB].questions.length;
		const diff = scoreB - scoreA;
		//return the differenve
		return diff
	});

	return {
		userIDs: sortedUserIDs
		//userIDs: sortedUserIDs
	};
}

export default connect(mapStateToProps)(LeaderBoard);