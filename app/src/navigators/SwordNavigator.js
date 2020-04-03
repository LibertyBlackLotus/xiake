import React, {Component} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SwordRecord from '../containers/SwordRecord';

const Stack = createStackNavigator();

class SwordNavigator extends Component {
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
				<Stack.Screen name="SwordRecord"
							  component={SwordRecord}
							  options={{title: '记录'}}/>
			</Stack.Navigator>
		);
	}
}

export default SwordNavigator;