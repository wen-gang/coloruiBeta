<template>
	<ui-sys title="阴影">
		<view class="ui-container">
			<ui-title title="简介" depth="2" isIcon></ui-title>
			<view class="paragraph">Colorui设定了类名来控制阴影，部分组件也有对应参数来控制阴影，实际上也是通过类名来控制。可以通过组合类名来表达多样性。</view>

			<ui-title title="阴影尺寸" depth="2" isIcon></ui-title>
			<view class="paragraph"><ui-code>.shadow/.shadow-{size}</ui-code></view>
			<view class="ui-grid ui-cols-2 opacity">
				<view class="ui-item px-3"><view class="shadow-sm ui-BG p-4 radius xl">sm</view></view>
				<view class="ui-item px-3"><view class="shadow ui-BG p-4 radius xl">df</view></view>
				<view class="ui-item px-3 mt-4"><view class="shadow-lg ui-BG p-4 radius xl">lg</view></view>
				<view class="ui-item px-3 mt-4"><view class="shadow-inset ui-BG p-4 radius xl">inset</view></view>
			</view>

			<ui-title title="有色阴影" depth="2" isIcon></ui-title>
			<view class="paragraph"><ui-code>.shadow-{color}</ui-code></view>
			<view class="py-2 ui-grid ui-cols-4">
				<view class="ui-item px-3"><view class="shadow-blue radius xl bg-blue p-4">blue</view></view>
				<view class="ui-item px-3"><view class="shadow-green radius xl bg-green p-4">green</view></view>
				<view class="ui-item px-3"><view class="shadow-orange radius xl bg-orange p-4">orange</view></view>
				<view class="ui-item px-3"><view class="shadow-red radius xl bg-red p-4">red</view></view>
			</view>

			<ui-title title="根据背景模糊的阴影" depth="2" isIcon></ui-title>
			<view class="paragraph"><ui-code>.shadow-blur</ui-code></view>
			<view class="ui-item px-3"><view class="shadow-blur radius xl bg-red-gradient p-4">blur</view></view>
			<ui-title title="翘边阴影" depth="2" isIcon></ui-title>
			<view class="paragraph"><ui-code>.shadow-warp</ui-code></view>
			<view class="px-3"><view class="shadow-warp ui-BG p-4 radius xl">shadow-warp</view></view>
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
