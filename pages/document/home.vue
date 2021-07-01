<template>
	<ui-sys :img="isPc?'':'https://oss.color-ui.com/img/4put2.png'" tabbar>
		<block  v-if="isPc">
			<view class="banner-box">
				<view class="banner-content-box">
					<view class="mr-5 pr-5">
						<image src="https://oss.color-ui.com//web/2oxyb.png" mode="widthFix" style="width:200px;height: 47px;"></image>
						<view class="text-light text-lg mt-3 ml-2">专注于视觉,基于UniApp的高质量UI组件库</view>
						<view class="mt-5">
							<navigator class="cu-btn bg-main-a round" url="http://localhost:8080/pages/docment/article/scss">开始使用</navigator>
							<a class="cu-btn border round ml-3" target="_blank" href="https://github.com/weilanwl/ColorUI">
								<text class="cui-github-circle mr-2"></text>
								访问GitHub
							</a>
						</view>
					</view>
					<view class=""><image src="https://oss.color-ui.com//web/n79wa.png" mode="widthFix" style="width:280px;"></image></view>
				</view>
				<image src="https://oss.color-ui.com//web/9cp3f.png" mode="widthFix" class="banner-img-left"></image>
				<image src="https://oss.color-ui.com//web/ypfjn.png" mode="widthFix" class="banner-img-right"></image>
			</view>
			<view class="ui-container">
				<block v-for="(nav, navindex) in nav" :key="navindex">
					<ui-title :title="nav.title" depth="2" isIcon class="ml-3"></ui-title>
					<view class="ui-grid ui-cols-5">
						<view class="ui-item p-3" v-for="(item, index) in nav.subnav" :key="index">
							<app-nav-li :data="item"></app-nav-li>
						</view>
					</view>
				</block>
			</view>
		</block>
		<block v-else>
			<ui-navbar :back="false" opacity>
				<view class="flex-bar p-3" v-if="sys_scrollTop > sys_navBar">
					<image src="https://oss.color-ui.com/img/hapm8.png" mode="aspectFill"
						style="width: 200rpx;height: 56rpx;"></image>
				</view>
				<view class="p-3 flex-bar flex-sub" v-if="sys_scrollTop > sys_navBar">
					<view url="/pages/search/search" class="flex-sub flex-bar">
						<view class="p-2 bg-blur-1 w-100 round border flex-center" :style="{height:`35px`}">
							<text class="uicon-search-line mx-2"></text>
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
		</block>
	</ui-sys>
</template>

<script>
	let _this = null;
	export default {
		data() {
			return {
				swiperList: [{
					img: "https://oss.color-ui.com/img/8v2yr.png",
					url:'/pages/article/guide/guide'
				}, {
					img: "https://oss.color-ui.com/img/qhgtb.png"
				}, {
					img: "https://oss.color-ui.com/img/qhgtb.png"
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
