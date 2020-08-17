<template>
	<view class="header">
		<view class="header-up">
			<image src="../../../static/home_4.png" mode=""></image>
			<view>我们相爱了</view>
			<image src="../../../static/home_5.png" mode=""></image>
		</view>
		<view class="header-bt">
			<view>100</view>天
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			};
		}
	}
</script>

<style lang="scss">
	.header {
		background-image: linear-gradient(to right, #FEDADE, #FF788C);
		z-index: 1;
		height: 450rpx;

		.header-up {
			display: flex;
			justify-content: center;
			align-items: center;
			padding-top: 100rpx;
			color: #FFFFFF;
			font-size: 46rpx;
		}

		.header-up image {
			width: 100rpx;
			height: 100rpx;
			border-radius: 50%;
		}

		.header-up view {
			margin: 0 50rpx;
		}

		.header-bt {
			position: relative;
			top: -5rpx;
			display: flex;
			justify-content: center;
			align-items: center;
			margin: 0 auto;
			height: 100rpx;
			width: 180rpx;
			color: #FF868C;
			font-size: 31rpx;
			background-image: url(../../../static/home_9.png);
			background-size: 100% 100%;
		}

		.header-bt view {
			font-size: 55rpx;
			font-weight: 600;
			margin-left: 9rpx;
		}
	}
</style>
