<template>
	<view class="main">
		<scroll-view scroll-y="true" class="scroll-Y">
			<view class="main-container" v-for="(item,index) in userArry.data" :key='index'>
				<view class="main-container-up">
					<view class="main-container-up_circular"></view>
					<view class="main-container-up_date">2019.10.25</view>
				</view>
				<view class="main-container-bt">
					<view class="main-container-bt-new">
						<view class="main-container-bt-new_text">{{item.text}}</view>
						<view class="main-container-bt-new_imgs">
							<image :src="item" mode="$2" v-for="(item,index) in  item.img" :key="index"></image>
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
			getCommunityList() {
				http.getCommunityList({}).then(res => {
					this.userArry = res.result;
					console.log(this.userArry)
				})
			}
		}
	}
</script>

<style lang="scss">
	.main {
		background-color: #F5F5F5;
		border-top-left-radius: 30rpx;
		border-top-right-radius: 30rpx;
		margin-top: -22rpx;
		height: calc(100vh - 370rpx);
		width: 100%;
		position: absolute;
		border-bottom: 48rpx solid #F5F5F5;
	}

	.scroll-Y {
		height: 90%;
		position: relative;
		top: 120rpx;

	}

	.main-container {
		margin: 0 auto;
		margin-left: 100rpx;
		padding-bottom: 64rpx;
		width: 85%;
		border-left: 1rpx solid #dddddd;
	}

	.main-container-up {
		display: flex;
		padding: 10rpx 0;
	}

	.main-container-up_circular {
		width: 16rpx;
		height: 16rpx;
		margin-right: 20rpx;
		margin-left: -20rpx;
		border-radius: 50%;
		border: 10rpx solid #FFFFFF;
		background-color: #FF788C;
	}

	.main-container-up_date {
		padding-left: 18rpx;
		color: #dadada;
	}

	.main-container-bt {
		display: flex;
		width: 85%;
		margin-left: 50rpx;
		padding: 16rpx 0 0 0;
		border-radius: 10rpx;
		background-color: #FFFFFF;
		padding-left: 14rpx;
	}

	.main-container-bt-new {
		width: 100%;
	}

	.main-container-bt-new image {
		width: 154rpx;
		height: 154rpx;
		border-radius: 10rpx;
		margin: 18rpx 2%;
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
		padding-top: 10rpx;
		clear: both;
		color: #dadada;
		font-size: 30rpx;

		view {
			display: flex;
			align-items: center;
			justify-content: center;
			margin-right: 30rpx;
		}

		image {

			width: 26rpx;
			height: 26rpx;
		}
	}
</style>
