import React, { Component } from 'react';
import { View, Button} from 'react-native';
import { InputItem } from '@ant-design/react-native';
import PropTypes from 'prop-types';

class Login extends Component{
	constructor(props) {
		super(props);
		this.handleUsernameChange = this.handleUsernameChange.bind(this);
		this.handlePasswordChange = this.handlePasswordChange.bind(this);
		this.loginMethod = this.loginMethod.bind(this);
		this.state = {
			username: '',
			password: ''
		}
	}

	handleUsernameChange(value){
		this.setState({
			username: value
		});
	}

	handlePasswordChange(value){
		this.setState({
			password: value
		});
	}

	loginMethod(){
		let { username, password } = this.state;
		let params = { username, password };
		this.props.login(params).then( res => {
			console.log('--login--res->', res );
			if(res){
				global.storeData('userInfo', res.userInfo).then(data => {
					console.log('--save data--->', data );
					global.storeData('token', res.token);
					this.props.navigation.navigate('Sword');
				});
			}
		});
	}

	render(){
		return (
			<View>
				<InputItem
					name="username"
					value={this.state.username}
					onChange={this.handleUsernameChange}
					placeholder="用户名"
				/>
				<InputItem
					name="password"
					value={this.state.password}
					onChange={this.handlePasswordChange}
					placeholder="密码"
				/>
				<Button title="登录" onPress={this.loginMethod} />
			</View>
		);
	}
}

Login.propTypes = {
	data: PropTypes.object, //用户信息
	login: PropTypes.func,  //登录
}
export default Login;