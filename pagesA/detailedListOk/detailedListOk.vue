<template>
	<view class="detailedListOk">
		<view class="detailedList-number">已完成(5/160)</view>
		<view class="detailedList-list" v-for="index in 8">
			<image src="../../static/home_6.png" mode=""></image>
			<view class="detailedList-list_text">一起穿情侣装</view>
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
	.detailedListOk {
		display: flow-root;
		padding: 0 30rpx;
		overflow-x: hidden;
		// width: 100%;
		min-height: 100vh;
		background-image: linear-gradient(to bottom, #faebd4, #f6a1d8);
	}

	.detailedList-number {
		padding: 20rpx 0;
	}

	.detailedList-list {
		width: 330rpx;
		height: 330rpx;
		float: left;
		margin: 15rpx 0;
		border-radius: 30rpx;
		margin-left: 15rpx;
		background: rgba(0, 0, 0, 1);

		image {
			width: 330rpx;
			height: 330rpx;
			border-radius: 30rpx;
			opacity: .5;
		}
	}

	.detailedList-list_text {
		color: #FFFFFF;
		font-size: 40rpx;
		position: relative;
		top: -220rpx;
		left: 35rpx;
	}
</style>
