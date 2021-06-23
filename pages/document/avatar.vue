<template>
	<ui-sys title="头像">
		<view class="ui-container">
			<!-- 简介 -->
			<ui-title title="简介" depth="2" isIcon></ui-title>
			<view class="paragraph">
				头像
			</view>
			<ui-title title="形状" depth="2" isIcon></ui-title>
			<view class="p-5 flex align-center text-sm">
				<view class="ui-avatar sl ui-BG shadow"><image src="../../static/logo.png" mode="widthFix"></image></view>
				<view class="ui-avatar sl round ui-BG shadow"><image src="../../static/logo.png" mode="widthFix"></image></view>
				<div class="drop-shadow">
					<view class="ui-avatar sl ellipse ui-BG "><image src="../../static/logo.png" mode="widthFix"></image></view>
				</div>
			</view>
			<ui-title title="背景" depth="2" isIcon></ui-title>
			<view class="p-5 flex align-center text-sm">
				<view class="ui-avatar sl ui-BG"><view class="uicon-discover"></view></view>
				<view class="ui-avatar sl round bg-red-thin"><view class="uicon-discover"></view></view>
				<view class="ui-avatar sl ellipse bg-red-gradient"><view class="uicon-discover"></view></view>
			</view>
			
			<ui-title title="大小" depth="2" isIcon></ui-title>
			<view class="p-5 flex align-center text-sm">
				<view class="ui-avatar sm"><image src="https://oss.color-ui.com/avatar/lol-avatar/1069.jpg" mode="widthFix"></image></view>
				<view class="ui-avatar"><image src="https://oss.color-ui.com/avatar/lol-avatar/1069.jpg" mode="widthFix"></image></view>
				<view class="ui-avatar lg"><image src="https://oss.color-ui.com/avatar/lol-avatar/1069.jpg" mode="widthFix"></image></view>
				<view class="ui-avatar xl"><image src="https://oss.color-ui.com/avatar/lol-avatar/1069.jpg" mode="widthFix"></image></view>
				<view class="ui-avatar xxl"><image src="https://oss.color-ui.com/avatar/lol-avatar/1069.jpg" mode="widthFix"></image></view>
				<view class="ui-avatar sl"><image src="https://oss.color-ui.com/avatar/lol-avatar/1069.jpg" mode="widthFix"></image></view>
			</view>
			<view class="p-5 flex align-center text-sm">
				<view class="ui-avatar sm">头像</view>
				<view class="ui-avatar">头像</view>
				<view class="ui-avatar lg">头像</view>
				<view class="ui-avatar xl">头像</view>
				<view class="ui-avatar xxl">头像</view>
				<view class="ui-avatar sl">头像</view>
			</view>
			
			<ui-title title="头像层叠" depth="2" isIcon></ui-title>
			<view class="p-5 flex align-center">
				<view class="ui-avatar-stack">
					<view class="ui-avatar xxl"><image src="https://oss.color-ui.com/avatar/lol-avatar/1032.jpg" mode="widthFix"></image></view>
					<view class="ui-avatar xxl"><image src="https://oss.color-ui.com/avatar/lol-avatar/1040.jpg" mode="widthFix"></image></view>
					<view class="ui-avatar xxl"><image src="https://oss.color-ui.com/avatar/lol-avatar/1050.jpg" mode="widthFix"></image></view>
				</view>
			</view>

			<view class="p-5 flex align-center">
				<view class="ui-avatar-stack ui-BG-2 reverse">
					<view class="ui-avatar xxl"><image src="https://oss.color-ui.com/avatar/lol-avatar/1032.jpg" mode="widthFix"></image></view>
					<view class="ui-avatar xxl"><image src="https://oss.color-ui.com/avatar/lol-avatar/1040.jpg" mode="widthFix"></image></view>
					<view class="ui-avatar xxl"><image src="https://oss.color-ui.com/avatar/lol-avatar/1050.jpg" mode="widthFix"></image></view>
				</view>
			</view>

			<view class="p-5 flex align-center">
				<view class="ui-avatar-stack ui-BG-2 reverse">
					<view class="ui-avatar xxl"><image src="https://oss.color-ui.com/avatar/lol-avatar/1032.jpg" mode="widthFix"></image></view>
					<view class="ui-avatar xxl"><image src="https://oss.color-ui.com/avatar/lol-avatar/1040.jpg" mode="widthFix"></image></view>
					<view class="ui-avatar xxl"><image src="https://oss.color-ui.com/avatar/lol-avatar/1050.jpg" mode="widthFix"></image></view>
				</view>
			</view>

			<view class="p-5 flex align-center">
				<view class="ui-avatar-stack ui-BG-2 mx-3">
					<view class="ui-avatar xxl ellipse"><image src="https://oss.color-ui.com/avatar/lol-avatar/1032.jpg" mode="widthFix"></image></view>
					<view class="ui-avatar xxl ellipse"><image src="https://oss.color-ui.com/avatar/lol-avatar/1040.jpg" mode="widthFix"></image></view>
					<view class="ui-avatar xxl ellipse"><image src="https://oss.color-ui.com/avatar/lol-avatar/1050.jpg" mode="widthFix"></image></view>
				</view>
			</view>

			<view class="p-5 flex align-center">
				<view class="ui-avatar-stack ui-BG-2 mx-3">
					<view class="ui-avatar xxl round"><image src="https://oss.color-ui.com/avatar/lol-avatar/1032.jpg" mode="widthFix"></image></view>
					<view class="ui-avatar xxl round"><image src="https://oss.color-ui.com/avatar/lol-avatar/1040.jpg" mode="widthFix"></image></view>
					<view class="ui-avatar xxl round"><image src="https://oss.color-ui.com/avatar/lol-avatar/1050.jpg" mode="widthFix"></image></view>
				</view>
				<view class="ui-avatar-stack ui-BG-2 mx-3 reverse">
					<view class="ui-avatar xxl round"><image src="https://oss.color-ui.com/avatar/lol-avatar/1042.jpg" mode="widthFix"></image></view>
					<view class="ui-avatar xxl round"><image src="https://oss.color-ui.com/avatar/lol-avatar/1050.jpg" mode="widthFix"></image></view>
					<view class="ui-avatar xxl round"><image src="https://oss.color-ui.com/avatar/lol-avatar/1060.jpg" mode="widthFix"></image></view>
				</view>
			</view>

			<ui-title title="头像组" depth="2" isIcon></ui-title>
			<view class="p-5 flex align-center">
				<view class="ui-avatar xxl">
					<view class="ui-avatar-group nth-1"><image src="https://oss.color-ui.com/avatar/lol-avatar/1032.jpg" mode="aspectFill"></image></view>
				</view>
				<view class="ui-avatar xxl">
					<view class="ui-avatar-group nth-2">
						<image src="https://oss.color-ui.com/avatar/lol-avatar/1032.jpg" mode="aspectFill"></image>
						<image src="https://oss.color-ui.com/avatar/lol-avatar/1040.jpg" mode="aspectFill"></image>
					</view>
				</view>
				<view class="ui-avatar xxl">
					<view class="ui-avatar-group nth-3">
						<image src="https://oss.color-ui.com/avatar/lol-avatar/1032.jpg" mode="aspectFill"></image>
						<image src="https://oss.color-ui.com/avatar/lol-avatar/1040.jpg" mode="aspectFill"></image>
						<image src="https://oss.color-ui.com/avatar/lol-avatar/1050.jpg" mode="aspectFill"></image>
					</view>
				</view>
				<view class="ui-avatar xxl">
					<view class="ui-avatar-group nth-4">
						<image src="https://oss.color-ui.com/avatar/lol-avatar/1032.jpg" mode="aspectFill"></image>
						<image src="https://oss.color-ui.com/avatar/lol-avatar/1040.jpg" mode="aspectFill"></image>
						<image src="https://oss.color-ui.com/avatar/lol-avatar/1050.jpg" mode="aspectFill"></image>
						<image src="https://oss.color-ui.com/avatar/lol-avatar/1050.jpg" mode="aspectFill"></image>
					</view>
				</view>
				<view class="ui-avatar xxl">
					<view class="ui-avatar-group nth-5">
						<image src="https://oss.color-ui.com/avatar/lol-avatar/1032.jpg" mode="aspectFill"></image>
						<image src="https://oss.color-ui.com/avatar/lol-avatar/1040.jpg" mode="aspectFill"></image>
						<image src="https://oss.color-ui.com/avatar/lol-avatar/1050.jpg" mode="aspectFill"></image>
						<image src="https://oss.color-ui.com/avatar/lol-avatar/1050.jpg" mode="aspectFill"></image>
						<image src="https://oss.color-ui.com/avatar/lol-avatar/1050.jpg" mode="aspectFill"></image>
					</view>
					<view class="ui-tag badge"></view>
				</view>
			</view>

			<view class="p-5 flex align-center">
				<view class="ui-avatar xxl">
					<view class="ui-avatar-group nth-6">
						<image src="https://oss.color-ui.com/avatar/lol-avatar/1032.jpg" mode="aspectFill"></image>
						<image src="https://oss.color-ui.com/avatar/lol-avatar/1032.jpg" mode="aspectFill"></image>
						<image src="https://oss.color-ui.com/avatar/lol-avatar/1040.jpg" mode="aspectFill"></image>
						<image src="https://oss.color-ui.com/avatar/lol-avatar/1050.jpg" mode="aspectFill"></image>
						<image src="https://oss.color-ui.com/avatar/lol-avatar/1050.jpg" mode="aspectFill"></image>
						<image src="https://oss.color-ui.com/avatar/lol-avatar/1050.jpg" mode="aspectFill"></image>
						<view class="ui-tag badge">SVIP</view>
					</view>
				</view>
				<view class="ui-avatar xxl">
					<view class="ui-avatar-group nth-7">
						<image src="https://oss.color-ui.com/avatar/lol-avatar/1032.jpg" mode="aspectFill"></image>
						<image src="https://oss.color-ui.com/avatar/lol-avatar/1040.jpg" mode="aspectFill"></image>
						<image src="https://oss.color-ui.com/avatar/lol-avatar/1032.jpg" mode="aspectFill"></image>
						<image src="https://oss.color-ui.com/avatar/lol-avatar/1040.jpg" mode="aspectFill"></image>
						<image src="https://oss.color-ui.com/avatar/lol-avatar/1050.jpg" mode="aspectFill"></image>
						<image src="https://oss.color-ui.com/avatar/lol-avatar/1050.jpg" mode="aspectFill"></image>
						<image src="https://oss.color-ui.com/avatar/lol-avatar/1050.jpg" mode="aspectFill"></image>
						<view class="ui-tag badge">99+</view>
					</view>
				</view>
				<view class="ui-avatar xxl">
					<view class="ui-avatar-group nth-8">
						<image src="https://oss.color-ui.com/avatar/lol-avatar/1032.jpg" mode="aspectFill"></image>
						<image src="https://oss.color-ui.com/avatar/lol-avatar/1040.jpg" mode="aspectFill"></image>
						<image src="https://oss.color-ui.com/avatar/lol-avatar/1050.jpg" mode="aspectFill"></image>
						<image src="https://oss.color-ui.com/avatar/lol-avatar/1032.jpg" mode="aspectFill"></image>
						<image src="https://oss.color-ui.com/avatar/lol-avatar/1040.jpg" mode="aspectFill"></image>
						<image src="https://oss.color-ui.com/avatar/lol-avatar/1050.jpg" mode="aspectFill"></image>
						<image src="https://oss.color-ui.com/avatar/lol-avatar/1050.jpg" mode="aspectFill"></image>
						<image src="https://oss.color-ui.com/avatar/lol-avatar/1050.jpg" mode="aspectFill"></image>
						<view class="ui-tag badge">30</view>
					</view>
				</view>
				<view class="ui-avatar xxl ellipse">
					<view class="ui-avatar-group nth-9">
						<image src="https://oss.color-ui.com/avatar/lol-avatar/1032.jpg" mode="aspectFill"></image>
						<image src="https://oss.color-ui.com/avatar/lol-avatar/1040.jpg" mode="aspectFill"></image>
						<image src="https://oss.color-ui.com/avatar/lol-avatar/1050.jpg" mode="aspectFill"></image>
						<image src="https://oss.color-ui.com/avatar/lol-avatar/1050.jpg" mode="aspectFill"></image>
						<image src="https://oss.color-ui.com/avatar/lol-avatar/1032.jpg" mode="aspectFill"></image>
						<image src="https://oss.color-ui.com/avatar/lol-avatar/1040.jpg" mode="aspectFill"></image>
						<image src="https://oss.color-ui.com/avatar/lol-avatar/1050.jpg" mode="aspectFill"></image>
						<image src="https://oss.color-ui.com/avatar/lol-avatar/1050.jpg" mode="aspectFill"></image>
						<image src="https://oss.color-ui.com/avatar/lol-avatar/1050.jpg" mode="aspectFill"></image>
					</view>
					<view class="ui-tag badge">3</view>
				</view>
			</view>

			<view class="ui-BG radius p-4 my-3 flex-bar" @click="_to('/pages/find/avatar')">
				 《英雄联盟》头像素材 <text class="cicon-forward"></text>
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
