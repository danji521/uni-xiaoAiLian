<template>
	<view class="anniversary">
		<view class="anniversary-box">
			<view class="anniversary-box-title">我们已相爱</view>
			<view class="anniversary-box-days">
				100 <view> 天</view>
			</view>
			<view class="anniversary-box-img">
				<image src="../../static/home_6.png" mode=""></image>
				<image src="../../static/my_16.png" mode="" class="heart"></image>
				<image src="../../static/home_5.png" mode=""></image>
			</view>
			<view class="anniversary-box-date">从2019-8-20至今</view>
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
	.anniversary {
		height: 100vh;
		background-image: linear-gradient(to bottom, #feecd6, #ffa9dc);
	}

	.anniversary-box {
		position: relative;
		top: 30rpx;
		margin: 0 auto;
		width: 532rpx;
		height: 510rpx;
		background-image: url(../../static/anniversary_0.png);
		background-size: 100% 100%;
	}

	.anniversary-box-title {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 200rpx;
		font-size: 45rpx;
	}

	.anniversary-box-days {
		display: flex;
		justify-content: center;
		font-size: 170rpx;
		color: #ff6e99;
		position: relative;
		top: -80rpx;

		view {
			position: relative;
			top: 110rpx;
			left: 10rpx;
			font-size: 50rpx;
			color: #000000;
		}
	}

	.anniversary-box-img {
		display: flex;
		justify-content: center;
		align-items: center;
		position: relative;
		top: -80rpx;

		image {
			width: 50rpx;
			height: 50rpx;
			border-radius: 50%;
		}

		.heart {
			position: absolute;
			margin-top: 50rpx;
			width: 30rpx;
			height: 30rpx;
			border-radius: 50%;
			z-index: 1;
		}
	}

	.anniversary-box-date {
		display: flex;
		justify-content: center;
		align-items: center;
		position: relative;
		top: -60rpx;
		color: #aeaeae;
	}
</style>
