<template>
	<view>
		<view class="find-swiper-img">
			<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
				<swiper-item>
					<image src="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-wanghui/1ffce360-de48-11ea-81ea-f115fe74321c.jpg" mode=""></image>
				</swiper-item>
				<swiper-item>
					<image src="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-wanghui/1ffda6b0-de48-11ea-9dfb-6da8e309e0d8.jpg" mode=""></image>
				</swiper-item>
				<swiper-item>
					<image src="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-wanghui/200017b0-de48-11ea-8a36-ebb87efcf8c0.jpg" mode=""></image>
				</swiper-item>
				<swiper-item>
					<image src="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-wanghui/2004ab90-de48-11ea-9dfb-6da8e309e0d8.jpg" mode=""></image>
				</swiper-item>
			</swiper>
		</view>
		<view class="find-nav">
			<view class="active">脱单攻略</view>
			<view>解忧书店</view>
			<view>甜蜜话术</view>
			<view>每日糖分</view>
		</view>
		<view class="find-swiper-list">
			<!-- <swiper>
				<swiper-item v-for='index in 4'>
					<scroll-view scroll-y="true" class="scroll-Y"> -->
			<view class="find-swiper-list-li" v-for="index in 10">
				<view class="find-swiper-list-li-left">
					<image src="../../static/home_5.png" mode=""></image>
				</view>
				<view class="find-swiper-list-li-right">
					<view class="find-swiper-list-li-right_text">要多接触女生，扩大接触面，因为当你有了对比。。。</view>
					<view class="find-swiper-list-li-right_day">
						<view class="find-swiper-list-li-right_day_time">2019/11/02</view>
						<view class="find-swiper-list-li-right_day_browse">
							<image src="../../static/tabBar/tab-fi1.png" mode=""></image>
							163
						</view>
					</view>
				</view>
			</view>
			<!-- 	</scroll-view>
				</swiper-item>
			</swiper> -->
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
	.find-swiper-img,
	.find-swiper-img swiper {
		margin: 15rpx 0;
		width: 100%;
		height: 200rpx;

		image {
			margin: 0 8%;
			width: 82%;
			height: 100%;
			border-radius: 10rpx;
		}
	}

	.find-nav {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0 50rpx;
		margin: 50rpx 0;
		view {
			display: flex;
			justify-content: center;
			align-items: center;
			width: 20%;
			height: 70rpx;
			font-size: 30rpx;
			color: #666666;
			border-radius: 20rpx;
			background-color: #C0C0C0;
		}
	}

	.find-swiper-list,
	.find-swiper-list swiper {
		height: calc(100vh - 610rpx);
	}

	.scroll-Y {
		width: 100%;
		height: 100%;
	}


	.find-swiper-list-li {
		display: flex;
		padding: 0 50rpx;
		margin: 15rpx 0;
	}

	.find-swiper-list-li-left {
		image {
			width: 250rpx;
			height: 180rpx;
			border-radius: 20rpx;
		}
	}

	.find-swiper-list-li-right {
		padding: 0 30rpx;
	}

	.find-swiper-list-li-right_text {
		font-size: 50rpx;
		height: 130rpx;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		line-clamp: 3;
		-webkit-box-orient: vertical;
	}

	.find-swiper-list-li-right_day {
		display: flex;
		justify-content: space-between;
		align-items: center;
		font-size: 20rpx;
		color: #999999;
		height: 90rpx;
	}

	.find-swiper-list-li-right_day_browse {
		display: flex;
		justify-content: center;
		align-items: center;

		image {
			width: 40rpx;
			height: 20rpx;
		}
	}
</style>
