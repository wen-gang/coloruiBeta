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

			<ui-title title="多头像层叠" depth="2" isIcon></ui-title>
			<view class="p-5 flex align-center">
				<ui-avatar-group stack>
					<ui-avatar ui="round xl" src="https://cos.color-ui.com/avatar/lol-avatar/1032.jpg"></ui-avatar>
					<ui-avatar ui="round xl" src="https://cos.color-ui.com/avatar/lol-avatar/1035.jpg"></ui-avatar>
					<ui-avatar ui="round xl" src="https://cos.color-ui.com/avatar/lol-avatar/1040.jpg"></ui-avatar>
				</ui-avatar-group>
				<!-- <view class="ui-avatar-stack">
					<view class="ui-avatar xl"><image src="https://cos.color-ui.com/avatar/lol-avatar/1032.jpg" mode="widthFix"></image></view>
					<view class="ui-avatar xl"><image src="https://cos.color-ui.com/avatar/lol-avatar/1040.jpg" mode="widthFix"></image></view>
					<view class="ui-avatar xl"><image src="https://cos.color-ui.com/avatar/lol-avatar/1050.jpg" mode="widthFix"></image></view>
				</view> -->
			</view>

			<view class="p-5 flex align-center">
				<view class="ui-avatar-stack ui-BG-2 reverse">
					<view class="ui-avatar xl"><image src="https://cos.color-ui.com/avatar/lol-avatar/1032.jpg" mode="widthFix"></image></view>
					<view class="ui-avatar xl"><image src="https://cos.color-ui.com/avatar/lol-avatar/1040.jpg" mode="widthFix"></image></view>
					<view class="ui-avatar xl"><image src="https://cos.color-ui.com/avatar/lol-avatar/1050.jpg" mode="widthFix"></image></view>
				</view>
			</view>

			<view class="p-5 flex align-center">
				<view class="ui-avatar-stack ui-BG-2 reverse">
					<view class="ui-avatar xl"><image src="https://cos.color-ui.com/avatar/lol-avatar/1032.jpg" mode="widthFix"></image></view>
					<view class="ui-avatar xl"><image src="https://cos.color-ui.com/avatar/lol-avatar/1040.jpg" mode="widthFix"></image></view>
					<view class="ui-avatar xl"><image src="https://cos.color-ui.com/avatar/lol-avatar/1050.jpg" mode="widthFix"></image></view>
				</view>
			</view>

			<view class="p-5 flex align-center">
				<view class="ui-avatar-stack ui-BG-2 mx-3">
					<view class="ui-avatar xl ellipse"><image src="https://cos.color-ui.com/avatar/lol-avatar/1032.jpg" mode="widthFix"></image></view>
					<view class="ui-avatar xl ellipse"><image src="https://cos.color-ui.com/avatar/lol-avatar/1040.jpg" mode="widthFix"></image></view>
					<view class="ui-avatar xl ellipse"><image src="https://cos.color-ui.com/avatar/lol-avatar/1050.jpg" mode="widthFix"></image></view>
				</view>
			</view>

			<view class="p-5 flex align-center">
				<view class="ui-avatar-stack ui-BG-2 mx-3">
					<view class="ui-avatar xl round"><image src="https://cos.color-ui.com/avatar/lol-avatar/1032.jpg" mode="widthFix"></image></view>
					<view class="ui-avatar xl round"><image src="https://cos.color-ui.com/avatar/lol-avatar/1040.jpg" mode="widthFix"></image></view>
					<view class="ui-avatar xl round"><image src="https://cos.color-ui.com/avatar/lol-avatar/1050.jpg" mode="widthFix"></image></view>
				</view>
				<view class="ui-avatar-stack ui-BG-2 mx-3 reverse">
					<view class="ui-avatar xl round"><image src="https://cos.color-ui.com/avatar/lol-avatar/1042.jpg" mode="widthFix"></image></view>
					<view class="ui-avatar xl round"><image src="https://cos.color-ui.com/avatar/lol-avatar/1050.jpg" mode="widthFix"></image></view>
					<view class="ui-avatar xl round"><image src="https://cos.color-ui.com/avatar/lol-avatar/1060.jpg" mode="widthFix"></image></view>
				</view>
			</view>

			<ui-title title="头像组" depth="2" isIcon></ui-title>
			<view class="p-5 flex align-center">
				<view class="ui-avatar xxl">
					<view class="ui-avatar-group nth-1"><image src="https://cos.color-ui.com/avatar/lol-avatar/1032.jpg" mode="aspectFill"></image></view>
				</view>
				<view class="ui-avatar xxl">
					<view class="ui-avatar-group nth-2">
						<image src="https://cos.color-ui.com/avatar/lol-avatar/1032.jpg" mode="aspectFill"></image>
						<image src="https://cos.color-ui.com/avatar/lol-avatar/1040.jpg" mode="aspectFill"></image>
					</view>
				</view>
				<view class="ui-avatar xxl">
					<view class="ui-avatar-group nth-3">
						<image src="https://cos.color-ui.com/avatar/lol-avatar/1032.jpg" mode="aspectFill"></image>
						<image src="https://cos.color-ui.com/avatar/lol-avatar/1040.jpg" mode="aspectFill"></image>
						<image src="https://cos.color-ui.com/avatar/lol-avatar/1050.jpg" mode="aspectFill"></image>
					</view>
				</view>
				<view class="ui-avatar xxl">
					<view class="ui-avatar-group nth-4">
						<image src="https://cos.color-ui.com/avatar/lol-avatar/1032.jpg" mode="aspectFill"></image>
						<image src="https://cos.color-ui.com/avatar/lol-avatar/1040.jpg" mode="aspectFill"></image>
						<image src="https://cos.color-ui.com/avatar/lol-avatar/1050.jpg" mode="aspectFill"></image>
						<image src="https://cos.color-ui.com/avatar/lol-avatar/1050.jpg" mode="aspectFill"></image>
					</view>
				</view>
				<view class="ui-avatar xxl">
					<view class="ui-avatar-group nth-5">
						<image src="https://cos.color-ui.com/avatar/lol-avatar/1032.jpg" mode="aspectFill"></image>
						<image src="https://cos.color-ui.com/avatar/lol-avatar/1040.jpg" mode="aspectFill"></image>
						<image src="https://cos.color-ui.com/avatar/lol-avatar/1050.jpg" mode="aspectFill"></image>
						<image src="https://cos.color-ui.com/avatar/lol-avatar/1050.jpg" mode="aspectFill"></image>
						<image src="https://cos.color-ui.com/avatar/lol-avatar/1050.jpg" mode="aspectFill"></image>
					</view>
					<view class="ui-tag badge"></view>
				</view>
			</view>

			<view class="p-5 flex align-center">
				<view class="ui-avatar xxl">
					<view class="ui-avatar-group nth-6">
						<image src="https://cos.color-ui.com/avatar/lol-avatar/1032.jpg" mode="aspectFill"></image>
						<image src="https://cos.color-ui.com/avatar/lol-avatar/1032.jpg" mode="aspectFill"></image>
						<image src="https://cos.color-ui.com/avatar/lol-avatar/1040.jpg" mode="aspectFill"></image>
						<image src="https://cos.color-ui.com/avatar/lol-avatar/1050.jpg" mode="aspectFill"></image>
						<image src="https://cos.color-ui.com/avatar/lol-avatar/1050.jpg" mode="aspectFill"></image>
						<image src="https://cos.color-ui.com/avatar/lol-avatar/1050.jpg" mode="aspectFill"></image>
						<view class="ui-tag badge">SVIP</view>
					</view>
				</view>
				<view class="ui-avatar xxl">
					<view class="ui-avatar-group nth-7">
						<image src="https://cos.color-ui.com/avatar/lol-avatar/1032.jpg" mode="aspectFill"></image>
						<image src="https://cos.color-ui.com/avatar/lol-avatar/1040.jpg" mode="aspectFill"></image>
						<image src="https://cos.color-ui.com/avatar/lol-avatar/1032.jpg" mode="aspectFill"></image>
						<image src="https://cos.color-ui.com/avatar/lol-avatar/1040.jpg" mode="aspectFill"></image>
						<image src="https://cos.color-ui.com/avatar/lol-avatar/1050.jpg" mode="aspectFill"></image>
						<image src="https://cos.color-ui.com/avatar/lol-avatar/1050.jpg" mode="aspectFill"></image>
						<image src="https://cos.color-ui.com/avatar/lol-avatar/1050.jpg" mode="aspectFill"></image>
						<view class="ui-tag badge">99+</view>
					</view>
				</view>
				<view class="ui-avatar xxl">
					<view class="ui-avatar-group nth-8">
						<image src="https://cos.color-ui.com/avatar/lol-avatar/1032.jpg" mode="aspectFill"></image>
						<image src="https://cos.color-ui.com/avatar/lol-avatar/1040.jpg" mode="aspectFill"></image>
						<image src="https://cos.color-ui.com/avatar/lol-avatar/1050.jpg" mode="aspectFill"></image>
						<image src="https://cos.color-ui.com/avatar/lol-avatar/1032.jpg" mode="aspectFill"></image>
						<image src="https://cos.color-ui.com/avatar/lol-avatar/1040.jpg" mode="aspectFill"></image>
						<image src="https://cos.color-ui.com/avatar/lol-avatar/1050.jpg" mode="aspectFill"></image>
						<image src="https://cos.color-ui.com/avatar/lol-avatar/1050.jpg" mode="aspectFill"></image>
						<image src="https://cos.color-ui.com/avatar/lol-avatar/1050.jpg" mode="aspectFill"></image>
						<view class="ui-tag badge">30</view>
					</view>
				</view>
				<view class="ui-avatar xxl ellipse">
					<view class="ui-avatar-group nth-9">
						<image src="https://cos.color-ui.com/avatar/lol-avatar/1032.jpg" mode="aspectFill"></image>
						<image src="https://cos.color-ui.com/avatar/lol-avatar/1040.jpg" mode="aspectFill"></image>
						<image src="https://cos.color-ui.com/avatar/lol-avatar/1050.jpg" mode="aspectFill"></image>
						<image src="https://cos.color-ui.com/avatar/lol-avatar/1050.jpg" mode="aspectFill"></image>
						<image src="https://cos.color-ui.com/avatar/lol-avatar/1032.jpg" mode="aspectFill"></image>
						<image src="https://cos.color-ui.com/avatar/lol-avatar/1040.jpg" mode="aspectFill"></image>
						<image src="https://cos.color-ui.com/avatar/lol-avatar/1050.jpg" mode="aspectFill"></image>
						<image src="https://cos.color-ui.com/avatar/lol-avatar/1050.jpg" mode="aspectFill"></image>
						<image src="https://cos.color-ui.com/avatar/lol-avatar/1050.jpg" mode="aspectFill"></image>
					</view>
					<view class="ui-tag badge">3</view>
				</view>
			</view>

			<view class="ui-BG radius p-4 my-3 flex-bar" @click="_to('/pages/find/avatar')">
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

<style lang="scss">
	
</style>
