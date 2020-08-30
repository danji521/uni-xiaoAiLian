<template>
	<view class="findDetails">
		<view class="findDetails-nav">
			<image src="../../static/findDetails_0.png" mode=""></image>
		</view>
		<view class="findDetails-title">
			3个脱单秘籍，要不要这么简单
		</view>
		<view class="findDetails-day">
			<view>
				2019/11/02
			</view>
			<view class="day-right">
				<view>
					<image src="../../static/findDetails_1.png" mode=""></image>162
				</view>
				<view>
					<image src="../../static/findDetails_2.png" mode=""></image>83
				</view>
				<view>
					<image src="../../static/detailedList_2.png" mode=""></image>123
				</view>
			</view>
		</view>
		<view class="findDetails-text">
			情人节其实很多单身的男女一样情人节其实很多单身的男女一
			样情人节其情人节其实很多单身的男女一样情人节其实很多单身
			的男女一样情人节其情人节其实很多单身的男女一样情人节其实很
			多单身的男女一样情人节其实很多单身的男女一样情人节其实很多单
			身的男女一样
		</view>
		<view class="findDetails-input">
			<view class="input-box"><input type="text" value="" placeholder="写点什么..."></view>
			<view class="input-img">
				<image src="../../static/findDetails_6.png" mode=""></image>
				<image src="../../static/findDetails_2.png" mode=""></image>
				<image src="../../static/findDetails_4.png" mode=""></image>
			</view>
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
	.findDetails-nav {
		width: 100%;
		height: 360rpx;

		image {
			width: 100%;
			height: 100%;
		}
	}

	.findDetails-title {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100rpx;
		font-size: 45rpx;
	}



	.findDetails-day {
		display: flex;
		justify-content: space-between;
		align-items: center;
		font-size: 30rpx;
		color: #C0C0C0;
		padding: 0 40rpx;
		height: 100rpx;

		image {
			width: 26rpx;
			height: 20rpx;
			margin-right: 10rpx;
		}
	}

	.day-right,
	.day-right view {
		display: flex;
		align-items: center;
		justify-content: center;

		view {
			margin: 0 10rpx;
		}
	}

	.findDetails-text {
		padding: 0 40rpx;
		line-height: 70rpx;
		font-size: 35rpx;
		text-indent: 60rpx;
	}

	.findDetails-input {
		display: flex;
		justify-content: space-between;
		align-items: center;
		border-top: 2rpx solid #f1f1f1;
		position: fixed;
		bottom: 0;
		height: 102rpx;
		width: 100%;

		image {
			margin-left: 15rpx;
			width: 46rpx;
			height: 40rpx;
		}
	}

	.input-box {
		margin-left: 40rpx;
		padding-left: 20rpx;
		height: 60rpx;
		border-radius: 30rpx;
		background-color: #f2f2f2;
	}

	.input-img {
		display: flex;
		margin-right: 40rpx;
	}
</style>
