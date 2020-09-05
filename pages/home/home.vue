<template>
	<view class="home">
		<!-- 头部 -->
		<home-header></home-header>
		<!-- 导航 -->
		<home-nav></home-nav>
		<!-- 主体 -->
		<home-main></home-main>

		<wyb-transition :typeList="typeList" :isContentShow="show">
			<!-- 这里放要显示/隐藏的内容 -->
			1326
		</wyb-transition>
	</view>
</template>

<script>
	import wybTransition from '../../components/wyb-transition/wyb-transition.vue'
	import HomeHeader from './components/Header.vue'
	import HomeNav from './components/Nav.vue'
	import HomeMain from './components/Main.vue'
	export default {
		components: {
			HomeHeader,
			HomeNav,
			HomeMain,
			wybTransition
		},
		data() {
			return {
				typeList: ['fade', 'slide-up'],
				show: true
			};
		}
	}
</script>

<style lang="scss">

</style>
