<template>
	<ui-sys title="加载">
		<view class="ui-container">
			<!-- 简介 -->
			<ui-title title="简介" depth="2" isIcon></ui-title>
			<view class="paragraph">加载</view>

			<ui-loading></ui-loading>
			<ui-loading color></ui-loading>
			<ui-loading size="sm"></ui-loading>
			<ui-loading size="lg" color="text-blue"></ui-loading>
			<ui-loading size="xl" color="text-green"></ui-loading>
			<ui-loading size="xxl" color="text-green"></ui-loading>
			<ui-loading size="sl"></ui-loading>
			
			<ui-loading img="/static/logo.png"></ui-loading>
			<ui-loading color="text-red" img="/static/logo.png"></ui-loading>
			
			<ui-loading color img="/static/logo.png"></ui-loading>
			<ui-loading color>
				<text class="cicon-GooglePlaylogo text-sl text-red"></text>
			</ui-loading>
			<ui-loading color>
				<text class="text-lg text-blue">ColorUI</text>
			</ui-loading>
			<ui-loading color>
				<view class="ui-avatar xxl ellipse ui-BG "><image src="../../static/logo.png" mode="widthFix"></image></view>
			</ui-loading>
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
