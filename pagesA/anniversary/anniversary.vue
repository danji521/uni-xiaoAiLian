<template>
	<view class="anniversary">
		<!-- 盒子 -->
		<view class="anniversary-box">
			<view class="anniversary-box-title">我们已相爱</view>
			<view class="anniversary-box-days">
				{{user.time}}
				<view> 天</view>
			</view>
			<view class="anniversary-box-img">
				<image :src="user.fuser.logoUrl" mode=""></image>
				<image src="../../static/my_16.png" mode="" class="heart"></image>
				<image :src="user.suser.logoUrl" mode=""></image>
			</view>
			<view class="anniversary-box-date">从2019-8-20至今</view>
		</view>
		<!-- 宝贝生日 -->
		<view class="anniversary-baby baby">
			<view class="anniversary-baby-birthday">
				<view>10</view>
				<view>{{user.fuser.birthday}}</view>
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
				<view>{{user.suser.birthday}}</view>
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
				user: {}
			};
		},
		created() {
			let _this = this;
			uni.getStorage({
				key: 'user',
				success: function(res) {
					_this.user = res.data;
				}
			});
		}
	}
</script>

<style lang="scss">
	.anniversary {
		padding-top: 34rpx;
		height: calc(100vh - 34rpx);
		background-image: linear-gradient(to bottom, #faebd4, #ffabdf);
	}

	.anniversary-box {
		margin: 0 auto;
		margin-bottom: 80rpx;
		width: 530rpx;
		height: 508rpx;
		background-image: url(../../static/anniversary_0.png);
		background-size: 100% 100%;
	}

	.anniversary-box-title {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 44rpx;
		font-size: 40rpx;
		position: relative;
		padding-top: 70rpx;
	}

	.anniversary-box-days {
		display: flex;
		justify-content: center;
		font-size: 160rpx;
		color: #ff6e99;
		position: relative;
		top: 10rpx;

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
		justify-content: space-around;
		align-items: center;
		width: 120rpx;
		margin: 0 auto;
		position: relative;
		top: 20rpx;

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
		top: 45rpx;
		color: #aeaeae;
	}

	// 宝贝生日
	.anniversary-baby {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin: 0 auto;
		margin-bottom: 40rpx;
		width: 692rpx;
		height: 100rpx;
		background-color: #FFFFFF;
		border-radius: 50rpx;
	}

	.anniversary-baby-birthday {
		width: 102rpx;
		height: 102rpx;
		color: #FFFFFF;
		font-size: 20rpx;
		background-color: #ffaa3e;
		border-radius: 50%;

		view {
			display: flex;
			align-items: center;
			justify-content: center;
		}

		:nth-child(1) {
			font-size: 45rpx;
		}
	}

	.my {
		background-color: #a743fd;
	}

	.anniversary-baby-text {
		text-align: left;
		width: 420rpx;
		padding-left: 40rpx;
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
		margin-bottom: 40rpx;
		width: 692rpx;
		height: 100rpx;
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
			width: 54rpx;
			height: 50rpx;
		}
	}

	.anniversary-embrace-right {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 104rpx;
		height: 104rpx;
		border-radius: 50%;
		box-shadow: 0rpx 0rpx 10rpx #e6e6e6;

		image {
			width: 56rpx;
			height: 52rpx;
		}
	}

	.anniversary-embrace-text {
		text-align: left;
		width: 420rpx;
		padding-left: 40rpx;
	}
</style>
