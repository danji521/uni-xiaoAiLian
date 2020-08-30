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
					<view class="detailedList-box-text_text">一起穿情侣装我要向全世界宣言你是我的</view>
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
