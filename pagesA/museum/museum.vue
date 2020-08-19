<template>
	<view class="museum">
		<view class="museum-love">
			<view class="title">
				<view>恋爱的那些事</view>
				<view>更多</view>
			</view>
			<image src="../../static/img/q.jpg" mode=""></image>
		</view>
		<view class="museum-album">
			<view class="title">
				<view>相册</view>
				<view @click="museumAlbum()">更多</view>
			</view>
			<view class="museum-album-list" v-for="index in 6">
				<image src="../../static/home_6.png" mode=""></image>
				<view class="museum-album-list_number">
					<view>普吉岛之旅</view>
					<view>(18)</view>
				</view>
			</view>
		</view>
		<view class="museum-video">
			<view class="title">
				<view>视频</view>
				<view @click="video()">更多</view>
			</view>
			<view>
				<video id="myVideo" src="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-xiaoailian/2fee5540-e160-11ea-8bd0-2998ac5bbf7e.mp4"
				 @error="videoErrorCallback" :danmu-list="danmuList" enable-danmu danmu-btn controls></video>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			};
		},
		methods: {
			museumAlbum() {
				uni.navigateTo({
					url: '/pagesA/museumAlbum/museumAlbum'
				})
			},
			video() {
				uni.navigateTo({
					url: '/pagesA/museumVideo/museumVideo'
				})
			}
		}
	}
</script>

<style lang="scss">
	.museum {
		padding: 0 20rpx;

		.title {
			display: flex;
			justify-content: space-between;
			align-items: center;
			font-size: 35rpx;

			padding-left: 10rpx;
			margin: 30rpx 0;
			border-left: 9rpx solid #ff6c98;
		}

		.title :nth-child(2) {
			color: #bababa;

		}
	}

	.museum-love {
		image {
			width: 100%;
			height: 300rpx;
			border-radius: 20rpx;
		}
	}

	.museum-album-list {
		margin: 10rpx 0;
		margin-right: 3%;
		width: 30%;
		float: left;
		font-size: 30rpx;
		color: #7e7e7e;

		.museum-album-list_number {
			display: flex;
			justify-content: space-between;
			align-items: center;
		}

		image {
			width: 100%;
			height: 200rpx;
		}
	}

	#myVideo {
		width: 100%;
		height: 260rpx;
		border-radius: 10rpx;
	}
</style>
