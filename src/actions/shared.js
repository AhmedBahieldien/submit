import { showLoading } from 'react-redux-loading-bar';
import {hideLoading}from 'react-redux-loading-bar';
import { getInitialData } from '../utils/api';
import { receiveUsers } from './users';
import { receiveQuestions } from './questions';

export function handleInitialData() {
	return (dispatch) => {
		dispatch(showLoading());
		return getInitialData().then(({ users, questions }) => {
			dispatch(receiveUsers(users));
			console.log(users);
			dispatch(receiveQuestions(questions));
			console.log(questions);
			dispatch(hideLoading());
		});
	};
}