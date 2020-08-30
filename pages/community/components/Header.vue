<template>
	<view class="header">
		<view class="header-width"></view>
		<view class="header-nav">
			<view>推荐</view>
			<view class="active">关注</view>
			<view>新鲜</view>
		</view>
		<view class="header-width">
			<image src="../../../static/community_0.png" mode=""></image>
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
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 100%;
		height: 82rpx;
		border-bottom: 6rpx solid #F8F8F8;
		// position: fixed;
		background-color: #FFFFFF;
		// z-index: 100;

		image {

			width: 42rpx;
			height: 42rpx;
		}

		view {
			height: 100%;
			display: flex;
			justify-content: center;
			align-items: center;
		}

		.header-width {
			padding: 0 45rpx;
		}

		.header-nav {
			font-size: 40rpx;
			color: #a5a5a5;

			view {

				width: 120rpx;
				height: 100%;
			}
		}

		.active {
			font-size: 50rpx;
			color: #000000;
		}

		.active:after {
			content: '';
			width: 105rpx;
			height: 20rpx;
			background-color: #fa7286;
			border-radius: 10rpx;
			position: absolute;
			margin-top: 50rpx;
			opacity: .9;
		}

	}
</style>
