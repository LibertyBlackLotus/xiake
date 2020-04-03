import * as React from 'react';
import { Provider } from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';
import Navigator from './src/navigators/AppNavigator';
import configureStore from './src/store/configureStore';

const store = configureStore();

global.storeData = async (item, value) => {
	try {
		let result = await AsyncStorage.setItem(item, JSON.stringify(value) );
	} catch (e) {
		// saving error
		return null;
	}
}

global.getData = async (key) => {
	try {
		const value = await AsyncStorage.getItem(key);
		if(value !== null) {
			return JSON.parse(value);
		}
	} catch(e) {
		return null;
	}
};

global.removeValue = async (key) => {
	try {
		await AsyncStorage.removeItem(key);
	} catch(e) {
		// remove error
	}
	console.log('Done.');
}


export default function App() {
	return (
		<Provider store={store}>
			<Navigator />
		</Provider>
	);
}