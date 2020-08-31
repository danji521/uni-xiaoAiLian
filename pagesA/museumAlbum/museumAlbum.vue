<template>
	<view class="museumAlbum">
		<view class="title">
			<view>相册</view>
			<view></view>
		</view>
		<view class="museum-album-list" v-for="(item,index) in album.data" :key="index">
			<image :src="item.imgArry[0]" mode=""></image>
			<view class="museum-album-list_number">
				<view>{{item.name}}</view>
				<view>({{item.imgArry.length}})</view>
			</view>
		</view>
	</view>
</template>

<script>
	import http from '../../utile/http.js'
	export default {
		data() {
			return {
				album: {}
			};
		},
		created() {
			this.getMuseumImgList();
		},
		methods: {
			museumVideosDetail() {
				uni.navigateTo({
					url: '/pages/museumVideosDetail/museumVideosDetail'
				})
			},
			getMuseumImgList() {
				http.getMuseumImgList({}).then(err => {
					console.log(err.result)
					this.album = err.result;
				})
			}
		}

	}
</script>

<style lang="scss">
	.museumAlbum {
		padding: 0 20rpx;

		.title {
			display: flex;
			justify-content: space-between;
			align-items: center;
			font-size: 35rpx;
			padding-left: 10rpx;
			margin: 20rpx 0;
			border-left: 9rpx solid #ff6c98;
		}

		.title :nth-child(2) {
			color: #bababa;
		}
	}

	.museum-album-list {
		margin: 10rpx 0;
		margin-right: 3.33333333%;
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
</style>
