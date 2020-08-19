<template>
	<view class="comment">
		<view class="follow-list" v-for="index in 5">
			<view class="follow-list-left">
				<image src="../../static/home_6.png" mode=""></image>
				<view class="follow-list-left_name">
					<view>潇潇</view>
					<view>青春在微笑中如花绽放</view>
					<view>11-2</view>
				</view>
			</view>
			<view class="follow-list-right">
				<view>
					<image src="../../static/img/q.jpg" mode=""></image>
				</view>
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
	.comment {
		padding: 0 40rpx;
	}

	.follow-list {
		display: flex;
		justify-content: space-between;
		align-items: center;
		height: 180rpx;

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
		image {
			display: flex;
			justify-content: center;
			align-items: center;
			width: 180rpx;
			height: 120rpx;
			color: #FFFFFF;
			font-size: 30rpx;
			background-color: #808080;
			border-radius: 10rpx;
		}
	}

	.follow-list-left_name {
		padding-left: 20rpx;
		color: #000000;
	}

	.follow-list-left_name :nth-child(2) {
		font-size: 30rpx;
		margin-top: 10rpx;
	}

	.follow-list-left_name :nth-child(3) {
		font-size: 30rpx;
		margin-top: 10rpx;
		color: #c5c5c5;
	}
</style>
