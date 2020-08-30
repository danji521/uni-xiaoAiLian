<template>
	<view class="detailedList">
		<view class="detailedList-box">
			<view class="detailedList-box-img">
				<view>
					<image src="../../static/detailedList_0.png" mode="" class="detailedList-box-logo" v-if="logoImg==''"></image>
					<image :src="logoImg" mode="" class="detailedList-box-logo" v-else></image>
					<view>用一些照片记录你们的甜蜜</view>
					<image src="../../static/detailedList_1.png" mode="" class="detailedList-box-add" @click="addImg()"></image>
				</view>
			</view>
			<view class="detailedList-box-text">
				<view>
					<view class="detailedList-box-text_text">
						<editor id="editor" class="ql-container" :placeholder="text" @input="onEditorReady"></editor>
					</view>
					<image src="../../static/detailedList_2.png" mode=""></image>
				</view>
			</view>
		</view>
		<view class="detailedList-btn" @click="detailedListOk()">隐藏恋爱任务</view>
	</view>
</template>

<script>
	import http from '../../utile/http.js'
	export default {
		data() {
			return {
				logoImg: '',
				text: '一起穿情侣装我要向全世界宣告你是我的'
			};
		},
		methods: {
			onEditorReady(res) {
				this.text = res.detail.text;
				console.log(res)
			},
			detailedListOk() {
				if (this.logoImg != '') {
					http.detailedList({
						logo: this.logoImg,
						text: this.text
					}).then(res => {
						uni.navigateTo({
							url: '/pagesA/detailedListOk/detailedListOk'
						})
					})
				}
			},
			addImg() {
				let _this = this;
				//前端代码
				uni.chooseImage({
					count: 1,
					success(res) {
						console.log(res);
						if (res.tempFilePaths.length > 0) {
							let filePath = res.tempFilePaths[0]
							//进行上传操作
							// callback方式，与promise方式二选一即可
							uniCloud.uploadFile({
								filePath: filePath,
								cloudPath: 'a.jpg',
								onUploadProgress: function(progressEvent) {
									console.log(progressEvent);
									var percentCompleted = Math.round(
										(progressEvent.loaded * 100) / progressEvent.total
									);
								},
								success(err) {
									_this.logoImg = err.fileID;
									console.log(_this.logoImg)
								},
								fail() {},
								complete() {}
							});

						}
					}
				});
			}
		}
	}
</script>

<style lang="scss">
	.detailedList {
		padding-top: 82rpx;
		height: calc(100vh - 82rpx);
		background-image: linear-gradient(to bottom, #fcecd3, #ffb0e7);
	}

	.detailedList-box {
		margin: 0 auto;
		width: 588rpx;
		border-radius: 10rpx;
	}

	.detailedList-box-img {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 564rpx;
		background-color: #fff9fd;

		view {
			text-align: center;
			color: #d2d0d3;
			font-size: 30rpx;
		}

		view:nth-child(1) {
			height: 260rpx;
		}
	}

	.detailedList-box-logo {
		width: 228rpx;
		height: 184rpx;
		margin-bottom: 40rpx;
	}

	.detailedList-box-add {
		position: relative;
		bottom: -80rpx;
		width: 120rpx;
		height: 120rpx;
	}

	.detailedList-box-text {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 314rpx;
		background-color: #FFFFFF;

		image {
			position: relative;
			top: 46rpx;
			width: 60rpx;
			height: 60rpx;
		}

		view {
			text-align: center;
		}
	}

	.detailedList-box-text_text {
		margin-top: 60rpx;
		text-align: center;
		width: 400rpx;
		font-size: 35rpx;
	}

	.ql-container {
		display: block;
		position: relative;
		box-sizing: border-box;
		-webkit-user-select: text;
		user-select: text;
		outline: none;
		overflow: hidden;
		width: 100%;
		height: 90rpx !important;
		min-height: 90rpx !important;

	}

	.detailedList-btn {
		display: flex;
		justify-content: center;
		align-items: center;
		margin: 68rpx auto 0 auto;
		width: 380rpx;
		height: 80rpx;
		color: #FFFFFF;
		font-size: 40rpx;
		border-radius: 10rpx;
		background-color: #ff87ab;
	}
</style>
