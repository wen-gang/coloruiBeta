<template>
	<ui-sys title="边框">
		<view class="ui-container">
			<ui-title title="简介" depth="2" isIcon></ui-title>
			<view class="paragraph">Colorui设定了类名来控制边框，部分组件也有对应参数来控制边框，实际上也是通过类名来控制。</view>
			<view class="blockquote">为达到高分屏更细的边框，colorui采用的是伪元素定位的方案。有时候没有显示边框，请检查块的定位以及溢出情况。</view>

			<ui-title title="普通边框" depth="2" isIcon></ui-title>
			<view class="paragraph"><ui-code>.border/.border-{direction}</ui-code></view>
			<view class="ui-BG radius text-center">
				<view class="p-3"><view class="border p-3">四周全边框</view></view>
				<view class="p-3"><view class="border-top p-3">顶部边框</view></view>
				<view class="p-3"><view class="border-right p-3">右边边框</view></view>
				<view class="p-3"><view class="border-bottom p-3">底部边框</view></view>
				<view class="p-3"><view class="border-left p-3">左边边框</view></view>
			</view>

			<ui-title title="粗边框" depth="2" isIcon></ui-title>
			<view class="paragraph"><ui-code>.borders/.borders-{direction}</ui-code></view>
			<view class="ui-BG radius text-center">
				<view class="p-3"><view class="borders p-3">四周全粗边框</view></view>
				<view class="p-3"><view class="borders-top p-3">顶部粗边框</view></view>
				<view class="p-3"><view class="borders-right p-3">右边粗边框</view></view>
				<view class="p-3"><view class="borders-bottom p-3">底部粗边框</view></view>
				<view class="p-3"><view class="borders-left p-3">左边粗边框</view></view>
			</view>
			
			<ui-title title="虚线边框" depth="2" isIcon></ui-title>
			<view class="paragraph"><ui-code>.dashed/.dashed-{direction}</ui-code><ui-code>.dasheds/.dasheds-{direction}</ui-code></view>
			<view class="ui-BG radius text-center">
				<view class="p-3"><view class="dashed p-3">四周全虚线边框</view></view>
				<view class="p-3"><view class="dashed-top p-3">顶部虚线边框</view></view>
				<view class="p-3"><view class="dashed-right p-3">右边虚线边框</view></view>
				<view class="p-3"><view class="dashed-bottom p-3">底部虚线边框</view></view>
				<view class="p-3"><view class="dashed-left p-3">左边虚线边框</view></view>

				<view class="p-3"><view class="dasheds p-3">四周全粗虚线边框</view></view>
				<view class="p-3"><view class="dasheds-top p-3">顶部粗虚线边框</view></view>
				<view class="p-3"><view class="dasheds-right p-3">右边粗虚线边框</view></view>
				<view class="p-3"><view class="dasheds-bottom p-3">底部粗虚线边框</view></view>
				<view class="p-3"><view class="dasheds-left p-3">左边粗虚线边框</view></view>
			</view>

			<ui-title title="边框颜色" depth="2" isIcon></ui-title>
			<view class="paragraph"><ui-code>.border.border-{color}</ui-code><ui-code>.borders.border-{color}</ui-code><ui-code>.dashed.border-{color}</ui-code><ui-code>.dasheds.border-{color}</ui-code></view>
			<view class="ui-BG radius text-center">
				<view class="p-3"><view class="border border-red p-3">红色边框</view></view>
				<view class="p-3"><view class="borders border-blue p-3">蓝色边框</view></view>
				<view class="p-3"><view class="dasheds border-orange p-3">橙色虚线边框</view></view>
				<view class="p-3"><view class="borders main-a-border p-3">主颜色边框</view></view>
			</view>

			<ui-title title="动感边框" depth="2" isIcon></ui-title>
			<view class="paragraph"><ui-code>.{border}-shine</ui-code><ui-code>.dasheds-shine</ui-code><ui-code>.dashed-shine.border-blue</ui-code></view>
			<view class="ui-BG radius text-center">
				<view class="p-3"><view class="dasheds-shine p-3">粗虚线边框动画</view></view>
				<view class="p-3"><view class="dashed-shine border-blue p-3">蓝色虚线边框动画</view></view>
			</view>
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
