import React, {Component} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Register from '../containers/Register';
import Login from '../containers/Login';

const Stack = createStackNavigator();

class LoginNavigator extends Component {
	render() {
		return (
			<Stack.Navigator initialRouteName="Sword"
							 screenOptions={{
								 headerStyle: {
									 backgroundColor: '#16a085'
								 },
								 headerTintColor: '#fff',
								 headerTitleStyle: {
									 fontWeight: 'bold',
								 },
								 headerTitleAlign: 'center',
							 }} >
				<Stack.Screen name="Login"
							  component={Login}
							  options={{title: '登录'}}/>
				<Stack.Screen name="Register"
							  component={Register}
							  options={{title: '注册'}}/>
			</Stack.Navigator>
		);
	}
}

export default LoginNavigator;