<template>
	<cu-sys>
		<app-nav opacity opacityChange status="light" :back="false" fixed shadow>
			<block slot="left">
				<match-media :max-width="1025">
					<image src="https://image.weilanwl.com/web/u6d68.png" mode="widthFix" style="width: 120px;" class="mx-4" v-if="sys_scrollTop > sys_navBar / 2"></image>
				</match-media>
			</block>
		</app-nav>
		<match-media :max-width="1025"><image src="https://image.weilanwl.com/web/u7viq.png" mode="widthFix" style="width: 100%;"></image></match-media>
		<match-media :min-width="1025">
			<view class="banner-box">
				<view class="banner-content-box">
					<view class="mr-5 pr-5">
						<image src="https://image.weilanwl.com/web/2oxyb.png" mode="widthFix" style="width:200px;height: 47px;"></image>
						<view class="text-light text-lg mt-3 ml-2">专注于视觉,基于UniApp的高质量UI组件库</view>
						<view class="mt-5">
							<navigator class="cu-btn bg-main-a round" url="http://localhost:8080/pages/docment/article/scss">开始使用</navigator>
							<a class="cu-btn border round ml-3" target="_blank" href="https://github.com/weilanwl/ColorUI">
								<text class="cui-github-circle mr-2"></text>
								访问GitHub
							</a>
						</view>
					</view>
					<view class=""><image src="https://image.weilanwl.com/web/n79wa.png" mode="widthFix" style="width:280px;"></image></view>
				</view>
				<image src="https://image.weilanwl.com/web/9cp3f.png" mode="widthFix" class="banner-img-left"></image>
				<image src="https://image.weilanwl.com/web/ypfjn.png" mode="widthFix" class="banner-img-right"></image>
			</view>
		</match-media>

		<view class="cu-container">
			<block v-for="(nav, navindex) in nav" :key="navindex">
				<cu-title :title="nav.title" depth="2" isIcon></cu-title>
				<view class="cu-grid cu-cols-xs-1 cu-cols-sm-2 cu-cols-md-4 cu-cols-lg-5 cu-cols-xl-6">
					<view class="cu-item p-3" v-for="(item, index) in nav.subnav" :key="index" v-if="index > 0"><nav-li :data="item"></nav-li></view>
				</view>
			</block>
		</view>
		<view class="foot">
			
		</view>
		<match-media :max-width="1025"><cu-tabbar :cur="0" shadow></cu-tabbar></match-media>
	</cu-sys>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
export default {
	data() {
		return {
			navlist: []
		};
	},
	computed: {
		...mapState(['nav', 'color'])
	},
	onLoad() {},
	methods: {}
};
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
