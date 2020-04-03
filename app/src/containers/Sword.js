import { connect } from 'react-redux';
import http from '../server';
import {
	getSwordList,
} from '../store/actions';

import {
	API_GET_SWORD
} from '../apiUrl';

import Sword from '../components/Sword';

const mapStateToProps = (state) => {
	return {
		swordList: state.sword.swordList,     //剑列表
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		/* 获取宝剑列表 */
		getSwordList: () => {
			return http({url: API_GET_SWORD}).then(res => {
				dispatch(getSwordList(res));
				return Promise.resolve(res);
			});

		}

	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Sword);
