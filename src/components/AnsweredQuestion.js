import React, { Component } from 'react';
import { connect } from 'react-redux';

import { formatDate } from '../utils/api';

//import Avatar from './Avatar';
import PageNotFound from './PageNotFound';

//bootstarp
import Card from 'react-bootstrap/Card';

import ProgressBar from 'react-bootstrap/ProgressBar';

class AnsweredQuestion extends Component {
	render() {
		const { question } = this.props;
		const {author}= this.props;
const{authedUser}= this.props;
	

		const { optionOne, optionTwo, timestamp } = question;
		const { name } = author;
		//const {avatarURL} = author;
		const totalVotes = optionOne.votes.length + optionTwo.votes.length;
		const optionOnePercent = Math.round((optionOne.votes.length / totalVotes) * 100);
		const optionTwoPercent = Math.round((optionTwo.votes.length / totalVotes) * 100);


			
		if (question === null) {
			return <PageNotFound />;
		}

		return (
			<dev>
		
					<Card >
						
							
							{name} -  IS ASKING:
						

						<Card.Body className="d-flex justify-content-center">
							<ul>
								<li>
									{optionOne.text}
									{optionOne.votes.includes(authedUser) ? (
										<span >
											&lt;------ YOU
										</span>
									) : null}
								</li>
								<ProgressBar
									now={optionOnePercent}
									label={`${optionOnePercent}%`}
									
								/>
								<Card.Text>
									{optionOne.votes.length} OF {totalVotes}{' '}
									USERS CHOSE THIS
								</Card.Text>
								<li>
									{optionTwo.text}
									{optionTwo.votes.includes(authedUser) ? (
										<span >
											&lt;- YOU
										</span>
									) : null}
								</li>
								<ProgressBar
									now={optionTwoPercent}
									label={`${optionTwoPercent}%`}
								
								/>
								<Card.Text >
									 {optionTwo.votes.length} OF {totalVotes}{' '}
									USERS CHOSE THIS
								</Card.Text>
							</ul>
						</Card.Body>
						
							{formatDate(timestamp)}
						
					</Card>
		
			</dev>
		);
	}
}

//function mapStateToProps({ questions, users, authedUser }, { id }) {
	//const question = questions[id];


function mapStateToProps({ questions, users, authedUser }, { id }) {
	const question = questions[id];

	return {
		question: question ? question : null,
		author: question ? users[question.author] : null,
		authedUser
	};
}

export default connect(mapStateToProps)(AnsweredQuestion);