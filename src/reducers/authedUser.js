import { SET_AUTHED_USER } from '../actions/authedUser';
import { RESET_AUTHED_USER } from '../actions/authedUser';
import {DEF_USER} from '../actions/authedUser';

export default function authUser(state = null, action) {
	switch (action.type) {
		case SET_AUTHED_USER:
			return action.id;

	    case RESET_AUTHED_USER:
				return null;
		case DEF_USER:
			return null;

		default:
			return state;
	}
}