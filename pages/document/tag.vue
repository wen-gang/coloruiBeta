<template>
	<ui-sys title="标签">
		<view class="ui-container">
			<!-- 简介 -->
			<ui-title title="简介" depth="2" isIcon></ui-title>
			<view class="paragraph">标签组件</view>
			<ui-title title="默认标签" depth="2" isIcon></ui-title>
			<view class="p-4 ui-BG radius border"><ui-tag info="30"></ui-tag></view>
			<ui-code tag="pre" lang="html" title :content="code1"></ui-code>
			
			<ui-title title="标签形状" depth="2" isIcon></ui-title>
			<view class="paragraph"><ui-code>ui="round"</ui-code></view>
			<view class="p-4 ui-BG border">
				<ui-tag ui="" info="春风"></ui-tag>
				<ui-tag ui="round" info="秋日"></ui-tag>
				<!-- <ui-tag ui="border border-grey" bg="bg-none"><text class="text-grey">春风</text></ui-tag>
				<ui-tag ui="round border border-orange" bg="bg-none"><text class="text-orange">秋日</text></ui-tag> -->
			</view>
			
			<ui-title title="标签大小" depth="2" isIcon></ui-title>
			<view class="paragraph"><ui-code>ui="{size}"</ui-code></view>
			<view class="p-4 ui-BG radius border">
				<ui-tag ui="sm" info="sm"></ui-tag>
				<ui-tag ui="" info="df"></ui-tag>
				<ui-tag ui="lg" info="lg"></ui-tag>
				<ui-tag ui="xl" info="xl"></ui-tag>
				<ui-tag ui="xxl" info="xxl"></ui-tag>
			</view>
			<ui-title title="标签带图片" depth="2" isIcon></ui-title>
			<view class="paragraph"><ui-code>src="{src}"</ui-code></view>
			<view class="p-4 ui-BG radius border">
				<ui-tag info="糖果炸弹" src="https://cos.color-ui.com/avatar/lol-avatar/1004.jpg" ></ui-tag>
			</view>
			<ui-code tag="pre" lang="html" title :content="code2"></ui-code>
			
			<ui-title title="标签背景" depth="2" isIcon></ui-title>
			<view class="paragraph"><ui-code>bg="{bg}"</ui-code></view>
			<view class="p-4 ui-BG radius border">
				<ui-tag info="bg-red" bg="bg-red" src="https://cos.color-ui.com/avatar/lol-avatar/1009.jpg" ></ui-tag>
				<ui-tag bg="ui-BG-Main" info="ui-BG-Main"></ui-tag>
				<ui-tag bg="bg-mask-50" info="bg-mask-50"></ui-tag>
				<ui-tag bg="bg-red-gradient" info="bg-red-gradient"></ui-tag>
				<ui-tag bg="bg-red-thin" info="bg-red-thin"></ui-tag>
				<ui-tag bg="bg-red-light" info="bg-red-light"></ui-tag>
			</view>
			<ui-title title="浮动标签" depth="2" isIcon></ui-title>
			<view class="paragraph"><ui-code>badge="{direction: tl(左上) / tr(右上) / bl(左下) / br(右下)}"</ui-code></view>
			
			<view class="blockquote text-sm">
				info置空并且不设置插槽的情况下设置badge,标签默认为小红点
			</view>
			<view class="p-4 ui-grid ui-cols-5">
				<view class="ui-item">
					<ui-avatar ui="radius xl" src="https://cos.color-ui.com/avatar/lol-avatar/1029.jpg"> 
						<ui-tag badge></ui-tag>
					</ui-avatar>
				</view>
				<view class="ui-item">
					<ui-avatar ui="round xl">
						As
						<ui-tag badge bg="bg-blue">vip</ui-tag>
					</ui-avatar>
				</view>
				<view class="ui-item">
					<ui-avatar ui="round xl bg-blue">
						Bf
						<ui-tag badge="br" icon bg="shadow bg-white"><text class="cicon-male text-blue"></text></ui-tag>
					</ui-avatar>
				</view>
				<view class="ui-item">
					<ui-avatar ui="round xl bg-pink">
						Cv
						<ui-tag badge="bl" bg="shadow bg-white"><text class="cicon-female text-pink"></text></ui-tag>
					</ui-avatar>
				</view>
				<view class="ui-item">
					<ui-avatar ui="round xl bg-blue-thin borders border-blue">
						Jx
						<ui-tag badge="tl" ui="borders border-blue shadow-blue" bg="bg-blue-light">user</ui-tag>
					</ui-avatar>
				</view>
			</view>
		</view>
	</ui-sys>
</template>

<script>
export default {
	data() {
		return {
			code1: '<ui-tag info="30"></ui-tag>',
			code2: '<ui-tag info="糖果炸弹" src="https://cos.color-ui.com/avatar/lol-avatar/1004.jpg" ></ui-tag>',
		};
	},
	methods: {}
};
</script>

<style></style>
