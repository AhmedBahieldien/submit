import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { handleAddQuestion } from '../actions/questions';
//bootstrap
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';

import Button from 'react-bootstrap/Button';

class NewQuestion extends Component {
	state = {
		optionOne: '',
		optionTwo: '',
		toHome: false
	};
 
	//	handleSubmit = (e) => {
		//const { optionOne, optionTwo } = this.state;
		//c/onst { dispatch } = this.props;
	handleInputChange = (e) => {
		const name = e.target.name;
		const value = e.target.value;
		this.setState({
			[name]: value
		});
	};

	handleSubmit = (e) => {
		const { optionOne } = this.state;
		const { dispatch } = this.props;
	const {optionTwo} = this.state;

		e.preventDefault();

		this.setState(
			{
				optionOne: '',
				optionTwo: '',
				toHome: true
			},
			() => dispatch(handleAddQuestion(optionOne, optionTwo))
		);
	};

	render() {
		//consts
		const { optionOne } = this.state;

		const {toHome} = this.state;
		const {optionTwo} = this.state;
	

		//to the home page
		if (toHome === true && toHome === true ) 
		return <Redirect to="/" />;

		return (
			<dev>
						<Card >
							<Card.Body>
								<Form onSubmit={this.handleSubmit}>
									<Form.Group controlId="optionOne">
										<Form.Label>FIRST CHOICE</Form.Label>
										<Form.Control
											type="text"
											name="optionOne"
											value={optionOne}
											onChange={this.handleInputChange}
										/>
									</Form.Group>
									
									<Form.Group controlId="optionTwo">
										<Form.Label>SECOND CHOICE</Form.Label>
										<Form.Control
											type="text"
											name="optionTwo"
											value={optionTwo}
											onChange={this.handleInputChange}
										/>
									</Form.Group>
									<Button
										type="submit"
									>
										ENTER QUESTION

									</Button>
								</Form>
							</Card.Body>
						</Card>
			</dev>
		);
	}
}

//export
export default connect()(NewQuestion);