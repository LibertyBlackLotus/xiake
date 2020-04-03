import { connect } from 'react-redux';
import http from '../server';
import {
	createSword,
} from '../store/actions';

import {
	API_GET_SWORD
} from '../apiUrl';

import SwordRecord from '../components/SwordRecord';

const mapStateToProps = (state) => {
	return {
		sword: state.sword.sword,     //剑详情
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		/* 创建宝剑 */
		createSword: (data) => {
			http({method: 'POST', url: API_GET_SWORD, data}).then(res => {
				dispatch(createSword(res));
			});

		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(SwordRecord);
