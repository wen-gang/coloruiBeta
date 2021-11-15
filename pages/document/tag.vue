<template>
	<ui-sys title="标签">
		<view class="ui-container">
			<!-- 简介 -->
			<ui-title title="简介" depth="2" isIcon></ui-title>
			<view class="paragraph">标签</view>
			<ui-title title="默认标签" depth="2" isIcon></ui-title>
			<view class="p-4"><view class="ui-tag">30</view></view>
			<ui-title title="标签大小" depth="2" isIcon></ui-title>
			<view class="p-4">
				<view class="ui-tag img sm">sm</view>
				<view class="ui-tag img">df</view>
				<view class="ui-tag img lg">lg</view>
				<view class="ui-tag img xl">xl</view>
				<view class="ui-tag img xxl">xxl</view>
				<view class="ui-tag img sl">sl</view>
			</view>
			<ui-title title="标签带图片" depth="2" isIcon></ui-title>
			<view class="p-4">
				<view class="ui-tag img lg">
					<image src="https://cos.color-ui.com/avatar/lol-avatar/1004.jpg" mode="aspectFill" class="tag-img"></image>
					lg
				</view>
				<view class="ui-tag img xl">
					<image src="https://cos.color-ui.com/avatar/lol-avatar/1025.jpg" mode="aspectFill" class="tag-img"></image>
					xl
				</view>
				<view class="ui-tag img xxl">
					<image src="https://cos.color-ui.com/avatar/lol-avatar/1026.jpg" mode="aspectFill" class="tag-img"></image>
					xxl
				</view>
				<view class="ui-tag img sl">
					<image src="https://cos.color-ui.com/avatar/lol-avatar/1008.jpg" mode="aspectFill" class="tag-img"></image>
					sl
				</view>
			</view>
			<ui-title title="标签背景" depth="2" isIcon></ui-title>
			<view class="p-4">
				<view class="ui-tag bg-red img">
					<image src="https://cos.color-ui.com/avatar/lol-avatar/1009.jpg" mode="aspectFill" class="tag-img"></image>
					bg-red
				</view>
				<view class="ui-tag ui-BG-Main">ui-BG-Main</view>
				<view class="ui-tag bg-mask-50"><text>bg-mask-50</text></view>
				<view class="ui-tag bg-red-gradient">bg-red-gradient</view>
				<view class="ui-tag bg-red-thin">bg-red-thin</view>
				<view class="ui-tag bg-red-light">bg-red-light</view>
			</view>
			<ui-title title="浮动标签" depth="2" isIcon></ui-title>
			<view class="p-4 ui-grid ui-cols-5">
				<view class="ui-item">
					<ui-avatar ui="radius xl" src="https://cos.color-ui.com/avatar/lol-avatar/1029.jpg"> 
						<view class="ui-tag badge">3</view>
					</ui-avatar>
				</view>
				<view class="ui-item">
					<ui-avatar ui="round xl">
						As
						<view class="ui-tag badge bg-blue">vip</view>
					</ui-avatar>
				</view>
				<view class="ui-item">
					<ui-avatar ui="round xl bg-blue">
						Bf
						<view class="ui-tag shadow badge badge-br bg-white"><text class="cicon-male text-blue"></text></view>
					</ui-avatar>
				</view>
				<view class="ui-item">
					<ui-avatar ui="round xl bg-pink">
						Cv
						<view class="ui-tag shadow badge badge-bl bg-white"><text class="cicon-female text-pink"></text></view>
					</ui-avatar>
				</view>
				<view class="ui-item">
					<ui-avatar ui="round xl bg-blue-thin borders border-blue">
						Jx
						<view class="ui-tag badge badge-tl bg-blue-light borders border-blue shadow-blue">user</view>
					</ui-avatar>
				</view>
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
