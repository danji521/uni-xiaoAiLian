<template>
	<view class="anniversary">
		<!-- 盒子 -->
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
		<!-- 宝贝生日 -->
		<view class="anniversary-baby baby">
			<view class="anniversary-baby-birthday">
				<view>10</view>
				<view>1994.01</view>
			</view>
			<view class="anniversary-baby-text">宝贝潇潇的生日还有</view>
			<view class="anniversary-baby-days">
				<view>50</view>
				<view>天</view>
			</view>
		</view>
		<!-- 我的生日 -->
		<view class="anniversary-baby">
			<view class="anniversary-baby-birthday my">
				<view>8</view>
				<view>1993.05</view>
			</view>
			<view class="anniversary-baby-text">宝贝潇潇的生日还有</view>
			<view class="anniversary-baby-days">
				<view>50</view>
				<view>天</view>
			</view>
		</view>
		<!-- 第一次拥抱 -->
		<view class="anniversary-embrace">
			<view class="anniversary-embrace-left">
				<image src="../../static/anniversary_3.png" mode=""></image>
			</view>
			<view class="anniversary-embrace-text">我们的第一次拥抱</view>
			<view class="anniversary-embrace-right">
				<image src="../../static/anniversary_5.png" mode=""></image>
			</view>
		</view>
		<!-- 第一次接吻 -->
		<view class="anniversary-embrace">
			<view class="anniversary-embrace-left">
				<image src="../../static/anniversary_4.png" mode=""></image>
			</view>
			<view class="anniversary-embrace-text">我们的第一次拥抱</view>
			<view class="anniversary-embrace-right">
				<image src="../../static/anniversary_5.png" mode=""></image>
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
	.anniversary {
		padding-top: 30rpx;
		height: calc(100vh - 30rpx);
		background-image: linear-gradient(to bottom, #feecd6, #ffa9dc);
	}

	.anniversary-box {
		margin: 0 auto;
		margin-bottom: 90rpx;
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

	// 宝贝生日
	.anniversary-baby {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin: 0 auto;
		margin-top: 40rpx;
		width: 90%;
		height: 104rpx;
		background-color: #FFFFFF;
		border-radius: 50rpx;
	}

	.anniversary-baby-birthday {
		margin-left: -10rpx;
		width: 105rpx;
		height: 105rpx;
		color: #FFFFFF;
		text-align: center;
		font-size: 20rpx;
		background-color: #ffaa3e;
		border-radius: 50%;

		:nth-child(1) {
			font-size: 50rpx;
			height: 60rpx;
			padding-top: 4rpx;
		}
	}

	.my {
		background-color: #a743fd;
	}

	.anniversary-baby-text {
		text-align: left;
		width: 400rpx;
	}

	.anniversary-baby-days {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100rpx;
		height: 100rpx;
		background-color: #FFFFFF;
		border-radius: 50%;
		margin-right: 20rpx;

		:nth-child(1) {
			font-size: 50rpx;
		}

		:nth-child(2) {
			font-size: 35rpx;
		}
	}

	// 第一次
	.anniversary-embrace {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin: 0 auto;
		margin-top: 40rpx;
		width: 90%;
		height: 104rpx;
		background-color: #FFFFFF;
		border-radius: 50rpx;
	}

	.anniversary-embrace-left {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100rpx;
		height: 100rpx;
		border-radius: 50%;

		image {
			width: 50rpx;
			height: 60rpx;
		}
	}

	.anniversary-embrace-right {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100rpx;
		height: 100rpx;
		border-radius: 50%;
		box-shadow: 0rpx 0rpx 10rpx #e6e6e6;

		image {
			width: 50rpx;
			height: 60rpx;
		}
	}

	.anniversary-embrace-text {
		text-align: left;
		width: 400rpx;
	}
</style>
