<template>
	<cu-sys :loading="loading" title="阴影" doc>
		<view class="cu-container">
			<!-- 简介 -->
			<cu-title title="简介" depth="2" isIcon toc></cu-title>
			<view class="paragraph">Css阴影,Class来控制。适用于任何组件元素。部分组件提供独立参数的阴影也是基于这个阴影体系。</view>

			<!-- 尺寸 -->
			<cu-title title="尺寸" depth="2" isIcon toc></cu-title>
			<view class="paragraph">
				添加包含尺寸的Class来控制阴影大小。 短阴影
				<cu-code>.shadow-sm</cu-code>
				。普通阴影
				<cu-code>.shadow</cu-code>
				。长阴影
				<cu-code>.shadow-lg</cu-code>
				。内阴影
				<cu-code>.shadow-inset</cu-code>
			</view>
			<view class="p-4" v-if="demo">
				<view class="p-5 radius shadow-sm box-bg">短阴影</view>
				<view class="p-5 radius shadow box-bg mt-5">普通阴影</view>
				<view class="p-5 radius shadow-lg box-bg mt-5">长阴影</view>
				<view class="p-5 radius shadow-inset box-bg mt-5">内阴影</view>
			</view>
			<cu-code tag="pre" lang="html" :content="code1" v-else></cu-code>

			<!-- 颜色 -->
			<cu-title title="颜色" depth="2" isIcon toc></cu-title>
			<view class="paragraph">
				添加包含颜色名的Class来控制阴影颜色。<cu-code>.shadow-{color}</cu-code>
				<navigator class="text-main-a px-2" url="/pages/docment/navbar/demo?id=2">
					颜色表
					<text class="cui-arrow ml-2"></text>
				</navigator>
			</view>
			<view class="p-4" v-if="demo">
				<view class="p-5 radius shadow-blue bg-blue">蓝色阴影</view>
				<view class="p-5 radius shadow-red bg-red shadow-lg mt-5">红色长阴影</view>
				<view class="p-5 radius main-a-shadow bg-main-a mt-5">主颜色阴影</view>
			</view>
			<cu-code tag="pre" lang="html" :content="code2" v-else></cu-code>

			<!-- 特殊 -->
			<cu-title title="特殊" depth="2" isIcon toc></cu-title>
			<view class="p-4" v-if="demo">
				<view class="p-5 radius shadow-warp box-bg">翘边阴影</view>
				<view class="p-5 radius shadow-blur bg-red bg-img mt-5" style="background-image: url('https://ossweb-img.qq.com/images/lol/web201310/skin/big91005.jpg');">
					<view>根据背景而改变的阴影</view>
				</view>
			</view>
			<cu-code tag="pre" lang="html" :content="code3" v-else></cu-code>
		</view>

		<demo-btn :demo.sync="demo"></demo-btn>
	</cu-sys>
</template>

<script>
let _this = null;
export default {
	data() {
		return {
			loading: true,
			demo: true,
			code1: '<view class="... shadow-sm">短阴影</view> \n<view class="... shadow">普通阴影</view> \n<view class="... shadow-lg">长阴影</view> \n<view class="... shadow-inset">内阴影</view>',
			code2: '<view class="... shadow-blue bg-blue"> \n  蓝色阴影 \n</view> \n<view class="... shadow-red bg-red shadow-lg"> \n  红色长阴影 \n</view> \n<view class="... main-a-shadow bg-main-a"> \n  主颜色阴影 \n</view>',
			code3: '<view class="... shadow-warp">翘边阴影</view> \n<view class="... shadow-blur">\n  根据背景而改变的阴影\n</view>',
			
		};
	},
	onLoad() {
		_this = this;
	},
	onReady() {
		_this.loading = false;
	},
	methods: {}
};
</script>

<style></style>
