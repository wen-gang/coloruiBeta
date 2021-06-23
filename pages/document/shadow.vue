<template>
	<ui-sys title="阴影">
		<view class="p-5 ui-grid ui-cols-4">
			<view class="ui-item p-2"><view class="shadow-sm ui-BG p-4 radius xl">sm</view></view>
			<view class="ui-item p-2"><view class="shadow ui-BG p-4 radius xl">df</view></view>
			<view class="ui-item p-2"><view class="shadow-lg ui-BG p-4 radius xl">lg</view></view>
			<view class="ui-item p-2"><view class="shadow-inset ui-BG p-4 radius xl">inset</view></view>
		</view>
		<view class="px-5">
			<view class="py-2 ui-grid ui-cols-2">
				<view class="ui-item p-2"><view class="shadow-blue shadow-sm radius xl bg-blue-thin p-4">blue-sm</view></view>
				<view class="ui-item p-2"><view class="shadow-blue radius xl bg-blue-thin p-4">blue</view></view>
			</view>
			<view class="py-2 ui-grid ui-cols-2">
				<view class="ui-item p-2"><view class="shadow-red shadow-lg radius xl bg-red p-4">red-lg</view></view>
				<view class="ui-item p-2"><view class="shadow-blur radius xl bg-red-gradient p-4">blur</view></view>
			</view>
		</view>
			<view class="p-5 ui-grid ui-cols-1">
				<view class="ui-item p-2"><view class="shadow-warp ui-BG p-4 radius xl">shadow-warp</view></view>
			</view>
	</ui-sys>
</template>

<script>
export default {
	data() {
		return {};
	},
	methods: {}
};
</script>

<style></style>
