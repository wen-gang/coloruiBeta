<template>
	<ui-sys title="图片">
		<view class="ui-container">
			<!-- 简介 -->
			<ui-title title="简介" depth="2" isIcon></ui-title>
			<view class="paragraph">图片</view>
			<ui-menu ui="radius border mt-4">
				<ui-menu-item icon="cicon-equalizer" title="参数" arrow @click.native="_to('/pages/parameter/parameter?component=ui-img')"></ui-menu-item>
			</ui-menu>
			<ui-menu ui="radius border mt-4">
				<ui-menu-item icon="cicon-pic" title="壁纸" @click.native="_to('/pages/demo/wallpaper')"></ui-menu-item>
			</ui-menu>
		</view>
	</ui-sys>
</template>

<script>
let _this = null;
export default {
	data() {
		return {
			loading: true
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
