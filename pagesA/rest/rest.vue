<template>
	<view class="rest">
		<!-- 睡觉打卡 -->
		<view class="sleep" v-if="rest==0">
			<view class="sleep-time">17:38</view>
			<view class="sleep-date">11月12日 星期二</view>
			<view class="sleep-lovers">
				<image src="../../static/home_5.png" mode=""></image>
				<image src="../../static/home_7.png" mode="" class="active"></image>
				<image src="../../static/home_6.png" mode=""></image>
			</view>
			<view class="sleep-clock-in" @click="rests()">睡觉打卡</view>
			<view class="sleep-wake">叫醒他</view>
		</view>
		<!-- 起床打卡 -->
		<view class="sleep getup" v-else>
			<view class="sleep-time">17:38</view>
			<view class="sleep-date">11月12日 星期二</view>
			<view class="sleep-lovers">
				<image src="../../static/home_5.png" mode=""></image>
				<image src="../../static/rest_2.png" mode="" class="active"></image>
				<image src="../../static/home_6.png" mode=""></image>
			</view>
			<view class="sleep-clock-in getupbox" @click="rests()">起床打卡</view>
			<view class="sleep-wake">叫醒他</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				rest: 1
			};
		},
		methods: {
			rests() {
				if (this.rest == 0) {
					this.rest = 1;
				} else {
					this.rest = 0;
				}
			}
		}
	}
</script>

<style lang="scss">
	.sleep {
		text-align: center;
		width: 100%;
		height: 100vh;
		background-image: url(../../static/rest_1.png);
		background-size: 100% 100%;
	}

	.getup {
		background-image: url(../../static/rest_0.png);
	}

	.sleep-time {
		position: relative;
		top: 220rpx;
		font-size: 140rpx;
	}

	.sleep-date {
		position: relative;
		top: 220rpx;
	}

	.sleep-lovers {
		position: relative;
		top: 336rpx;

		image {
			width: 80rpx;
			height: 80rpx;
			border-radius: 50%;
		}

		.active {
			width: 50rpx;
			height: 50rpx;
			border-radius: 50%;
		}
	}

	.sleep-clock-in {
		display: flex;
		justify-content: center;
		align-items: center;
		color: #FFFFFF;
		margin: 0 auto;
		width: 490rpx;
		height: 90rpx;
		border-radius: 50rpx;
		background-color: #ffb434;
		position: relative;
		top: 400rpx;
	}

	.getupbox {
		background-color: #33a0ff;
	}

	.sleep-wake {
		display: flex;
		justify-content: center;
		align-items: center;
		color: #FFFFFF;
		margin: 0 auto;
		width: 490rpx;
		height: 90rpx;
		border-radius: 50rpx;
		background-color: #c1c1c1;
		position: relative;
		top: 450rpx;
	}
</style>
