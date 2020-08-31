<template>
	<view class="adddYnamic  addMuseum">
		<!-- 导航 -->
		<view class="addMuseum-nav">
			<view :class="{active:navState==0}" @click="navStates(0)">视频</view>
			<view :class="{active:navState==1}" @click="navStates(1)">相册</view>
		</view>
		<view class="adddYnamic-editor">
			<input type="text" value="" v-model="adddYnamicText" />
		</view>
		<view class="adddYnamic-text">
			<video :src="item" controls v-for="(item,index) in videoArry" :key="index" v-if="navState==0"></video>
			<image :src="item" mode="" v-for="(item,index) in ImgArry" :key="index" v-if="navState==1"></image>
			<image src="../../static/detailedList_0.png" mode="" @click="addVideo()" v-if="navState==0"></image>
			<image src="../../static/detailedList_0.png" mode="" @click="addImg()" v-if="navState==1"></image>
		</view>
		<view class="adddYnamic-bnt" @click="addText()">
			发布
		</view>
	</view>
</template>

<script>
	import http from '../../utile/http.js'
	export default {
		data() {
			return {
				navState: 0,
				adddYnamicText: '请时输入相册名称',
				videoArry: [],
				ImgArry: [],
				time: ''
			};
		},
		methods: {
			onEditorReady(err) {
				this.adddYnamicText = err.detail.text;
			},
			navStates(err) {
				this.navState = err;
			},
			addVideo() {
				let _this = this;
				uni.chooseVideo({
					count: 9,
					mediaType: ['video'],
					success(res) {
						console.log(res);
						if (res.tempFilePath != undefined) {
							let filePath = res.tempFilePath;
							uniCloud.uploadFile({
								filePath: filePath,
								cloudPath: res.name,
								onUploadProgress: function(progressEvent) {
									var percentCompleted = Math.round(
										(progressEvent.loaded * 100) / progressEvent.total
									);
								},
								success(err) {
									_this.videoArry.push(err.fileID);
								},
								fail() {},
								complete() {}
							});
						}
					}
				});
			},
			addImg() {
				let _this = this;
				uni.chooseImage({
					count: 9,
					success(res) {
						console.log(res);
						if (res.tempFilePaths.length > 0) {
							for (var i = 0; i < res.tempFilePaths.length; i++) {
								let filePath = res.tempFilePaths[i];
								uniCloud.uploadFile({
									filePath: filePath,
									cloudPath: res.tempFiles[i].name,
									onUploadProgress: function(progressEvent) {
										var percentCompleted = Math.round(
											(progressEvent.loaded * 100) / progressEvent.total
										);
									},
									success(err) {
										_this.ImgArry.push(err.fileID);
									},
									fail() {},
									complete() {}
								});
							}
						}
					}
				});
			},
			addText() {
				if (this.navState == 0) {
					this.addVideoArry();
				} else {
					this.addImgArry();
				}
			},
			addVideoArry() {
				// 获取时间
				var date = new Date();
				date.setTime(date.getTime());
				var YMD = date.getFullYear() + "." + (date.getMonth() + 1) + "." + date.getDate();
				http.museumVideoList({
					name: this.adddYnamicText,
					time: YMD,
					video: this.videoArry
				}).then(res => {
					// uni.reLaunch({
					// 	url: '/pages/community/community'
					// });
				})
			},
			addImgArry() {
				// 获取时间
				var date = new Date();
				date.setTime(date.getTime());
				var YMD = date.getFullYear() + "." + (date.getMonth() + 1) + "." + date.getDate();
				http.museumImgList({
					name: this.adddYnamicText,
					time: YMD,
					img: this.ImgArry
				}).then(res => {
					// uni.reLaunch({
					// 	url: '/pages/community/community'
					// });
				})
			}
		}
	}
</script>

<style lang="scss">
	// 导航
	.addMuseum-nav {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 150rpx;

		view {
			display: flex;
			justify-content: center;
			align-items: center;
			margin: 0 30rpx;
			width: 200rpx;
			height: 80rpx;
			border-radius: 20rpx;
			border: 1rpx solid #F06C7A;
		}

		.active {
			color: #FFFFFF;
			background-color: #F06C7A;
		}
	}

	.adddYnamic-editor {
		height: 200rpx;
		padding: 40rpx;
		border-top: 1rpx solid #F56C6C;
	}

	.ql-container {
		font-size: 35rpx;
	}

	.adddYnamic-text {
		padding: 40rpx;

		video {
			width: 200rpx;
			height: 200rpx;
			border-radius: 20rpx;
			float: left;
			margin-left: 10rpx;
		}

		image {
			width: 200rpx;
			height: 200rpx;
			border-radius: 20rpx;
			float: left;
			margin-left: 10rpx;
		}
	}

	.adddYnamic-bnt {
		display: flex;
		justify-content: center;
		align-items: center;
		color: #FFFFFF;
		position: relative;
		top: 150rpx;
		background-color: #007AFF;
		border-radius: 20rpx;
		margin: 0 auto;
		width: 300rpx;
		height: 100rpx;
		clear: both;
	}
</style>
