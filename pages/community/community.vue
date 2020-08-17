<template>
	<view class="community">
		<!-- 头 -->
		<HomeHeader></HomeHeader>
		<!-- 搜索 -->
		<view class="search">
			<image src="../../static/community_1.png" mode=""></image>
			<input type="text" value="" placeholder="话题/动态" style="width: 80%;" />
		</view>
		<!-- 主体 -->
		<view class="main">
			<swiper class="main-swiper">
				<swiper-item>
					<main-recommend></main-recommend>
				</swiper-item>
				<swiper-item>
					<main-follow></main-follow>
				</swiper-item>
				<swiper-item>
					<main-fresh></main-fresh>
				</swiper-item>
			</swiper>
		</view>
		<view class="footer">
			<view class="origin"></view>
			爱情陈列馆
		</view>
	</view>
</template>

<script>
	import HomeHeader from './components/Header.vue'
	import MainRecommend from './components/MainRecommend.vue'
	import MainFollow from './components/MainFollow.vue'
	import MainFresh from './components/MainFresh.vue'
	export default {
		components: {
			HomeHeader,
			MainRecommend,
			MainFollow,
			MainFresh
		},
		data() {
			return {

			};
		}

	}
</script>

<style lang="scss">
	.community {
		background-color: #f6f6f6;
	}

	.search {
		display: flex;
		align-items: center;
		margin: 20rpx;
		height: 64rpx;
		wdith: 100%;
		background-color: #FFFFFF;
		border-radius: 40rpx;

		image {
			margin: 0 20rpx;
			width: 54rpx;
			height: 54rpx;
			border-radius: 40rpx;
		}
	}

	.main-swiper {
		height: calc(100vh - 230rpx);
	}

	.footer {
		position: fixed;
		right: 0;
		bottom: 90rpx;
		display: flex;
		justify-content: center;
		align-items: center;
		width: 210rpx;
		height: 66rpx;
		color: #FFFFFF;
		font-size: 35rpx;
		border-top-left-radius: 26rpx;
		border-bottom-left-radius: 26rpx;
		background-image: linear-gradient(to right, #FF788C, #FEDADE);

		.origin {
			margin-right: 10rpx;
			width: 20rpx;
			height: 20rpx;
			background-color: #ffffff;
			border-radius: 50%;
		}
	}
</style>
