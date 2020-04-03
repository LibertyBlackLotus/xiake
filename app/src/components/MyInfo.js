import React, {Component} from 'react';
import { View, Text } from '@ant-design/react-native';

import MyInfoShow from './MyInfoShow';
import MyInfoSettings from './MyInfoSettings';
import MyInfoSword from './MyInfoSword';

class MyInfo extends Component {
	constructor(props){
		super(props);
		this.state = {
			userInfo: null,
		}
	}

	componentDidMount(){
		console.log('--componentDidMount-myinfo->' );
		this.getUserInfo();
	}

	getUserInfo(){
		global.getData('userInfo').then(data => {
			console.log('--getUserInfo------data--->', data );
			if(!data){
				this.props.navigation.navigate('LoginNavigator');
			}
			this.setState({userInfo: data});
		}).catch(err => {
			console.log('--getUserInfo------err--->', err );
			this.props.navigation.navigate('LoginNavigator');
		});
	}

	render() {
		return (
			<View>
				<MyInfoShow userInfo={this.state.userInfo}></MyInfoShow>
				<MyInfoSettings></MyInfoSettings>
				<MyInfoSword {...this.props}></MyInfoSword>
			</View>
		);
	}
}

export default MyInfo;