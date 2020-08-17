<template>
	<view class="login">
		<!-- logo -->
		<view class="logo">
			<image src="../../static/login_1.png" mode=""></image>
			<view>小爱恋</view>
		</view>
		<!-- from信息-->
		<view class="login-from">
			<form @submit="" @reset="">
				<input type="text" value="" placeholder="请输入账号" v-model="user" />
				<input type="password" value="" placeholder="请输入密码" v-model="pwd" />
			</form>
			<view class="login-register">
				<view>忘记密码</view>
				<view>注册账号</view>
			</view>
		</view>
		<!-- 登录 -->
		<view class="login-view" @click="loginBtn">
			登录
		</view>
		<!-- 第三方登录  -->
		<view class="party-login">
			<view class="party-login_border">
				<view>第三方登录</view>
			</view>
			<view class="party-login_img">
				<image src="../../static/login_2.png" mode="$2"></image>
				<image src="../../static/login_3.png" mode="$2"></image>
				<image src="../../static/login_4.png" mode="$2"></image>
			</view>
		</view>
	</view>
</template>

<script>
	import userList from '../../commen/tim/user.js';
	import {
		mapState
	} from "vuex";
	export default {
		data() {
			return {
				user: '',
				data: null,
				pwd: '',

			}
		},
		computed: {
			...mapState({
				isLogin: state => state.isLogin,
				isSDKReady: state => state.isSDKReady
			})
		},
		onShow() {
			this.$store.commit('reset')
		},
		onLoad() {

		},

		methods: {
			loginBtn() {
				if (this.user && this.pwd) { //获取user的userId,实际接口为后端返回（user基础信息+userSig）
					let userInfo = null
					userList.forEach((item) => {
						if (item.user == this.user) {
							userInfo = item
						}
					})
					if (userInfo) { //根据返回的userID 以及 userSig 登录tim
						let promise = this.tim.login({
							userID: userInfo.userId,
							userSig: userInfo.userSig
						});
						promise.then((res) => {
							//登录成功后 更新登录状态
							this.$store.commit("toggleIsLogin", true);
							//自己平台的用户基础信息
							uni.setStorageSync('userInfo', JSON.stringify(userInfo))
							//tim 返回的用户信息
							uni.setStorageSync('userTIMInfo', JSON.stringify(res.data))
							uni.reLaunch({
								url: '/pages/home/home'
							})
						}).catch((err) => {
							console.warn('login error:', err); // 登录失败的相关信息
						});
					} else {
						uni.showToast({
							icon: 'none',
							title: '用户不存在',
							duration: 1500
						});
					}
				} else {
					uni.showToast({
						icon: 'none',
						title: '请将账户密码输入完整',
						duration: 1500
					});
				}
			},


		}
	}
</script>

<style lang="scss">
	.logo {
		padding-top: 128rpx;
		margin-bottom: 70rpx;
		font-size: 50rpx;
		color: #000000;
		text-align: center;

		image {
			margin-bottom: 20rpx;
			width: 150rpx;
			height: 150rpx;
		}
	}

	.login-from {
		input {
			width: 70%;
			margin: 0 auto;
			margin-bottom: 30rpx;
			height: 80rpx;
			border-radius: 50rpx;
			background-color: #f5f5f5;
			padding: 5rpx 35rpx;
		}
	}

	.login-register {
		display: flex;
		justify-content: space-around;
		align-items: center;
	}

	.login-view {
		display: flex;
		justify-content: center;
		align-items: center;
		color: #FFFFFF;
		margin: 0 auto;
		margin-top: 90rpx;
		width: 70%;
		border-radius: 40rpx;
		height: 90rpx;
		background-color: #ff8495;
	}

	.party-login_img {
		display: flex;
		justify-content: center;
		align-items: center;

		image {
			margin: 70rpx 30rpx;
			width: 90rpx;
			height: 90rpx;
		}
	}

	.party-login_border {
		display: flex;
		justify-content: center;
		align-items: center;
		margin: 0 auto;
		width: 70%;
		margin-top: 150rpx;
		border-bottom: 2px solid #F5F5F5;

		view {
			position: relative;
			top: 30rpx;
			padding: 0 30rpx;
			background-color: #FFFFFF;
		}
	}
</style>
