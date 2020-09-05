<template>
	<view class="adddYnamic">
		<view class="adddYnamic-editor">
			<editor id="editor" class="ql-container" :placeholder="placeholder" @input="onEditorReady"></editor>
		</view>
		<view class="adddYnamic-text">
			<image :src="item" mode="" v-for="(item,index) in imgArry" :key="index"></image>
			<image src="../../static/detailedList_0.png" mode="" @click="addImg()"></image>

			<image src="../../static/anniversary_3.png" mode="" @tap="addImg()"></image>

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
				placeholder: '这一刻的想法...',
				imgArry: [],
				time: ''
			};
		},
		methods: {
			onEditorReady(err) {
				this.placeholder = err.detail.text;
			},
			addImg() {
				console.log("123")
				let _this = this;
				//前端代码
				uni.chooseImage({
					count: 9,
					success(res) {
						console.log(res);
						if (res.tempFilePaths.length > 0) {
							for (var i = 0; i < res.tempFilePaths.length; i++) {
								let filePath = res.tempFilePaths[i];
								// callback方式，与promise方式二选一即可
								uniCloud.uploadFile({
									filePath: filePath,
									cloudPath: res.tempFiles[i].name,
									onUploadProgress: function(progressEvent) {
										var percentCompleted = Math.round(
											(progressEvent.loaded * 100) / progressEvent.total
										);
									},
									success(err) {
										console.log(err)
										_this.imgArry.push(err.fileID);
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
				// 获取时间
				var date = new Date();
				date.setTime(date.getTime());
				var YMD = date.getFullYear() + "." + (date.getMonth() + 1) + "." + date.getDate();

				http.communityList({
					logo: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-xiaoailian/00a0fc8a-5d7c-412e-aced-9d80f4204899.jpg',
					name: '潇潇',
					text: this.placeholder,
					img: this.imgArry,
					fabulous: 0,
					comment: 0,
					time: YMD
				}).then(res => {
					uni.reLaunch({
						url: '/pages/community/community'
					});
				})
			}
		}
	}
</script>

<style lang="scss">
	.adddYnamic-editor {
		height: 200rpx;
		padding: 40rpx;
	}

	.ql-container {
		font-size: 35rpx;
	}

	.adddYnamic-text {
		padding: 40rpx;

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
