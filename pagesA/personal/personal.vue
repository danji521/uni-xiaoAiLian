<template>
	<view class="personal">
		<view class="personal-list">
			<view class="text1">头像</view>
			<view class="text2">
				<image src="../../static/home_6.png" mode=""></image>
			</view>
		</view>
		<view class="personal-list">
			<view class="text1">名称</view>
			<view class="text2">猪猪</view>
		</view>
		<view class="personal-list">
			<view class="text1">星座</view>
			<view class="text2">摩羯座</view>
		</view>
		<view class="personal-list">
			<view class="text1">性别</view>
			<view class="text2">女</view>
		</view>
		<view class="personal-list">
			<view class="text1">简介</view>
			<view class="text2">时间洗刷一切，维度愿望除外</view>
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
	.personal {
		padding: 0 40rpx;
	}

	.personal-list {
		display: flex;
		justify-content: space-between;
		align-items: center;
		height: 120rpx;
		image {
			width: 100rpx;
			height: 100rpx;
			border-radius: 50%;
		}
	}


	.personal-list :nth-child(1) {
		color: #000000;
	}

	.personal-list :nth-child(2) {
		color: #C0C0C0;
	}
</style>
