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

			};
		}
	}
</script>

<style lang="scss">

</style>
