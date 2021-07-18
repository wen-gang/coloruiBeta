<template>
	<ui-sys title="复选框">
		<view class="ui-container">
			<!-- 简介 -->
			<ui-title title="简介" depth="2" isIcon></ui-title>
			<view class="paragraph">复选框</view>
		</view>
		<ui-title title="基础用法" depth="2" isIcon ui="mx-4"></ui-title>
		<view class="p-4">值: {{ radio }}</view>
		<ui-form ui="ui-BG">
			<ui-form-group title="单选框" contentui="justify-end">
				<!-- <ui-checkbox v-model="checkbox" label="1">选项1</ui-checkbox>
				<ui-checkbox v-model="checkbox" label="2">选项2</ui-checkbox>
				<ui-checkbox v-model="checkbox" label="3">选项3</ui-checkbox> -->
			</ui-form-group>
		</ui-form>
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
