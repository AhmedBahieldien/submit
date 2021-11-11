//imports
import React, { Component } from 'react';
import { connect } from 'react-redux';
import BriefQuestionsList from './BriefQuestionsList';
//bootstarp
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
class Home extends Component {
	render() {
		//const
		const { answeredQuestionIds } = this.props;
		const {unansweredQuestionIds} = this.props;

		return (
			<dev>
				<Tabs>
					
					<Tab eventKey="answered" title="Answered Qs">
						<BriefQuestionsList	idsList={answeredQuestionIds}/>
					</Tab>

					<Tab eventKey="unanswered" title="Unanswered Qs">
						<BriefQuestionsList idsList={unansweredQuestionIds}	/>
					</Tab>
				</Tabs>
			</dev>
		);
	}
}

function mapStateToProps({ authedUser, questions, users }) {
	const answeredQuestionIds = Object.keys(questions)
		.filter((id) => users[authedUser].answers.hasOwnProperty(id))
		.sort((a, b) => questions[b].timestamp - questions[a].timestamp);

		//filter((id) => users[authedUser].answers.hasOwnProperty(id))
	const unansweredQuestionIds = Object.keys(questions)

	//.filter((id) => users[authedUser].answers.hasOwnProperty(id))
		.filter((id) => !users[authedUser].answers.hasOwnProperty(id))
		.sort((a, b) => questions[b].timestamp - questions[a].timestamp);

		//.filter((id) => users[authedUser].answers.hasOwnProperty(id))
	return {
		answeredQuestionIds,
		unansweredQuestionIds
	};
}

export default connect(mapStateToProps)(Home);