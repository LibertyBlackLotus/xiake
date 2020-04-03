import React, {Component} from 'react';
import {
	View,
	StyleSheet,
	Text,
	Image
} from 'react-native';
import PropTypes from 'prop-types';

class MyInfoShow extends Component {
	constructor(props){
		super(props);
		this.state = {
			avatar: require('../assets/avatar.png')
		};
	}

	render() {
		return (
			<View style={styles.myInfo}>
				<View>
					<Image style={styles.avatar}
						   source={this.state.avatar} />
				</View>
				<View>
					<Text style={styles.username}>{this.props.userInfo && this.props.userInfo.username}</Text>
				</View>
			</View>
		);
	}
}

MyInfoShow.propTypes = {
	userInfo: PropTypes.object,   //用户信息
}

const styles = StyleSheet.create({
	myInfo: {
		height: 150,
		backgroundColor: '#16a085',
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center'
	},
	avatar: {
		width: 50,
		height: 50
	},
	username: {
		color: '#fff'
	}
});

export default MyInfoShow;