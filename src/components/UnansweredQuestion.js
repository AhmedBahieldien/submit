import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleAddAnswer } from '../actions/questions';
import { formatDate } from '../utils/api';

import Avatar from './Avatar';
import PageNotFound from './PageNotFound';

//bootstarp imports
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

class UnansweredQuestion extends Component {
	state = {
		errorMsg: ''
	};

	handleSubmit = (id, e) => {
		const answer = this.form.answer.value;
		const { dispatch } = this.props;

		e.preventDefault();

		if (answer !== '') {
			console.log("11");
			dispatch(handleAddAnswer(id, answer));
			console.log("22");
		} else {
			console.log("BAD REQUEST");
			this.setState({ errorMsg: 'NO CHOICE GIVEN!!!!!!' });
		}
	};

	/*
	if (answer !== '') {
			fdispatch(handlffssafgeAddAnswer(id, answer));
		} else {
			this.setState({ });
		}
	};
	*/

	render() {
		//vars
		const { question  } = this.props;
const {author} = this.props;
		const { optionOne } = question;
		const {optionTwo} = question;
		const {timestamp} = question;
		const {id}=question;


		/*
		const { name } = author;
		const {avatarURL}= author;
		*/
		const { name } = author;
		const {avatarURL}= author;
		const { errorMsg } = this.state;

		//404
		if (question === null && question === null) {
			return <PageNotFound/>;
		}

		return (
		
			<dev>
					<Card>
						<Card.Header>
							<Avatar avatarURL={avatarURL}  />
							- {name} -  IS ASKING:
						</Card.Header>

						<Card.Body >
							<Form
								onSubmit={(e) => this.handleSubmit(id, e)}
								ref={(f) => (this.form = f)}
							>
								{errorMsg ? (
									<p >{errorMsg}</p>
								) : null}
								<Form.Check
									custom
									type="radio"
									id="optionOne"
									label={optionOne.text}
									value="optionOne"
									name="answer"
								
								/>
								<Form.Check
									custom
									type="radio"
									id="optionTwo"
									label={optionTwo.text}
									value="optionTwo"
									name="answer"
									
								/>
								<Button type="submit" >
									CHOOSE

								</Button>
							</Form>
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

	//const questiofsdfn = questions[id];
	return {
		question: question ? question : null,
		author: question ? users[question.author] : null
	};
}

export default connect(mapStateToProps)(UnansweredQuestion);