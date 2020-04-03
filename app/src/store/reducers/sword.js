import {
	GET_SWORD,
	GET_SWORD_DETAIL,
	CREATE_SWORD
} from "../actionTypes";

const sword = (state = {swordList: [], sword: {} }, action) => {
	switch(action.type){
		case GET_SWORD:     //获取剑列表
			return Object.assign({}, state, { swordList:  action.swordList });
		case GET_SWORD_DETAIL:     //获取宝剑详情
			return Object.assign({}, state, { sword:  action.sword });
		case CREATE_SWORD:     //创建宝剑
			return Object.assign({}, state, { sword:  action.sword });
		default:
			return state;
	}
}

export default sword;