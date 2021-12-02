<template>
	<ui-sys img="https://cos.color-ui.com/img/4put2.png" tabbar>
			<ui-navbar :back="false" opacity>
				<view class="flex-bar p-3" v-if="sys_scrollTop > sys_navBar">
					<image src="https://cos.color-ui.com/img/hapm8.png" mode="aspectFill"
						style="width: 200rpx;height: 56rpx;"></image>
				</view>
				<view class="p-3 flex-bar flex-sub" v-if="sys_scrollTop > sys_navBar">
					<view url="/pages/search/search" class="flex-sub flex-bar">
						<view class="p-2 bg-blur-1 w-100 round border flex-center" :style="{height:`35px`}">
							<text class="cicon-search-line mx-2"></text>
							<view class="text-c text-sm">
								键入类名搜索释义
							</view>
						</view>
					</view>
				</view>
				<view class="flex-bar">
					<!-- #ifdef MP -->
					<view :style="{width:`${sys_capsule.width + 10}px`,height:`${sys_capsule.height}px`}"> </view>
					<!-- #endif -->
				</view>
			</ui-navbar>			
			<ui-swiper :info="swiperList" height="48vw" dotStyle="line" dotCur="ui-BG-Main"></ui-swiper>
			<view class="ui-container">
				<block v-for="(nav, navindex) in nav" :key="navindex">
					<ui-title :title="nav.title" depth="2" isIcon class="ml-3"></ui-title>
					<view class="ui-grid ui-cols-2">
						<view class="ui-item p-3" v-for="(item, index) in nav.subnav" :key="index">
							<app-nav-li :data="item"></app-nav-li>
						</view>
					</view>
				</block>
			</view>
	</ui-sys>
</template>

<script>
	let _this = null;
	export default {
		data() {
			return {
				swiperList: [{
					img: "https://cos.color-ui.com/img/8v2yr.png",
					url:'/pages/article/guide/guide'
				}, {
					img: "https://cos.color-ui.com/img/qhgtb.png"
				}, {
					img: "https://cos.color-ui.com/img/qhgtb.png"
				}],

			}
		},
		computed: {
			nav() {
				return this.$store.getters.getNav;
			}
		},
		onLoad() {
			_this = this;
		},
		methods: {}
	}
</script>

<style lang="scss">
.banner-box {
	position: relative;
	height: 450px;
	width: 100%;
	.banner-content-box {
		display: flex;
		justify-content: center;
		align-items: center;
		max-width: 1400px;
		width: 100%;
		margin: auto;
		padding-top: 100px;
		padding-left: 70px;
	}

	.banner-img-left,
	.banner-img-right {
		position: absolute;
		top: 0;
		width: 80%;
		min-width: 1600px;
		left: 0;
		pointer-events: none;
	}
	.banner-img-right {
		left: auto;
		right: 0;
	}
}
</style>
