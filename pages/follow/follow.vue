<template>
	<view class="follow">
		<view class="follow-list" v-for="index in 5">
			<view class="follow-list-left">
				<image src="../../static/home_6.png" mode=""></image>
				<view class="follow-list-left_name">
					<view>潇潇</view>
					<view>关注了你</view>
				</view>
			</view>
			<view class="follow-list-right">
				<view>相互关注</view>
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
	.follow {
		padding: 0 40rpx;
	}

	.follow-list {
		display: flex;
		justify-content: space-between;
		align-items: center;
		height: 160rpx;

		image {
			width: 100rpx;
			height: 100rpx;
			border-radius: 50%;
		}
	}

	.follow-list-left {
		display: flex;
	}

	.follow-list-right {
		view {
			display: flex;
			justify-content: center;
			align-items: center;
			width: 150rpx;
			height: 60rpx;
			color: #FFFFFF;
			font-size: 30rpx;
			background-color: #808080;
			border-radius: 50rpx;
		}
	}

	.follow-list-left_name {
		padding-left: 20rpx;
	}

	.follow-list-left_name :nth-child(2) {
		font-size: 30rpx;
		margin-top: 10rpx;
	}
</style>
