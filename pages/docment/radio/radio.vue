<template>
	<cu-sys :loading="loading" title="单选框" doc>
		<view class="cu-container">
			<!-- 简介 -->
			<cu-title title="简介" depth="2" isIcon toc></cu-title>
			<view class="paragraph">单选框</view>
		</view>
	</cu-sys>
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
