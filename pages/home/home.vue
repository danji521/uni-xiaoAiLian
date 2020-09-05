<template>
	<view class="home">
		<!-- 头部 -->
		<home-header></home-header>
		<!-- 导航 -->
		<home-nav></home-nav>
		<!-- 主体 -->
		<home-main></home-main>


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
			return {
				typeList: ['fade', 'slide-up'],
				show: true
			};
		},
		created() {
			let user = {
				suser: {
					name: '小鱼儿',
					birthday:'1993.05.08',
					logoUrl: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-xiaoailian/d48cb3be-7faa-4ef0-a717-1dda3f36bf5e.jpg'
				},
				fuser: {
					name: '潇潇我',
					birthday:'1993.05.08',
					logoUrl: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-xiaoailian/d48cb3be-7faa-4ef0-a717-1dda3f36bf5e.jpg'
				},
				time: 100,
			}
			uni.setStorage({
				key: 'user',
				data: user,
				success: function() {
					console.log('success');
				}
			});
		}
	}
</script>

<style lang="scss">

</style>
