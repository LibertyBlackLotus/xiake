import { connect } from 'react-redux';
import http from '../server';
import {
	login,
} from '../store/actions';

import {
	API_USER
} from '../apiUrl';

import Login from '../components/Login';

const mapStateToProps = (state) => {
	return {
		data: state.user.data,     //用户信息
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		/* 登录 */
		login: (data) => {
			return http({method: 'POST', url: API_USER + '/login', data}).then(res => {
				dispatch(login(res));
				return Promise.resolve(res);
			});

		}

	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
