<template>
	<view class="museum">

		<view class="museum-love">
			<view class="title">
				<view>恋爱的那些事</view>
				<navigator url="/pagesA/topicsList/topicsList">
					<view>更多</view>
				</navigator>
			</view>
			<navigator url="/pagesA/topicsDetails/topicsDetails">
				<image src="../../static/img/q.jpg" mode=""></image>
			</navigator>
			<view class="museum-love-text">我不相信永远的爱恋 我只</view>
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
		<navigator url="/pagesA/addMuseum/addMuseum">
			<view class="museum-add">
				发布
			</view>
		</navigator>
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
		padding: 0 35rpx;

		.title {
			display: flex;
			justify-content: space-between;
			align-items: center;
			font-size: 35rpx;
			color: #333333;
			padding-left: 10rpx;
			margin: 45rpx 0;
			height: 35rpx;
			border-radius: 3rpx;
			border-left: 9rpx solid #ff6c98;
		}

		.title :nth-child(2) {
			color: #bababa;

		}
	}

	.museum-love {
		image {
			width: 100%;
			height: 264rpx;
			border-radius: 30rpx;
		}
	}

	.museum-love-text {
		position: absolute;
		margin-top: -90rpx;
		color: #FFFFFF;
		font-size: 40rpx;
		margin-left: 10%;
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
			height: 205rpx;
		}
	}

	.museum-video {
		padding-top: 1rpx;
		clear: both;
	}

	#myVideo {
		width: 100%;
		height: 260rpx;
		border-radius: 10rpx;
		margin-bottom: 20rpx;
	}

	.museum-add {
		position: fixed;
		bottom: 120rpx;
		z-index: 100 !important;
		right: 40rpx;
		display: flex;
		justify-content: center;
		align-items: center;
		width: 120rpx;
		height: 120rpx;
		border-radius: 50%;
		border: 1rpx solid red;
		color: #FFFFFF;
		background: rgba(255, 0, 0, 1);
	}
</style>
