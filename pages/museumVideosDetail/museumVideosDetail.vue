<template>
	<view class="page">
		<swiper class="swiper" :circular="circular" :vertical="true" @change="onSwiperChange">
			<swiper-item v-for="item in videoList" :key="item.id">
				<video class="video" :id="item.id" :ref="item.id" :src="item.src" :controls="false" :loop="true"
				 :show-center-play-btn="false"></video>
			</swiper-item>
		</swiper>
	</view>
</template>
<script>
	const videoData = [{
			src: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-xiaoailian/8b11ab50-e16c-11ea-b997-9918a5dda011.mp4'
		},
		{
			src: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-xiaoailian/8b1f8e00-e16c-11ea-8ff1-d5dcf8779628.mp4'
		},
		{
			src: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-xiaoailian/8ac14160-e16c-11ea-81ea-f115fe74321c.mp4'
		},
		{
			src: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-xiaoailian/8b0c7b30-e16c-11ea-81ea-f115fe74321c.mp4'
		},
		{
			src: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-xiaoailian/8b22c250-e16c-11ea-8bd0-2998ac5bbf7e.mp4'
		},
		{
			src: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-xiaoailian/8abf1e80-e16c-11ea-b680-7980c8a877b8.mp4'
		},
		{
			src: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-xiaoailian/8b0d8ca0-e16c-11ea-9dfb-6da8e309e0d8.mp4'
		},
		{
			src: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-xiaoailian/8b172990-e16c-11ea-9dfb-6da8e309e0d8.mp4'
		},
		{
			src: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-xiaoailian/8b01ccd0-e16c-11ea-8ff1-d5dcf8779628.mp4'
		},
		{
			src: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-xiaoailian/8aca6920-e16c-11ea-8bd0-2998ac5bbf7e.mp4'
		},
		{
			src: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-xiaoailian/8b077220-e16c-11ea-b997-9918a5dda011.mp4'
		},
		{
			src: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-xiaoailian/8b09e320-e16c-11ea-81ea-f115fe74321c.mp4'
		},
		{
			src: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-xiaoailian/8aca9030-e16c-11ea-b244-a9f5e5565f30.mp4'
		},
		{
			src: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-xiaoailian/8a98d1d0-e16c-11ea-8a36-ebb87efcf8c0.mp4'
		},
		{
			src: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-xiaoailian/8ab07880-e16c-11ea-b244-a9f5e5565f30.mp4'
		},
		{
			src: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-xiaoailian/8ac2ef10-e16c-11ea-8a36-ebb87efcf8c0.mp4'
		},
		{
			src: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-xiaoailian/8ac957b0-e16c-11ea-8a36-ebb87efcf8c0.mp4'
		},
		{
			src: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-xiaoailian/8aa702a0-e16c-11ea-b680-7980c8a877b8.mp4'
		},
		{
			src: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-xiaoailian/8aaef1e0-e16c-11ea-b680-7980c8a877b8.mp4'
		},
		{
			src: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-xiaoailian/8aba6390-e16c-11ea-b680-7980c8a877b8.mp4'
		}
	];

	export default {
		data() {
			return {
				circular: true,
				videoList: [{
						id: "video0",
						src: "",
						img: ""
					},
					{
						id: "video1",
						src: "",
						img: ""
					},
					{
						id: "video2",
						src: "",
						img: ""
					}
				],
				videoDataList: []
			}
		},
		onLoad(e) {},
		onReady() {
			this.init();
			this.getData();
		},
		methods: {
			init() {
				this._videoIndex = 0;
				this._videoContextList = [];
				for (var i = 0; i < this.videoList.length; i++) {
					this._videoContextList.push(uni.createVideoContext('video' + i, this));
				}
				this._videoDataIndex = 0;
			},
			getData(e) {
				this.videoDataList = videoData;
				setTimeout(() => {
					this.updateVideo(true);
				}, 200)
			},
			onSwiperChange(e) {
				let currentIndex = e.detail.current;
				if (currentIndex === this._videoIndex) {
					return;
				}

				let isNext = false;
				if (currentIndex === 0 && this._videoIndex === this.videoList.length - 1) {
					isNext = true;
				} else if (currentIndex === this.videoList.length - 1 && this._videoIndex === 0) {
					isNext = false;
				} else if (currentIndex > this._videoIndex) {
					isNext = true;
				}

				if (isNext) {
					this._videoDataIndex++;
				} else {
					this._videoDataIndex--;
				}

				if (this._videoDataIndex < 0) {
					this._videoDataIndex = this.videoDataList.length - 1;
				} else if (this._videoDataIndex >= this.videoDataList.length) {
					this._videoDataIndex = 0;
				}

				this.circular = (this._videoDataIndex != 0);

				if (this._videoIndex >= 0) {
					this._videoContextList[this._videoIndex].pause();
					this._videoContextList[this._videoIndex].seek(0);
				}

				this._videoIndex = currentIndex;

				setTimeout(() => {
					this.updateVideo(isNext);
				}, 200);
			},
			getNextIndex(isNext) {
				let index = this._videoIndex + (isNext ? 1 : -1);
				if (index < 0) {
					return this.videoList.length - 1;
				} else if (index >= this.videoList.length) {
					return 0;
				}
				return index;
			},
			getNextDataIndex(isNext) {
				let index = this._videoDataIndex + (isNext ? 1 : -1);
				if (index < 0) {
					return this.videoDataList.length - 1;
				} else if (index >= this.videoDataList.length) {
					return 0;
				}
				return index;
			},
			updateVideo(isNext) {
				this.$set(this.videoList[this._videoIndex], 'src', this.videoDataList[this._videoDataIndex].src);
				this.$set(this.videoList[this.getNextIndex(isNext)], 'src', this.videoDataList[this.getNextDataIndex(isNext)].src);
				setTimeout(() => {
					this._videoContextList[this._videoIndex].play();
				}, 200);
				console.log("v:" + this._videoIndex + " d:" + this._videoDataIndex + "; next v:" + this.getNextIndex(
					isNext) + " next d:" + this.getNextDataIndex(isNext));
			}
		}
	}
</script>

<style>
	/* #ifndef APP-PLUS */
	page {
		width: 100%;
		min-height: 100%;
		display: flex;
	}

	/* #endif */

	.page {
		flex: 1;
		width: 750rpx;
		height: 100%;
	}

	.swiper {
		flex: 1;
		height: 100vh;
		background-color: #007AFF;
	}

	.swiper-item {
		flex: 1;

	}

	.video {
		flex: 1;
		/* #ifndef APP-PLUS */
		width: 100%;
		height: 100%;
		/* #endif */
	}
</style>
