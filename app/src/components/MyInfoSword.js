import React, {Component} from 'react';
import {
	ScrollView,
	View,
	Text
} from 'react-native';
import {
	Tabs,
	Button,
	Drawer
} from '@ant-design/react-native';

const renderContent = (tab, index) => {
	const style = {
		paddingVertical: 40,
		justifyContent: 'center',
		alignItems: 'center',
		margin: 10,
		backgroundColor: '#ddd',
	};
	const content = [1, 2, 3, 4, 5, 6, 7, 8].map(i => {
		return (
			<View key={`${index}_${i}`} style={style}>
				<Text>
					{tab.title} - {i}
				</Text>
			</View>
		);
	});
	return <ScrollView style={{ backgroundColor: '#fff' }}>{content}</ScrollView>;
};

class MyInfoSword extends Component {
	constructor(props){
		super(props);
		this.onOpenChange = isOpen => {
			/* tslint:disable: no-console */
			console.log('是否打开了 Drawer', isOpen.toString());
		};

		this.logout = this.logout.bind(this);
	}

	//退出登录
	logout(){
		global.removeValue('userInfo');
		global.removeValue('token');
		this.props.navigation.navigate('Login');
	}

	render() {
		const tabs = [
			{ title: '1st Tab' },
			{ title: '2nd Tab' },
			{ title: '3rd Tab' },
			{ title: '4th Tab' },
			{ title: '5th Tab' },
			{ title: '6th Tab' },
			{ title: '7th Tab' },
			{ title: '8th Tab' },
			{ title: '9th Tab' },
		];
		const sidebar = (
			<ScrollView>
				<Text>settings</Text>
			</ScrollView>
		);
		return (
			<View style={{ flex: 1 }}>
				<Button onPress={this.logout}>退出登录</Button>
				{/*<Tabs tabs={tabs} initialPage={1} tabBarPosition="top">*/}
					{/*{renderContent}*/}
				{/*</Tabs>*/}

				<Drawer
					sidebar={sidebar}
					position="right"
					open={false}
					drawerRef={el => (this.drawer = el)}
					onOpenChange={this.onOpenChange}
					drawerBackgroundColor="#ccc"
				>
				</Drawer>
				<Button onPress={() => this.drawer && this.drawer.openDrawer()}>设置</Button>
			</View>
		);
	}
}

export default MyInfoSword;