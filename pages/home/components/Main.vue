<template>
	<view class="main">
		<scroll-view :scroll-top="scrollTop" scroll-y="true" class="scroll-Y">
			<view class="main-container" v-for="index in 4">
				<view class="main-container-up">
					<view class="main-container-up_circular"></view>
					<view class="main-container-up_date">2019.10.25</view>
				</view>
				<view class="main-container-bt">
					<view class="main-container-bt-new">
						<view class="main-container-bt-new_text">不知道什么时候开始就特别自恋了</view>
						<view class="main-container-bt-new_imgs">
							<!-- <image src="../../static/home_6.png" mode="$2" v-for="index in  3"></image> -->
							<image src="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-wanghui/1ffce360-de48-11ea-81ea-f115fe74321c.jpg" mode=""></image>
							<image src="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-wanghui/1ffda6b0-de48-11ea-9dfb-6da8e309e0d8.jpg" mode=""></image>
							<image src="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-wanghui/200017b0-de48-11ea-8a36-ebb87efcf8c0.jpg" mode=""></image>
							<image src="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-wanghui/2004ab90-de48-11ea-9dfb-6da8e309e0d8.jpg" mode=""></image>
						</view>
						<view class="main-container-bt-new_fabulous">
							<view>
								<image src="../../../static/home_7.png" mode="$2"></image>3
							</view>
							<view>
								<image src="../../../static/home_7.png" mode="$2"></image>3
							</view>
						</view>
					</view>
				</view>
			</view>
		</scroll-view>
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
	.main {
		background-color: #F5F5F5;
		border-top-left-radius: 30rpx;
		border-top-right-radius: 30rpx;
		margin-top: -33rpx;
		height: calc(100vh - 450rpx);
		position: absolute;
		border-bottom: 33rpx solid #F5F5F5;
	}

	.scroll-Y {
		height: 90%;
		position: relative;
		top: 82rpx;

	}

	.main-container {
		margin: 0 auto;
		margin-left: 70rpx;
		padding-bottom: 25rpx;
		width: 90%;
		border-left: 1rpx solid #dddddd;
	}

	.main-container-up {
		display: flex;
		padding: 20rpx 0;
	}

	.main-container-up_circular {
		width: 20rpx;
		height: 20rpx;
		margin-right: 20rpx;
		margin-left: -20rpx;
		border-radius: 50%;
		border: 10rpx solid #FFFFFF;
		background-color: #FF788C;
	}

	.main-container-up_date {
		padding-left: 20rpx;
	}

	.main-container-bt {
		display: flex;
		width: 85%;
		margin-left: 55rpx;
		padding: 10rpx 0;
		border-radius: 10rpx;
		background-color: #FFFFFF;
	}

	.main-container-bt-new {
		width: 100%;
	}

	.main-container-bt-new image {
		width: 160rpx;
		height: 160rpx;
		margin: 5rpx 2.6%;
		float: left;
	}

	.main-container-bt-new_text {
		padding: 10rpx;
		font-size: 30rpx;
	}

	.main-container-bt-new_fabulous {
		display: flex;
		align-items: center;
		justify-content: flex-end;
		padding-right: 30rpx;
		padding-top: 10rpx;
		clear: both;

		view {
			display: flex;
			align-items: center;
			justify-content: center;
		}

		image {
			margin-right: 10rpx;
			width: 40rpx;
			height: 40rpx;
		}
	}
</style>
