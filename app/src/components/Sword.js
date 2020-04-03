import React, {Component} from 'react';
import {
	StyleSheet,
	Dimensions,
	ScrollView,
	TouchableOpacity,
	View
} from 'react-native';
import PropTypes from 'prop-types';
import Video from 'react-native-video';
const {	width } = Dimensions.get('window');

class Sword extends Component {
	constructor(props){
		super(props);
		this.state = {
			resizeMode: 'stretch',
			paused: true,
		};

		this.showVideo = this.showVideo.bind(this);
	}

	componentDidMount() {
		this.props.getSwordList(); //获取宝剑列表
	}

	//播放视频
	showVideo(item){
		this.props.navigation.navigate('SwordVideo', { item } );
	}

	render() {
		const {swordList} = this.props;
		return (
			<ScrollView>
				{ swordList.map(item =>
					<View key={item._id}>
						<TouchableOpacity onPress={() => this.showVideo(item)} >
							<Video
								source={{uri: item.sword}}
								paused={this.state.paused}        //暂停
								resizeMode={this.state.resizeMode}//缩放模式
								style={styles.backgroundVideo}
							/>
						</TouchableOpacity>
					</View>
				)}
			</ScrollView>
		);
	}
}

Sword.propTypes = {
	swordList: PropTypes.array,   //宝剑列表
	getSwordList: PropTypes.func, //获取宝剑列表
};

const styles = StyleSheet.create({
	backgroundVideo: {
		width: width,
		height: width * 16 / 9,
		marginBottom: 10
	},
})


export default Sword;