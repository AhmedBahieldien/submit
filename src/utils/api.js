import {_getUsers} from './_DATA.js';
import {_getQuestions}  from './_DATA.js';
import {_saveQuestion}  from './_DATA.js';
import {  _saveQuestionAnswer } from './_DATA.js';


export function saveQuestionAnswer(info) {
	return _saveQuestionAnswer(info);
}


export function getInitialData() {
	return Promise.all([_getUsers(), _getQuestions()]).then(([users, questions]) => ({
		users,
		questions
	}));
}

export function saveQuestion(question) {
	return _saveQuestion(question);
}

export function formatDate(timestamp) {
	const d = new Date(timestamp);
	const time = d.toLocaleTimeString('en-US');

	return time.substr(0, 5) + time.slice(-2) + ' | ' + d.toLocaleDateString();
}