<template>
	<ui-sys title="头像">
		<view class="ui-container">
			<!-- 简介 -->
			<ui-title title="简介" depth="2" isIcon></ui-title>
			<view class="paragraph">头像组件,可以适配文字,图片以及图标。</view>
			<ui-title title="形状" depth="2" isIcon></ui-title>
			<view class="paragraph">
				<ui-code>radius,round,ellipse</ui-code>
				提供圆角,圆形,和超椭圆形状。
			</view>
			<view class="">
				<ui-avatar ui="radius"></ui-avatar>
				<ui-avatar ui="round"></ui-avatar>
				<ui-avatar ui="ellipse"></ui-avatar>
			</view>
			<ui-title title="大小" depth="2" isIcon></ui-title>
			<view class="">
				<ui-avatar ui="ellipse sm">sm</ui-avatar>
				<ui-avatar ui="ellipse ">df</ui-avatar>
				<ui-avatar ui="ellipse lg">lg</ui-avatar>
				<ui-avatar ui="ellipse xl">xl</ui-avatar>
				<ui-avatar ui="ellipse xxl">xxl</ui-avatar>
				<ui-avatar ui="ellipse sl">sl</ui-avatar>
			</view>
			<ui-title title="背景" depth="2" isIcon></ui-title>
			<view class="">
				<ui-avatar ui="ellipse" bg="bg-orange">Wg</ui-avatar>
				<ui-avatar ui="ellipse" bg="bg-red">Wxm</ui-avatar>
				<ui-avatar ui="ellipse" bg="bg-blue-thin">李</ui-avatar>
				<ui-avatar ui="ellipse" bg="bg-orange-light">Dg</ui-avatar>
				<ui-avatar ui="ellipse" bg="bg-orange-gradient">W</ui-avatar>
				<ui-avatar ui="ellipse" bg="bg-blue-red">Zz</ui-avatar>
			</view>

			<ui-title title="图像" depth="2" isIcon></ui-title>
			<view class="">
				<ui-avatar ui="radius" src="https://cos.color-ui.com/avatar/lol-avatar/1032.jpg"></ui-avatar>
				<ui-avatar ui="round" src="https://cos.color-ui.com/avatar/lol-avatar/1035.jpg"></ui-avatar>
				<ui-avatar ui="ellipse" src="https://cos.color-ui.com/avatar/lol-avatar/1040.jpg"></ui-avatar>
			</view>
			<ui-title title="图标" depth="2" isIcon></ui-title>
			<view class="">
				<ui-avatar ui="radius" icon="cicon-android"></ui-avatar>
				<ui-avatar ui="round" icon="cicon-link"></ui-avatar>
				<ui-avatar ui="ellipse" icon="cicon-apple text-white" src="https://cos.color-ui.com/avatar/lol-avatar/1070.jpg"></ui-avatar>
			</view>
			<ui-title title="角标" depth="2" isIcon></ui-title>
			<view class="p-4 ui-grid ui-cols-5">
				<view class="ui-item">
					<ui-avatar ui="radius xl" src="https://cos.color-ui.com/avatar/lol-avatar/1029.jpg"> 
						<ui-tag badge>3</ui-tag>
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
						<ui-tag badge="br" bg="shadow bg-white"><text class="cicon-male text-blue"></text></ui-tag>
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

			<ui-title title="多头像层叠" depth="2" isIcon></ui-title>
			<view class="p-5 flex align-center">
				<ui-avatar-stack>
					<ui-avatar ui="round xl" src="https://cos.color-ui.com/avatar/lol-avatar/1032.jpg"></ui-avatar>
					<ui-avatar ui="round xl" src="https://cos.color-ui.com/avatar/lol-avatar/1035.jpg"></ui-avatar>
					<ui-avatar ui="round xl" src="https://cos.color-ui.com/avatar/lol-avatar/1040.jpg"></ui-avatar>
				</ui-avatar-stack> 
			</view>

			<view class="p-5 flex align-center">
				<ui-avatar-stack reverse>
					<ui-avatar ui="round xl" bg="ui-BG-2" src="https://cos.color-ui.com/avatar/lol-avatar/1032.jpg"></ui-avatar>
					<ui-avatar ui="round xl" bg="ui-BG-2" src="https://cos.color-ui.com/avatar/lol-avatar/1035.jpg"></ui-avatar>
					<ui-avatar ui="round xl" bg="ui-BG-2" src="https://cos.color-ui.com/avatar/lol-avatar/1040.jpg"></ui-avatar>
				</ui-avatar-stack>
			</view>

			<ui-title title="头像组" depth="2" isIcon></ui-title>
			<view class="p-3 flex align-center">
				<ui-avatar ui="sl" :srcs="['https://cos.color-ui.com/avatar/lol-avatar/1032.jpg']"></ui-avatar>
				<ui-avatar ui="sl" :srcs="['https://cos.color-ui.com/avatar/lol-avatar/1032.jpg', 'https://cos.color-ui.com/avatar/lol-avatar/1033.jpg']"></ui-avatar>
				<ui-avatar
					ui="sl"
					:srcs="[
						'https://cos.color-ui.com/avatar/lol-avatar/1032.jpg',
						'https://cos.color-ui.com/avatar/lol-avatar/1033.jpg',
						'https://cos.color-ui.com/avatar/lol-avatar/1035.jpg'
					]"
				></ui-avatar>
				<ui-avatar
					ui="sl"
					:srcs="[
						'https://cos.color-ui.com/avatar/lol-avatar/1032.jpg',
						'https://cos.color-ui.com/avatar/lol-avatar/1033.jpg',
						'https://cos.color-ui.com/avatar/lol-avatar/1036.jpg',
						'https://cos.color-ui.com/avatar/lol-avatar/1043.jpg'
					]"
				></ui-avatar>
				<ui-avatar
					ui="sl"
					:srcs="[
						'https://cos.color-ui.com/avatar/lol-avatar/1032.jpg',
						'https://cos.color-ui.com/avatar/lol-avatar/1033.jpg',
						'https://cos.color-ui.com/avatar/lol-avatar/1036.jpg',
						'https://cos.color-ui.com/avatar/lol-avatar/1043.jpg',
						'https://cos.color-ui.com/avatar/lol-avatar/1053.jpg'
					]"
				></ui-avatar>
			</view>
			<view class="p-3 flex align-center">
				<ui-avatar
					ui="sl"
					:srcs="[
						'https://cos.color-ui.com/avatar/lol-avatar/1032.jpg',
						'https://cos.color-ui.com/avatar/lol-avatar/1033.jpg',
						'https://cos.color-ui.com/avatar/lol-avatar/1036.jpg',
						'https://cos.color-ui.com/avatar/lol-avatar/1043.jpg',
						'https://cos.color-ui.com/avatar/lol-avatar/1052.jpg',
						'https://cos.color-ui.com/avatar/lol-avatar/1057.jpg'
					]"
				></ui-avatar>
				<ui-avatar
					ui="sl"
					:srcs="[
						'https://cos.color-ui.com/avatar/lol-avatar/1032.jpg',
						'https://cos.color-ui.com/avatar/lol-avatar/1033.jpg',
						'https://cos.color-ui.com/avatar/lol-avatar/1036.jpg',
						'https://cos.color-ui.com/avatar/lol-avatar/1043.jpg',
						'https://cos.color-ui.com/avatar/lol-avatar/1052.jpg',
						'https://cos.color-ui.com/avatar/lol-avatar/1057.jpg',
						'https://cos.color-ui.com/avatar/lol-avatar/1058.jpg'
					]"
				></ui-avatar>
				<ui-avatar
					ui="sl"
					:srcs="[
						'https://cos.color-ui.com/avatar/lol-avatar/1032.jpg',
						'https://cos.color-ui.com/avatar/lol-avatar/1033.jpg',
						'https://cos.color-ui.com/avatar/lol-avatar/1036.jpg',
						'https://cos.color-ui.com/avatar/lol-avatar/1043.jpg',
						'https://cos.color-ui.com/avatar/lol-avatar/1052.jpg',
						'https://cos.color-ui.com/avatar/lol-avatar/1057.jpg',
						'https://cos.color-ui.com/avatar/lol-avatar/1068.jpg',
						'https://cos.color-ui.com/avatar/lol-avatar/1068.jpg'
					]"
				></ui-avatar>
				<ui-avatar
					ui="sl"
					:srcs="[
						'https://cos.color-ui.com/avatar/lol-avatar/1032.jpg',
						'https://cos.color-ui.com/avatar/lol-avatar/1033.jpg',
						'https://cos.color-ui.com/avatar/lol-avatar/1036.jpg',
						'https://cos.color-ui.com/avatar/lol-avatar/1043.jpg',
						'https://cos.color-ui.com/avatar/lol-avatar/1052.jpg',
						'https://cos.color-ui.com/avatar/lol-avatar/1057.jpg',
						'https://cos.color-ui.com/avatar/lol-avatar/1068.jpg',
						'https://cos.color-ui.com/avatar/lol-avatar/1068.jpg',
						'https://cos.color-ui.com/avatar/lol-avatar/1068.jpg'
					]"
				></ui-avatar>
				
			</view>

			<view class="ui-BG radius p-4 my-4 flex-bar" @click="_to('/pages/demo/avatar')">
				《英雄联盟》头像素材
				<text class="_icon-forward"></text>
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

<style lang="scss"></style>
