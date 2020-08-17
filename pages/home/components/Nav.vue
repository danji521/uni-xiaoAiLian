<template>
	<view class="nav">
		<view>
			<image src="../../../static/home_2.png" mode=""></image>
			<view>纪念日</view>
		</view>
		<view>
			<image src="../../../static/home_3.png" mode=""></image>
			<view>陈列馆</view>
		</view>
		<view>
			<image src="../../../static/home_0.png" mode=""></image>
			<view>闹钟</view>
		</view>
		<view>
			<image src="../../../static/home_1.png" mode=""></image>
			<view>清单</view>
		</view>
	</view>
</template>

<script>
</script>

<style lang="scss">
	.nav {
		display: flex;
		-webkit-justify-content: space-around;
		justify-content: space-around;
		-webkit-box-align: center;
		-webkit-align-items: center;
		align-items: center;
		width: 90%;
		height: 150rpx;
		font-size: 33rpx;
		border-radius: 30rpx;
		background-color: #FFFFFF;
		margin: 0 5%;
		margin-top: -126rpx;
		position: absolute;
		z-index: 1;

		view {
			text-align: center;
		}

		image {
			width: 60rpx;
			height: 60rpx;
			margin-bottom: 5rpx;
		}
	}
</style>
