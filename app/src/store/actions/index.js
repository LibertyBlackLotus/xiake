import {
	GET_SWORD,
	GET_SWORD_DETAIL,
	CREATE_SWORD,
	REGISTER,
	LOGIN
} from '../actionTypes';

export function getSwordList(swordList = []){
	return {
		type: GET_SWORD,
		swordList
	}
}

export function getSwordDetail(sword = {}){
	return {
		type: GET_SWORD_DETAIL,
		sword
	}
}

export function createSword(sword = {}){
	return {
		type: CREATE_SWORD,
		sword
	}
}


export function register(data = {}){
	return {
		type: REGISTER,
		data
	}
}

export function login(data = {}){
	return {
		type: LOGIN,
		data
	}
}
