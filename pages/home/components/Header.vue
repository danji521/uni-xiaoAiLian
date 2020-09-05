<template>
	<view class="header">
		<view class="header-up">
			<image :src="user.fuser.logoUrl" mode=""></image>
			<view>我们相爱了</view>
			<image :src="user.suser.logoUrl" mode=""></image>
		</view>
		<view class="header-bt">
			{{user.time}}
			<view>天</view>
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
	.header {
		background-image: linear-gradient(to right, #FEDADE, #FF788C);
		z-index: 1;
		height: 342rpx;

		.header-up {
			display: flex;
			justify-content: center;
			align-items: center;
			padding-top: 60rpx;
			color: #FFFFFF;
			font-size: 46rpx;
		}

		.header-up image {
			width: 88rpx;
			height: 88rpx;
			border-radius: 50%;
			border: 1rpx solid #FFFFFF;
		}

		.header-up view {
			margin: 0 36rpx;
			margin-top: -30rpx;
		}

		.header-bt {
			position: relative;
			top: -20rpx;
			display: flex;
			justify-content: center;
			align-items: center;
			margin: 0 auto;
			height: 80rpx;
			width: 148rpx;
			color: #FF868C;
			font-size: 36rpx;
			font-weight: 600;
			background-image: url(../../../static/home_9.png);
			background-size: 100% 100%;
		}

		.header-bt view {
			font-size: 26rpx;
			margin-top: 10rpx;
		}
	}
</style>
