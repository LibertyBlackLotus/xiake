import React, {Component} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Sword from '../containers/Sword';
import SwordVideo from '../components/SwordVideo';

const Stack = createStackNavigator();

class HomeNavigator extends Component {
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
								 headerTitleAlign: 'center'
							 }}>
				<Stack.Screen name="Sword"
							  component={Sword}
							  options={{
							  	title: '首页'
							  }} />
				<Stack.Screen name="SwordVideo"
							  component={SwordVideo} />
			</Stack.Navigator>
		);
	}
}

export default HomeNavigator;