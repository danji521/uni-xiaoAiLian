<template>
	<view class="detailedList">
		<view class="detailedList-box">
			<view class="detailedList-box-img">
				<view>
					<image src="../../static/detailedList_0.png" mode="" class="detailedList-box-logo"></image>
					<view>用一些照片记录你们的甜蜜</view>
					<image src="../../static/detailedList_1.png" mode="" class="detailedList-box-add"></image>
				</view>
			</view>
			<view class="detailedList-box-text">
				<view>
					<view>一起穿情侣装我要向全世界宣言你是我的</view>
					<image src="../../static/detailedList_2.png" mode=""></image>
				</view>
			</view>
		</view>
		<view class="detailedList-btn" @click="detailedListOk()">隐藏恋爱任务</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			};
		},
		methods: {
			detailedListOk() {
				uni.navigateTo({
					url: '/pagesA/detailedListOk/detailedListOk'
				})
			}
		}
	}
</script>

<style lang="scss">
	.detailedList {
		padding-top: 40rpx;
		height: 100vh;
		background-image: linear-gradient(bottom right, #FEDADE, #FF788C);
	}

	.detailedList-box {
		margin: 0 auto;
		width: 86%;
		// height: 400rpx;
		border-radius: 10rpx;
	}

	.detailedList-box-img {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 580rpx;
		background-color: #E5E5E5;

		view {
			text-align: center;
			color: #555555;
			font-size: 30rpx;
		}
	}

	.detailedList-box-logo {
		width: 260rpx;
		height: 180rpx;
		margin-bottom: 30rpx;
	}

	.detailedList-box-add {
		position: relative;
		bottom: -160rpx;
		width: 100rpx;
		height: 100rpx;
	}

	.detailedList-box-text {
		display: flex;
		justify-content: center;
		align-items: center;
		padding-top: 100rpx;
		height: 200rpx;
		background-color: #FFFFFF;

		image {
			margin-top: 20rpx;
			width: 60rpx;
			height: 60rpx;
		}

		view {
			text-align: center;
			width: 400rpx;
			font-size: 35rpx;
		}
	}

	.detailedList-btn {
		display: flex;
		justify-content: center;
		align-items: center;
		margin: 40rpx auto 0 auto;
		width: 60%;
		height: 80rpx;
		color: #FFFFFF;
		font-size: 40rpx;
		border-radius: 10rpx;
		background-color: #DD524D;
	}
</style>
