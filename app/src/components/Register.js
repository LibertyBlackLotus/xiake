import React, { Component } from 'react';
import { View, Button } from 'react-native';
import PropTypes from 'prop-types';
import { InputItem } from '@ant-design/react-native';
class Register extends Component{
	constructor(props) {
		super(props);
		this.handleUsernameChange = this.handleUsernameChange.bind(this);
		this.handlePasswordChange = this.handlePasswordChange.bind(this);
		this.registerMethod = this.registerMethod.bind(this);
		this.state = {
			username: '',
			password: ''
		}
	}

	componentDidUpdate(prevProps, prevState){
		console.log('--componentDidUpdate--prevProps--->', prevProps);
		console.log('--componentDidUpdate--prevState--->', prevState);

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

	registerMethod(){
		let { username, password } = this.state;
		let params = { username, password };
		this.props.register(params).then( res => {
			console.log('registerMethod---res--->', res);
			global.storeData('userInfo', res.userInfo);
			global.storeData('token', res.token);
			this.props.navigation.navigate('Sword');
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
				<Button title="注册" onPress={this.registerMethod}></Button>
			</View>
		);
	}
}
Register.propTypes = {
	data: PropTypes.object,   //用户信息
	register: PropTypes.func, //注册
}

export default Register;