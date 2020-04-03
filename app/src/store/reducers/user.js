import {
	REGISTER,
	LOGIN
} from "../actionTypes";

const user = (state = {data: {} }, action) => {
	switch(action.type){
		case REGISTER:     //注册
			return Object.assign({}, state, { data:  action.data });
		case LOGIN:     //登录
			return Object.assign({}, state, { data:  action.data });
		default:
			return state;
	}
}

export default user;