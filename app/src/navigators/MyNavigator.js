import React, {Component} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import MyInfo from '../containers/MyInfo';
import LoginNavigator from './LoginNavigator';

const Stack = createStackNavigator();

class MyNavigator extends Component {
	render() {
		return (
			<Stack.Navigator initialRouteName="MyInfo"
							 screenOptions={{
								 headerStyle: {
									 backgroundColor: '#16a085'
								 },
								 headerTintColor: '#fff',
								 headerTitleStyle: {
									 fontWeight: 'bold',
								 },
								 headerTitleAlign: 'center'
							 }}>
				<Stack.Screen name="MyInfo"
							  component={MyInfo}
							  options={{title: '个人中心'}}
				/>
				<Stack.Screen name="LoginNavigator"
							  component={LoginNavigator}
							  options={{
								  headerShown: false
							  }}
				/>

			</Stack.Navigator>
		);
	}
}

export default MyNavigator;