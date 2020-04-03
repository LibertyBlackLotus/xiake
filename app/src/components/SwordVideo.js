import React, {Component} from 'react';
import {
	StyleSheet,
	Dimensions
} from 'react-native';
import Video from 'react-native-video';

const {	width } = Dimensions.get('window');

class SwordVideo extends Component {
	constructor(props){
		super(props);
		this.state = {
			resizeMode: 'stretch',
		};
		this.videoError = this.videoError.bind(this);
	}

	videoError(err){
		console.warn('--videoError-->', err);
	}

	render() {
		const { route } = this.props;
		const { params } = route;
		const { item } = params;
		return (
				<Video
					source={{uri: item.sword}}   // Can be a URL or a local file.
					ref={(ref) => {
						this.player = ref
					}}               // Callback when remote video is buffering
					onError={this.videoError}
					resizeMode={this.state.resizeMode}//缩放模式
					//controls={true} //是否显示控制面板
					onFullscreenPlayerWillPresent={this.onFullscreenPlayerWillPresent}
					style={styles.backgroundVideo}
				/>
		);
	}
}

const styles = StyleSheet.create({
	backgroundVideo: {
		width: width,
		height: width * 16 / 9,
	},
})

export default SwordVideo;