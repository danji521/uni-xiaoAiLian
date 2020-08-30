<template>
	<view class="follow">
		<scroll-view :scroll-top="scrollTop" scroll-y="true" class="scroll-Y">
			<!-- 话题 -->
			<view class="conversation">
				<view class="topic">
					<view>推荐话题</view>
					<view>
						<navigator url="/pagesA/topicsList/topicsList">更多</navigator>
					</view>
				</view>
				<view class="list" v-for="index in 3" @click="topicsDetails()">
					<view>#我和他的昵称由来#</view>
					<view>
						<image src="../../../static/community_2.png" mode=""></image>2955
					</view>
				</view>
			</view>
			<!-- 动态 -->
			<view class="dynamic" v-for="(item,index) in userArry.data" :key='index'>
				<view class="dynamic-top">
					<view>
						<image :src="item.logo" mode="" class="logo"></image>
					</view>
					<view class="dynamic-top-name">
						<view class="dynamic-top-name_gender">{{item.name}}
							<image src="../../../static/community_3.png" mode=""></image>
						</view>
						<view class="dynamic-top-name_days">15分钟前</view>
					</view>
					<view class="dynamic-top-more">
						<image src="../../../static/community_more.png" mode=""></image>
					</view>
				</view>
				<view class="dynamic-text">{{item.text}}</view>
				<view class="dynamic-img">
					<image :src="item" mode="" v-for="(item,index) in item.img"></image>
				</view>
				<view class="dynamic-fabulous">
					<view class="dynamic-fabulous_box">我们的情侣头像</view>
					<view class="dynamic-fabulous_new">
						<image src="../../../static/home_7.png" mode=""></image>{{item.fabulous}}
						<image src="../../../static/home_8.png" mode=""></image>{{item.comment}}
					</view>
				</view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	import http from '../../../utile/http.js'
	export default {
		data() {
			return {
				userArry: {}
			};
		},
		created() {
			this.getCommunityList()
		},
		methods: {
			topicsDetails() {
				uni.navigateTo({
					url: '/pagesA/topicsDetails/topicsDetails'
				})
			},
			getCommunityList() {
				http.getCommunityList({}).then(res => {
					this.userArry = res.result;
					uni.switchTab({
						url: '/pages/community/community'
					});
				})
			}
		}
	}
</script>

<style lang="scss">
	.follow {
		padding-bottom: 40rpx;
		background-color: #f6f6f6;

		.scroll-Y {
			height: calc(100vh - 220rpx);
		}

		// 话题
		.conversation {
			padding: 0 30rpx;
			background-color: #FFFFFF;
			margin-bottom: 24rpx;

			.topic {
				display: flex;
				justify-content: space-between;
				align-items: center;
				height: 75rpx;
			}

			.topic :nth-child(2) {
				color: #f7737e;
			}

			.list {
				display: flex;
				justify-content: space-between;
				align-items: center;
				height: 75rpx;
				font-size: 32rpx;
				color: #f7737e;
			}

			image {
				margin-right: 5rpx;
				width: 18rpx;
				height: 26rpx;
			}

			view {
				display: flex;
				align-items: center;
			}

			.list :nth-child(2) {
				color: #000000;
			}
		}

		// 动态
		.dynamic {
			margin-bottom: 24rpx;
		}

		.dynamic-top {
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding: 0 27rpx;
			background-color: #FFFFFF;

			.logo {
				width: 84rpx;
				height: 84rpx;
				border-radius: 50%;
			}

			.dynamic-top-name {
				width: 100%;
				padding-left: 27rpx;
			}

			.dynamic-top-name image {
				width: 27rpx;
				height: 42rpx;
				margin-left: 18rpx;
			}

			.dynamic-top-name_gender {
				display: flex;
				align-items: center;
			}

			.dynamic-top-name_days {
				color: #b8b8b8;
				font-size: 30rpx;
			}

			.dynamic-top-more image {
				width: 40rpx;
				height: 120rpx;
			}
		}

		.dynamic-text {
			padding: 0 0 20rpx 140rpx;
			background-color: #FFFFFF;
			color: #343434;
		}

		.dynamic-img {
			padding-left: 140rpx;
			padding-right: 110rpx;
			background-color: #FFFFFF;
		}

		.dynamic-img image {
			margin-right: 1%;
			width: 160rpx;
			height: 160rpx;
			border-radius: 10rpx;
		}

		.dynamic-fabulous {
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding-left: 140rpx;
			padding-bottom: 20rpx;
			background-color: #FFFFFF;
		}

		.dynamic-fabulous_box {
			display: flex;
			justify-content: center;
			align-items: center;
			color: #fc8797;
			border: 1rpx solid #fc8797;
			border-radius: 15rpx;
			width: 200rpx;
			height: 50rpx;
			font-size: 24rpx;
		}

		.dynamic-fabulous_new {
			display: flex;
			align-items: center;
			margin-top: 33rpx;
			color: #adadad;
			font-size: 30rpx;
			padding-right: 30rpx;
		}

		.dynamic-fabulous_new image {
			margin-left: 20rpx;
			width: 40rpx;
			height: 40rpx;
		}
	}
</style>
