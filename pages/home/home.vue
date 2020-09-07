<template>
	<view class="home">
		<!-- 头部 -->
		<home-header></home-header>
		<!-- 导航 -->
		<home-nav></home-nav>
		<!-- 主体 -->
		<home-main></home-main>
		<!-- 动画 -->
		<view class="wyb-transition" v-if="show">
			<view>
				<image src="../../static/home_6.png" mode="" @click="addImg(0)" v-if="user.suser.logoUrl==''"></image>
				<image :src="user.suser.logoUrl" mode="" v-else @click="addImg(0)"></image>
				<picker mode="date" :value="date" :start="startDate" :end="endDate" @change="bindDateChangeFL">
					<view class="uni-input">{{dateFL}}</view>
				</picker>
			</view>
			<view>
				<image src="../../static/home_6.png" mode="" @click="addImg(1)" v-if="user.fuser.logoUrl==''"></image>
				<image :src="user.fuser.logoUrl" mode="" v-else @click="addImg(1)"></image>
				<picker mode="date" :value="date" :start="startDate" :end="endDate" @change="bindDateChangeRG">
					<view class="uni-input">{{dateRG}}</view>
				</picker>
			</view>
		</view>
	</view>
</template>

<script>
	import HomeHeader from './components/Header.vue'
	import HomeNav from './components/Nav.vue'
	import HomeMain from './components/Main.vue'
	export default {
		components: {
			HomeHeader,
			HomeNav,
			HomeMain
		},
		data() {
			const currentDate = this.getDate({
				format: true
			})
			return {
				show: true,
				dateFL: currentDate,
				dateRG: currentDate,
				user: {
					suser: {
						name: '小鱼儿',
						birthday: '',
						logoUrl: ''
					},
					fuser: {
						name: '潇潇',
						birthday: '',
						logoUrl: ''
					},
					time: 100,
				}
			};
		},
		computed: {
			startDate() {
				return this.getDate('start');
			},
			endDate() {
				return this.getDate('end');
			}
		},
		created() {

		},
		methods: {
			bindDateChangeFL: function(e) {
				this.dateFL = e.target.value
				this.user.suser.birthday = e.target.value;
				this.setStorage();
			},
			bindDateChangeRG: function(e) {
				this.dateRG = e.target.value
				this.user.fuser.birthday = e.target.value;
				this.setStorage();
			},
			getDate(type) {
				const date = new Date();
				let year = date.getFullYear();
				let month = date.getMonth() + 1;
				let day = date.getDate();

				if (type === 'start') {
					year = year - 60;
				} else if (type === 'end') {
					year = year + 2;
				}
				month = month > 9 ? month : '0' + month;;
				day = day > 9 ? day : '0' + day;
				return `${year}-${month}-${day}`;
			},
			addImg(open) {
				let _this = this;
				//前端代码
				uni.chooseImage({
					count: 9,
					success(res) {
						console.log(res);
						if (res.tempFilePaths.length > 0) {
							for (var i = 0; i < res.tempFilePaths.length; i++) {
								let filePath = res.tempFilePaths[i];
								uniCloud.uploadFile({
									filePath: filePath,
									cloudPath: res.tempFiles[i].name,
									onUploadProgress: function(progressEvent) {
										var percentCompleted = Math.round(
											(progressEvent.loaded * 100) / progressEvent.total
										);
									},
									success(err) {
										console.log(err)
										if (open == 0) {
											_this.user.suser.logoUrl = err.fileID;
										} else {
											_this.user.fuser.logoUrl = err.fileID;
										}
										_this.setStorage();
									},
									fail() {},
									complete() {}
								});
							}
						}
					}
				});
			},
			setStorage() {
				uni.setStorage({
					key: 'user',
					data: this.user,
					success: function() {
						console.log('success');
					}
				});
			}
		}

	}
</script>

<style lang="scss">
	.wyb-transition {
		position: fixed;
		bottom: 100rpx;
		width: 100%;
		height: 260rpx;
		background-color: #EFEFF4;
		border-radius: 20rpx;
		display: flex;
		justify-content: space-around;
		align-items: center;

		view {
			text-align: center;
		}

		image {
			width: 110rpx;
			height: 110rpx;
			border-radius: 50%;
		}
	}
</style>
