//EXPORTS 
//export const RESET_AUTHED_USER = 'RESET_AUTHED_USER';
export const RESET_AUTHED_USER = 'RESET_AUTHED_USER';

export const SET_AUTHED_USER = 'SET_AUTHED_USER';


export const DEF_USER = 'DEF';

export function setAuthedUser(id) {
	return {
		type: SET_AUTHED_USER,
		id
	};
}

export function reSetAuthedUser(id) {
	return {
		type: RESET_AUTHED_USER
	};
}

export function DEFUSER(id) {
	return {
		type: DEF_USER
	};
}