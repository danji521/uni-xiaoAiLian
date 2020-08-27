<template>
	<view class="findDetails">
		<view class="nav">
			<image src="../../static/findDetails_0.png" mode=""></image>
		</view>
		<view class="title">
			3个脱单秘籍，要不要这么简单
		</view>
		<view class="day">
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
		<view class="text">
			情人节其实很多单身的男女一样情人节其实很多单身的男女一
			样情人节其情人节其实很多单身的男女一样情人节其实很多单身
			的男女一样情人节其情人节其实很多单身的男女一样情人节其实很
			多单身的男女一样情人节其实很多单身的男女一样情人节其实很多单
			身的男女一样
		</view>
		<view class="input">
			<view class="input-box"><input type="text" value="" placeholder='写点啥'></view>
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
	.nav {
		width: 100%;
		height: 360rpx;

		image {
			width: 100%;
			height: 100%;
		}
	}

	.title {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 80rpx;
		font-size: 50rpx;
	}

	.text {
		padding: 0 20rpx;
	}

	.day {
		display: flex;
		justify-content: space-between;
		align-items: center;
		font-size: 30rpx;
		color: #C0C0C0;
		padding: 0 20rpx;
		height: 100rpx;

		image {
			width: 60rpx;
			height: 50rpx;
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

	.input {
		display: flex;
		justify-content: space-between;
		align-items: center;
		border-top: 2rpx solid #999999;
		padding: 0 20rpx;
		position: fixed;
		bottom: 0;
		height: 120rpx;

		image {
			margin: 0 20rpx;
			width: 60rpx;
			height: 60rpx;
		}
	}

	.input-box {
		padding-left: 20rpx;
		height: 60rpx;
		border-radius: 30rpx;
		background-color: #C0C0C0;
	}

	.input-img {
		display: flex;
	}
</style>
