<template>
	<view class="community">
		<!-- 头 -->
		<header-nav></header-nav>
		<!-- 搜索 -->
		<view class="search">
			<image src="../../static/community_1.png" mode=""></image>
			<input type="text" value="" placeholder="话题/动态" style="width: 80%;" />
		</view>
		<!-- 主体 -->
		<view class="main">
			<swiper class="main-swiper">
				<swiper-item v-for="index in 3">
					<main-swiper></main-swiper>
				</swiper-item>
			</swiper>
		</view>
		<view class="footer" @click="museum()">
			<view class="origin"></view>
			爱情陈列馆
		</view>
	</view>
</template>

<script>
	import HeaderNav from './components/Header.vue'
	import MainSwiper from './components/Main.vue'
	export default {
		components: {
			HeaderNav,
			MainSwiper
		},
		data() {
			return {

			};
		},
		methods: {
			museum() {
				uni.navigateTo({
					url: '/pages/museum/museum'
				})
			}
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
