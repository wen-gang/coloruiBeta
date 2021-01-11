<template>
	<cu-sys :loading="loading" title="按钮" doc>
		<view class="cu-container">
		<cu-title depth="2" title="默认" isIcon toc></cu-title>
		<view class="p-3 flex-between">
			<cu-btn>按钮</cu-btn>
			<button class="cu-btn">按钮</button>
		</view>
		<cu-title depth="2" title="颜色" isIcon toc></cu-title>
		<view class="p-3 flex-between">
			<cu-btn bg="bg-orange">按钮</cu-btn>
			<cu-btn bg="bg-orange-gradient-s">按钮</cu-btn>
			<cu-btn bg="bg-orange-gradient">按钮</cu-btn>
			<cu-btn bg="bg-orange-light">按钮</cu-btn>
		</view>
		<view class="p-3 flex-between">
			<cu-btn bg="bg-blue">按钮</cu-btn>
			<cu-btn bg="bg-blue-gradient-s">按钮</cu-btn>
			<cu-btn bg="bg-blue-gradient">按钮</cu-btn>
			<cu-btn bg="bg-blue-light">按钮</cu-btn>
		</view>
		<view class="p-3 flex-between">
			<cu-btn bg="bg-green">按钮</cu-btn>
			<cu-btn bg="bg-green-gradient-s">按钮</cu-btn>
			<cu-btn bg="bg-green-gradient">按钮</cu-btn>
			<cu-btn bg="bg-green-light">按钮</cu-btn>
		</view>
		<cu-title depth="2" title="尺寸" isIcon toc></cu-title>
		<view class="p-3 flex-between">
			<cu-btn size="sm">按钮</cu-btn>
			<cu-btn size="df">按钮</cu-btn>
			<cu-btn size="lg">按钮</cu-btn>
			<cu-btn size="xl">按钮</cu-btn>
		</view>
		<cu-title depth="2" title="形状" isIcon toc></cu-title>
		<view class="p-3 flex-between">
			<cu-btn>按钮</cu-btn>
			<cu-btn radius>按钮</cu-btn>
			<cu-btn round>按钮</cu-btn>
			<cu-btn icon><text class="cui-LinkDisabled"></text></cu-btn>
		</view>
		<view class="p-3">
			<cu-btn block>按钮</cu-btn>
		</view>
		<cu-title depth="2" title="阴影" isIcon toc></cu-title>
		<view class="p-5">
			<cu-btn block radius shadow='sm'>按钮</cu-btn>
		</view>
		<view class="p-5">
			<cu-btn block radius shadow>按钮</cu-btn>
		</view>
		<view class="p-5">
			<cu-btn block radius shadow='lg'>按钮</cu-btn>
		</view>
		<cu-title depth="2" title="边框" isIcon toc></cu-title>
		<view class="p-3 flex-between">
			<cu-btn border="sm" bg="bg-orange">按钮</cu-btn>
			<cu-btn border="sm" bg="bg-orange-gradient-s">按钮</cu-btn>
			<cu-btn border="sm" bg="bg-orange-gradient">按钮</cu-btn>
			<cu-btn border="sm" bg="bg-orange-light">按钮</cu-btn>
		</view>
		<view class="p-3 flex-between">
			<cu-btn border bg="bg-blue">按钮</cu-btn>
			<cu-btn border bg="bg-blue-gradient-s">按钮</cu-btn>
			<cu-btn border bg="bg-blue-gradient">按钮</cu-btn>
			<cu-btn border bg="bg-blue-light">按钮</cu-btn>
		</view>
		<view class="p-3 flex-between">
			<cu-btn border="lg" bg="bg-green">按钮</cu-btn>
			<cu-btn border="lg" bg="bg-green-gradient-s">按钮</cu-btn>
			<cu-btn border="lg" bg="bg-green-gradient">按钮</cu-btn>
			<cu-btn border="lg" bg="bg-green-light">按钮</cu-btn>
		</view>
		
		<view class="p-3 flex-between">
			<cu-btn radius border="sm" bg="bg-none">按钮</cu-btn>
			<cu-btn radius border="sm" bg="bg-none">按钮</cu-btn>
			<cu-btn radius border="sm" bg="bg-none">按钮</cu-btn>
			<cu-btn radius border="sm" bg="bg-none">按钮</cu-btn>
		</view>
		<view class="p-3 flex-between">
			<cu-btn radius border bg="bg-blue">按钮</cu-btn>
			<cu-btn radius border bg="bg-blue-gradient-s">按钮</cu-btn>
			<cu-btn radius border bg="bg-blue-gradient">按钮</cu-btn>
			<cu-btn radius border bg="bg-blue-light">按钮</cu-btn>
		</view>
		<view class="p-3 flex-between">
			<cu-btn round shadow border="sm" bg="bg-none" text="text-green">按钮</cu-btn>
			<cu-btn round shadow="sm" border bg="bg-none" text="text-blue">按钮</cu-btn>
			<cu-btn round shadow="lg" border="lg" bg="bg-none" text="text-yellow">按钮</cu-btn>
			<cu-btn radius shadow="sm" border="lg" bg="bg-none" text="text-pink">按钮</cu-btn>
		</view>
		<view class="p-3 flex-between">
			<cu-btn icon border="sm" bg="bg-none" text="text-blue"><text class="cui-LinkDisabled"></text></cu-btn>
			<cu-btn icon size="lg" border bg="bg-none" text="text-green"><text class="cui-LinkDisabled"></text></cu-btn>
			<cu-btn icon size="xl" border="lg" bg="bg-none" text="text-yellow"><text class="cui-LinkDisabled"></text></cu-btn>
		</view>
		
		<cu-title depth="2" title="无效" isIcon toc></cu-title>
		<view class="p-3 flex-between">
			<cu-btn disabled border="sm" bg="bg-orange">按钮</cu-btn>
			<cu-btn disabled border="sm" bg="bg-orange-gradient-s">按钮</cu-btn>
			<cu-btn disabled border="sm" bg="bg-orange-gradient">按钮</cu-btn>
			<cu-btn disabled border="sm" bg="bg-orange-light">按钮</cu-btn>
		</view>
		<view class="p-3 flex-between">
			<cu-btn disabled border bg="bg-blue">按钮</cu-btn>
			<cu-btn disabled border bg="bg-blue-gradient-s">按钮</cu-btn>
			<cu-btn disabled border bg="bg-blue-gradient">按钮</cu-btn>
			<cu-btn disabled border bg="bg-blue-light">按钮</cu-btn>
		</view>
		<view class="p-3 flex-between">
			<cu-btn disabled border="lg" bg="bg-green">按钮</cu-btn>
			<cu-btn disabled border="lg" bg="bg-green-gradient-s">按钮</cu-btn>
			<cu-btn disabled border="lg" bg="bg-green-gradient">按钮</cu-btn>
			<cu-btn disabled border="lg" bg="bg-green-light">按钮</cu-btn>
		</view>
		
		<view class="p-3 flex-between">
			<cu-btn disabled radius border="sm" bg="bg-none">按钮</cu-btn>
			<cu-btn disabled radius border="sm" bg="bg-none">按钮</cu-btn>
			<cu-btn disabled radius border="sm" bg="bg-none">按钮</cu-btn>
			<cu-btn disabled radius border="sm" bg="bg-none">按钮</cu-btn>
		</view>
		<view class="p-3 flex-between">
			<cu-btn disabled radius border bg="bg-blue">按钮</cu-btn>
			<cu-btn disabled radius border bg="bg-blue-gradient-s">按钮</cu-btn>
			<cu-btn disabled radius border bg="bg-blue-gradient">按钮</cu-btn>
			<cu-btn disabled radius border bg="bg-blue-light">按钮</cu-btn>
		</view>
		<view class="p-3 flex-between">
			<cu-btn disabled round border="lg" bg="bg-green">按钮</cu-btn>
			<cu-btn disabled round border="lg" bg="bg-green-gradient-s">按钮</cu-btn>
			<cu-btn disabled round border="lg" bg="bg-green-gradient">按钮</cu-btn>
			<cu-btn disabled round border="lg" bg="bg-green-light">按钮</cu-btn>
		</view>
		
		<cu-title depth="2" title="加载" isIcon toc></cu-title>
		<view class="p-3">
			<cu-btn block loading>按钮</cu-btn>
		</view>
		<cu-title depth="2" title="填充无样式" isIcon toc></cu-title>
		<view class="cu-list menu">
			<view class="cu-item arrow">
				<view class="content">
					<text class="cuIcon-btn text-green"></text>
					<text class="text-grey">按钮</text>
				</view>
				<button class="cu-btn none-style"></button>
			</view>
		</view>
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
