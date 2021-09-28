<template>
	<ui-sys title="轮播图">
		<view class="ui-container"><ui-title title="dotStyle='default'" depth="2" isIcon></ui-title></view>
		<ui-swiper :info="swiperList" dotCur="ui-BG-Main"></ui-swiper>

		<view class="ui-container"><ui-title title="dotStyle='long'" depth="2" isIcon></ui-title></view>
		<ui-swiper :info="swiperList" dotStyle="long" dotCur="bg-white"></ui-swiper>
		
		<view class="ui-container"><ui-title title="dotStyle='line'" depth="2" isIcon></ui-title></view>
		<ui-swiper :info="swiperList" dotStyle="line" dotCur="bg-white"></ui-swiper>
		
		<view class="ui-container"><ui-title title="dotStyle='tag'" depth="2" isIcon></ui-title></view>
		<ui-swiper :info="swiperList" dotStyle="tag" dotCur="bg-mask-50"></ui-swiper>

		<view class="ui-container"><ui-title title="mode='card'" depth="2" isIcon></ui-title></view>
		<ui-swiper :info="swiperList" mode="card" dotStyle="long" dotCur="bg-blue" height="380rpx" imgHeight="300rpx"></ui-swiper>

		<view class="ui-container"><ui-title title="mode='hotelCard'" depth="2" isIcon></ui-title></view>
		<ui-swiper :info="swiperList" mode="hotelCard" dotStyle="line" dotCur="bg-white" ></ui-swiper>

		<view class="ui-container"><ui-title title="mode='hotelDetail'" depth="2" isIcon></ui-title></view>
		<ui-swiper :info="swiperList" mode="hotelDetail" dotStyle="line" dotCur="bg-white" height="300rpx" imgHeight="300rpx"></ui-swiper>
	</ui-sys>
</template>

<script>
export default {
	data() {
		return {
			swiperList: [
				{
					img: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big84000.jpg',
					type: 'url'
				},
				{
					img: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big37006.jpg',
					type: 'path'
				},
				{
					img: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big39000.jpg'
				},
				{
					img: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg'
				},
				{
					img: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big25011.jpg'
				},
				{
					img: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big21016.jpg'
				},
				{
					img: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big99008.jpg'
				}
			]
		};
	},
	methods: {}
};
</script>

<style></style>
