import { connect } from 'react-redux';
import http from '../server';
import {
	register,
} from '../store/actions';

import {
	API_USER
} from '../apiUrl';

import Register from '../components/Register';

const mapStateToProps = (state) => {
	return {
		data: state.user.data,     //用户信息
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		/* 注册 */
		register: (data) => {
			return http({method: 'POST', url: API_USER, data}).then(res => {
				dispatch(register(res));
				return Promise.resolve(res);
			});
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);
