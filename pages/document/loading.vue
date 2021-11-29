<template>
	<ui-sys title="加载">
		<view class="ui-container">
			<!-- 简介 -->
			<ui-title title="默认的加载" depth="1" isIcon></ui-title>
			<ui-title title="默认的加载" depth="2" isIcon></ui-title>
			<ui-title title="默认的加载" depth="3" isIcon></ui-title>
			<view class="paragraph">提供一些局部或者全局的加载样式。</view>

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
				<ui-avatar ui="xxl ellipse ui-BG " src="../../static/logo.png"></ui-avatar>
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
