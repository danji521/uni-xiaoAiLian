<template>
	<view class="nav">
		<view>
			<navigator url="/pagesA/anniversary/anniversary">
				<image src="../../../static/home_2.png" mode=""></image>
				<view>纪念日</view>
			</navigator>
		</view>
		<view>
			<navigator url="/pagesA/museum/museum">
				<image src="../../../static/home_3.png" mode=""></image>
				<view>陈列馆</view>
			</navigator>
		</view>
		<view>
			<navigator url="/pagesA/rest/rest">
				<image src="../../../static/home_0.png" mode=""></image>
				<view>闹钟</view>
			</navigator>
		</view>
		<view>
			<navigator url="/pagesA/detailedList/detailedList">
				<image src="../../../static/home_1.png" mode=""></image>
				<view>清单</view>
			</navigator>
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
		height: 164rpx;
		font-size: 30rpx;
		border-radius: 30rpx;
		background-color: #FFFFFF;
		margin: 0 5%;
		margin-top: -115rpx;
		position: absolute;
		z-index: 1;

		view {
			text-align: center;
		}

		image {
			width: 60rpx;
			height: 60rpx;
			margin-bottom: 26rpx;
		}
	}
</style>
