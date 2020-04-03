import { connect } from 'react-redux';
import http from '../server';
import {
} from '../store/actions';

import {
	API_USER
} from '../apiUrl';

import MyInfo from '../components/MyInfo';

const mapStateToProps = (state) => {
	return {
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		/* 获取用户信息 */
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(MyInfo);
