<!-- <view class="topics"> -->
<template>
	<view class="topics">
		<view class="nav">
			<image src="../../static/findDetails_0.png" mode=""></image>
		</view>
		<view class="title">
			3个脱单秘籍，要不要这么简单
		</view>

		<view class="text">
			情人节其实很多单身的男女一样情人节其实很多单身的男女一
			样情人节其情人节其实很多单身的男女一样情人节其实很多单身
			的男女一样情人节其情人节其实很多单身的男女一样情人节其实很
			多单身的男女一样情人节其实很多单身的男女一样情人节其实很多单
			身的男女一样
		</view>
		<view class="bnt">
			+添加讨论
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
		height: 160rpx;
		font-size: 50rpx;
	}

	.text {
		padding: 0 20rpx;
		color: #999999;
	}


	.bnt {
		display: flex;
		justify-content: center;
		align-items: center;
		position: fixed;
		right: 0;
		bottom: 160rpx;
		color: #FFFFFF;
		width: 200rpx;
		height: 100rpx;
		border-top-left-radius: 50rpx;
		border-bottom-left-radius: 50rpx;
		background-image: linear-gradient(to right, #ff82ba, #ffb1c4);
	}
</style>
