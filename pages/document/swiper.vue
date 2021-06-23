<template>
	<ui-sys title="轮播图">
		<ui-swiper :info="swiperList" dotStyle="line" dotCur="ui-BG-Main"> </ui-swiper>
		<ui-swiper :info="swiperList" dotStyle="tag" dotCur="bg-mask-50"> </ui-swiper>
	</ui-sys>
</template>

<script>
	export default {
		data() {
			return {
				swiperList: [{
					img: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big84000.jpg',
					type:'url',
				}, {
					img: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big37006.jpg',
					type:'path'
				}, {
					img: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big39000.jpg'
				}, {
					img: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg'
				}, {
					img: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big25011.jpg'
				}, {
					img: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big21016.jpg'
				}, {
					img: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big99008.jpg'
				}],
			}
		},
		methods: {

		}
	}
</script>

<style>

</style>
