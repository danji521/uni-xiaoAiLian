<template>
	<view class="topicsList">
		<view class="topicsList-list" v-for="index in 6" @click="topicsDetails()">
			<image src="../../static/findDetails_0.png" mode="" class="topicsList-list-img"></image>
			<view class="topicsList-list-text">
				<view>话题.第107期</view>
				<view>喜欢一个人很多年是什么感觉？</view>
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
		methods:{
			topicsDetails(){
				uni.navigateTo({
					url:'/pagesA/topicsDetails/topicsDetails'
				})
			}
		}
	}
</script>

<style lang="scss">
	.topicsList-list {
		padding: 20rpx;
		height: 300rpx;
	}

	.topicsList-list-img {
		height: 100%;
		width: 100%;
		border-radius: 30rpx;
	}

	.topicsList-list-text {
		color: #FFFFFF;
		position: relative;
		bottom: 120rpx;
		left: 30rpx;
	}
</style>
