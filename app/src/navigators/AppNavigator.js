import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';

import HomeNavigator from './HomeNavigator';
import SwordNavigator from './SwordNavigator';
import MyNavigator from './MyNavigator';
const Tab = createBottomTabNavigator();

function MyDrawer() {
	return (
		<NavigationContainer>
			<Tab.Navigator
				screenOptions={({ route }) => ({
					tabBarIcon: ({ focused, color, size }) => {
						let { name } = route;
						let iconName;
						if (name === 'Home') {
							iconName = 'home';
						} else if (name === 'Sword') {
							iconName = 'videocamera';
						}else if (name === 'My') {
							iconName = 'user';
						}
						return <AntDesign name={iconName} size={size} color={color} />;
					}
				})}
				tabBarOptions={{
					activeTintColor: '#16a085',
					inactiveTintColor: 'gray',
				}} >
				<Tab.Screen name="Home"
							component={HomeNavigator}
							options={{ title: '首页'}}/>
				<Tab.Screen name="Sword"
							component={SwordNavigator}
							options={{ title: '剑'}}/>
				<Tab.Screen name="My"
							component={MyNavigator}
							options={{ title: '我的'}}/>
			</Tab.Navigator>
		</NavigationContainer>
	);
}
export default MyDrawer;