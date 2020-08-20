<template>
	<view class="myLove">
		<view class="follow-list" v-for="index in 5">
			<view class="follow-list-left">
				<image src="../../static/home_6.png" mode=""></image>
				<view class="follow-list-left_name">
					<view class="follow-list-left_nametext1">作者:潇潇</view>
					<view class="follow-list-left_nametext2">关于她</view>
					<view class="follow-list-left_nametext3">坎坎啦啦啦啦坷坷刚刚啦啦啦坷坷刚刚啦啦啦坷坷刚刚啦啦啦坷坷刚刚啦啦啦坷坷刚刚看完了一段韩剧，里面有一个评论是这样说的</view>
				</view>
			</view>
			<view class="follow-list-right">
				<view>
					<image src="../../static/img/q.jpg" mode=""></image>
				</view>
			</view>
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
	.myLove {
		padding: 0 40rpx;
	}

	.follow-list {
		display: flex;
		justify-content: space-between;
		align-items: center;
		height: 180rpx;

		image {
			width: 100rpx;
			height: 100rpx;
			border-radius: 50%;
		}
	}

	.follow-list-left {
		display: flex;
		width: 70%;
	}

	.follow-list-right {
		width: 30%;
		text-align: -webkit-right;
		image {
			display: flex;
			justify-content: center;
			align-items: center;
			width: 180rpx;
			height: 120rpx;
			color: #FFFFFF;
			font-size: 30rpx;
			background-color: #808080;
			border-radius: 10rpx;
		}
	}

	.follow-list-left_name {
		padding-left: 20rpx;
		color: #000000;
		width: 100%;
	}

	.follow-list-left_nametext1 {
		font-size: 25rpx;
		margin-top: 10rpx;
		color: #c5c5c5;
	}

	.follow-list-left_nametext2 {
		font-size: 20rpx;
		margin-top: 10rpx;
		color: #000000;
	}

	.follow-list-left_nametext3 {
		margin-top: 10rpx;
		font-size: 28rpx;
		height: 80rpx;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		line-clamp: 3;
		-webkit-box-orient: vertical;
	}
</style>
