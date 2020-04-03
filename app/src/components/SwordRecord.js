import React, { Component } from 'react';
import {
	View,
	TouchableOpacity,
	StyleSheet,
	ActivityIndicator,
	Text,
	Dimensions,
	WebView
} from 'react-native';
import PropTypes from 'prop-types';
import { RNCamera } from 'react-native-camera';
import axios from 'axios';

class SwordRecord extends Component{
	constructor(props) {
		super(props);
		this.state = {
			userInfo: null,
			recording: false,
			processing: false,
			flash: 'off',
			zoom: 0,
			autoFocus: 'on',
			autoFocusPoint: {
				normalized: { x: 0.5, y: 0.5 }, // normalized values required for autoFocusPointOfInterest
				drawRectPosition: {
					x: Dimensions.get('window').width * 0.5 - 32,
					y: Dimensions.get('window').height * 0.5 - 32,
				},
			},
			depth: 0,
			type: 'back',
			whiteBalance: 'auto',
			ratio: '16:9',
			recordOptions: {
				mute: false,
				maxDuration: 30,
				quality: RNCamera.Constants.VideoQuality['720p'],
			},
			isRecording: false,
			canDetectFaces: false,
			canDetectText: false,
			canDetectBarcode: false,
			faces: [],
			textBlocks: [],
			barcodes: [],
		}
	}

	componentDidMount(){
		this.getUserInfo();
	}

	getUserInfo(){
		global.getData('userInfo').then( data => {
			if(!data){
				this.props.navigation.navigate('My');
			}
			this.setState({userInfo: data});
		}).catch(err => {
			console.log(err);
		});
	}

	async startRecording() {
		this.setState({ recording: true });
		if (this.camera) {
			try {
				const promise = this.camera.recordAsync(this.state.recordOptions);

				if (promise) {
					this.setState({ recording: true });
					const data = await promise;
					this.setState({ recording: false, processing: true });
					console.log('takeVideo', data);
					const { uri, codec = "mp4" } = data;
					const type = `video/${codec}`;
					const file = new FormData();
					file.append("video", {
						uri,
						type,
						name: 'sword.mp4'
					});
					axios({
						method: 'post',
						url: 'upload',
						data: file
					}).then( res => {
						this.setState({ processing: false });
						let params = {
							sword: res.url,
							title: 'test',
							user: this.state.userInfo._id
						}
						this.props.createSword(params);
					}).catch(error => {
						console.log(error);
					});

					/**
					 * 方法二
					 */
					// RNFetchBlob.fetch('POST', 'http://192.168.8.133:2501/api/upload', {
					// 	'Content-Type' : 'multipart/form-data',
					// }, [
					// 	// part file from storage
					// 	{ name : 'avatar-foo', filename : 'upload_video.mp4', type:'video/mp4', data: RNFetchBlob.wrap(uri)},
					//
					// ]).then((resp) => {
					// 	console.log(' resp---------->', resp );
					// }).catch((err) => {
					// 	// ...
					// })
				}
			} catch (e) {
				console.error(e);
			}
		}

	}

	stopRecording() {
		this.camera.stopRecording();
	}

	render() {
		let { recording, processing } = this.state;

		let button = (
			<TouchableOpacity
				onPress={this.startRecording.bind(this)}
				style={styles.capture}
			>
				<Text style={{ fontSize: 14 }}> RECORD </Text>
			</TouchableOpacity>
		);

		if (recording) {
			button = (
				<TouchableOpacity
					onPress={this.stopRecording.bind(this)}
					style={styles.capture}
				>
					<Text style={{ fontSize: 14 }}> STOP </Text>
				</TouchableOpacity>
			);
		}

		if (processing) {
			button = (
				<View style={styles.capture}>
					<ActivityIndicator animating size={18} />
				</View>
			);
		}

		return (
			<View style={styles.container}>
				<RNCamera
					ref={ref => {
						this.camera = ref;
					}}
					style={styles.preview}
					type={this.state.type}
					flashMode={this.state.flash}
					autoFocus={this.state.autoFocus}
					autoFocusPointOfInterest={this.state.autoFocusPoint.normalized}
					zoom={this.state.zoom}
					whiteBalance={this.state.whiteBalance}
					ratio={this.state.ratio}
					focusDepth={this.state.depth}
					androidCameraPermissionOptions={{
						title: 'Permission to use camera',
						message: 'We need your permission to use your camera',
						buttonPositive: 'Ok',
						buttonNegative: 'Cancel',
					}}
					androidRecordAudioPermissionOptions={{
						title: 'Permission to use audio recording',
						message: 'We need your permission to use your audio',
						buttonPositive: 'Ok',
						buttonNegative: 'Cancel',
					}}
					onGoogleVisionBarcodesDetected={({ barcodes }) => {
						console.log(barcodes);
					}}
				/>
				<View
					style={{ flex: 0, flexDirection: "row", justifyContent: "center" }}
				>
					{button}
				</View>
			</View>
		);
	}
}

SwordRecord.propTypes = {
	createSword: PropTypes.func //创建宝剑
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
		backgroundColor: 'black',
	},
	preview: {
		flex: 1,
		justifyContent: 'flex-end',
		alignItems: 'center',
	},
	capture: {
		flex: 0,
		backgroundColor: '#fff',
		borderRadius: 5,
		padding: 15,
		paddingHorizontal: 20,
		alignSelf: 'center',
		margin: 20,
	}
});

export default SwordRecord;