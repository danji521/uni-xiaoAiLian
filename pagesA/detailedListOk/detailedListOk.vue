<template>
	<view class="detailedListOk">
		<view class="detailedList-number">已完成(5/160)</view>
		<view class="detailedList-list" v-for="(item,index) in detailedListOk.data" :key='index'>
			<image :src="item.logo" mode=""></image>
			<view class="detailedList-list_text">{{item.text}}</view>
		</view>
	</view>
</template>

<script>
	import http from '../../utile/http.js'
	export default {
		data() {
			return {
				detailedListOk: {}
			};
		},
		created() {
			console.log("123")
			http.getDetailedList({}).then(res => {
				this.detailedListOk = res.result;
				console.log(this.detailedListOk)
			})
		}
	}
</script>

<style lang="scss">
	.detailedListOk {
		display: flow-root;
		padding: 0 30rpx;
		overflow-x: hidden;
		// width: 100%;
		min-height: 100vh;
		background-image: linear-gradient(to bottom, #faebd4, #f6a1d8);
	}

	.detailedList-number {
		padding: 20rpx 0;
	}

	.detailedList-list {
		width: 330rpx;
		height: 330rpx;
		float: left;
		margin: 15rpx 0;
		border-radius: 30rpx;
		margin-left: 15rpx;
		background: rgba(0, 0, 0, 1);

		image {
			width: 334rpx;
			height: 330rpx;
			border-radius: 30rpx;
			opacity: .5;
		}
	}

	.detailedList-list_text {
		width: 250rpx;
		height: 60rpx;
		overflow-x: hidden;
		color: #FFFFFF;
		font-size: 40rpx;
		position: relative;
		top: -200rpx;
		left: 12%;
	}
</style>
