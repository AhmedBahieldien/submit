import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { formatDate } from '../utils/api';
//import Avatar from './Avatar';

//bootstarp imports
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

class BriefQuestion extends Component {
	render() {
		const { question  } = this.props;
		const { optionOne } = question;
		const {author} = this.props;
		const { name } = author;
		
		const {timestamp} = question;
		const {id} = question;
		//const {avatarURL} = author;


		return (
			<dev>
					<Card >
							{name} - IS ASKING
						<Card.Body >
							<Card.Text>{optionOne.text} ????</Card.Text>
							<Link to={`/questions/${id}`}>
								<Button>OPEN FULL QUESTION</Button>
							</Link>
						</Card.Body>
						<Card.Footer>
							{formatDate(timestamp)}
						</Card.Footer>
					</Card>
			</dev>
		);
	}
}

function mapStateToProps({ questions, users }, { id }) {
	const question = questions[id];

	//return null
	return {
		question: question ? question : null,
		author: question ? users[question.author] : null
	};
}

export default connect(mapStateToProps)(BriefQuestion);