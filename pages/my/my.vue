<template>
	<view class="my">
		<view class="my-name">
			<view class="my-name-logo">
				<image src="../../static/home_6.png" mode=""></image>
				<view>爱你</view>
			</view>
			<view class="my-name-comment">
				<view class="my-name-comment-li">
					<view>5</view>
					<view>关注</view>
				</view>
				<view class="my-name-comment-li">
					<view>20</view>
					<view>赞</view>
				</view>
				<view class="my-name-comment-li">
					<view>10</view>
					<view>评论</view>
				</view>
			</view>
		</view>
		<view class="my-autograph">
			个性签名
			<view class="">
				时间洗刷万物，唯独愿望除外
			</view>
		</view>
		<view class="my-more">
			<view class="my-more-li">
				<image src="../../static/my_03.png" mode=""></image>
				<view>游戏中心</view>
			</view>
			<view class="my-more-li">
				<image src="../../static/my_05.png" mode=""></image>
				<view>个性装扮</view>

			</view>
			<view class="my-more-li">
				<image src="../../static/my_07.png" mode=""></image>
				<view>每日签到</view>

			</view>
			<view class="my-more-li">
				<image src="../../static/my_09.png" mode=""></image>
				<view>表情商店</view>
			</view>
		</view>
		<view class="my-list">
			<view class="my-list-li">
				<image src="../../static/my_16.png" mode=""></image>我的喜欢
			</view>
			<view class="my-list-li">
				<image src="../../static/my_19.png" mode=""></image>我的问答
			</view>
			<view class="my-list-li">
				<image src="../../static/my_21.png" mode=""></image>设置
			</view>
			<view class="my-list-li">
				<image src="../../static/my_23.png" mode=""></image>关于我们
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
	.my {
		padding: 0 24rpx;
	}

	.my-name {
		display: flex;
		justify-content: space-between;
		align-items: center;
		height: 200rpx;
	}

	.my-name-logo {
		display: flex;
		justify-content: center;

		image {
			width: 110rpx;
			height: 110rpx;
			border-radius: 50%;
			margin-right: 10rpx;
		}
	}

	.my-name-comment {
		display: flex;
		justify-content: space-around;
		align-items: center;
	}

	.my-name-comment-li {
		width: 110rpx;

		view {
			display: flex;
			justify-content: center;
			align-items: center;
		}

		:nth-child(2) {
			color: #9f9f9f;
		}
	}

	.my-autograph {
		display: flex;
		padding-left: 20rpx;
		height: 80rpx;
		font-size: 30rpx;

		view {
			margin-left: 24rpx;
			color: #9f9f9f;
		}
	}

	.my-more {
		display: flex;
		justify-content: space-around;
		align-items: center;
		height: 200rpx;
		font-size: 35rpx;

		image {
			margin-bottom: 28rpx;
			width: 60rpx;
			height: 40rpx;
		}
	}

	.my-more-li {
		text-align: center;
	}

	// 我的喜欢
	.my-list-li {
		display: flex;
		align-items: center;
		height: 100rpx;
		border-bottom: 1rpx solid #f1f1f1;

		image {
			margin-right: 24rpx;
			width: 40rpx;
			height: 40rpx;
		}
	}
</style>
