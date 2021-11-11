import React, { Component } from 'react';

import { connect } from 'react-redux';
import UnansweredQuestion from './UnansweredQuestion';
import AnsweredQuestion from './AnsweredQuestion';

class QuestionPage extends Component {
	render() {
		const{match} = this.props;
		const { autherUserAnsweres } = this.props;
		const id = match.params.id;
		const answered = autherUserAnsweres.hasOwnProperty(id) ? true : false;

		return (
			<dev>
				WOULD U RATHER
				{answered ? <AnsweredQuestion id={id} /> : <UnansweredQuestion id={id} />}
			</dev>
		);
	}
}


/*
	return {
		autherUserAnsweres
	};
}

export default connect(mapStateToProps)(QuestionPage);
*/
function mapStateToProps({ authedUser, users }) {
	const autherUserAnsweres = users[authedUser].answers;

	return {
		autherUserAnsweres
	};
}

export default connect(mapStateToProps)(QuestionPage);