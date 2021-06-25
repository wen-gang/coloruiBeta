<template>
	<ui-sys img="https://oss.color-ui.com/img/4put2.png" tabbar>
		<ui-navbar :back="false" opacity>
			<view class="flex-bar p-3" v-if="sys_scrollTop > sys_navBar">
				<image src="https://oss.color-ui.com/img/hapm8.png" mode="aspectFill"
					style="width: 200rpx;height: 56rpx;"></image>
			</view>
			<view class="p-3 flex-bar flex-sub" v-if="sys_scrollTop > sys_navBar">
				<view url="/pages/search/search" class="flex-sub flex-bar">
					<view class="p-2 bg-blur-1 w-100 round border flex-center" :style="{height:`35px`}">
						<text class="uicon-search-line mx-2"></text>
						<view class="text-c text-sm">
							键入类名搜索释义
						</view>
					</view>
				</view>
			</view>
			<view class="flex-bar">
				<!-- #ifdef MP -->
				<view :style="{width:`${sys_capsule.width + 10}px`,height:`${sys_capsule.height}px`}"> </view>
				<!-- #endif -->
			</view>
		</ui-navbar>
		<ui-swiper :info="swiperList" height="48vw" dotStyle="whiteline" dotCur="ui-BG-Main"></ui-swiper>
		<view class="ui-container">
			<block v-for="(nav, navindex) in nav" :key="navindex">
				<ui-title :title="nav.title" depth="2" isIcon class="ml-3"></ui-title>
				<view class="ui-grid ui-cols-2">
					<view class="ui-item p-3" v-for="(item, index) in nav.subnav" :key="index">
						<app-nav-li :data="item"></app-nav-li>
					</view>
				</view>
			</block>
		</view>
	</ui-sys>
</template>

<script>
	let _this = null;
	export default {
		data() {
			return {
				swiperList: [{
					img: "https://oss.color-ui.com/img/8v2yr.png",
					url:'/pages/article/guide/guide'
				}, {
					img: "https://oss.color-ui.com/img/qhgtb.png"
				}, {
					img: "https://oss.color-ui.com/img/qhgtb.png"
				}],
				nav: [{
						title: '基础',
						subnav: [{
								icon: 'uicon-set',
								name: 'system',
								title: '系统'
							},
							{
								icon: 'uicon-paint',
								name: 'theme',
								title: '主题'
							},
							{
								icon: 'uicon-topbar',
								name: 'navbar',
								title: '导航栏'
							},
							{
								icon: 'uicon-palette',
								name: 'background',
								title: '背景'
							},
							{
								icon: 'uicon-Aa',
								name: 'text',
								title: '文本'
							},
							{
								icon: 'uicon-magic',
								name: 'icon',
								title: '图标'
							},
							{
								icon: 'uicon-darkmode-o',
								name: 'shadow',
								title: '阴影'
							},
							{
								icon: 'uicon-box',
								name: 'border',
								title: '边框'
							}
						]
					},
					{
						title: '视图',
						subnav: [{
								icon: 'uicon-avatar',
								name: 'avatar',
								title: '头像'
							},
							{
								icon: 'uicon-Tt',
								name: 'title',
								title: '标题'
							},
							{
								icon: 'uicon-tag',
								name: 'tag',
								title: '标签'
							},
							{
								icon: 'uicon-ellipse',
								name: 'button',
								title: '按钮'
							},
							{
								icon: 'uicon-pic',
								name: 'image',
								title: '图片'
							},
							{
								icon: 'uicon-code-box',
								name: 'code',
								title: '代码'
							},
							{
								icon: 'uicon-progress',
								name: 'progress',
								title: '进度条'
							},
							{
								icon: 'uicon-loader-fill',
								name: 'loading',
								title: '加载'
							}
						]
					},
					{
						title: '布局',
						subnav: [{
								icon: 'uicon-view-agenda',
								name: 'flex',
								title: '容器'
							},
							{
								icon: 'uicon-view-agenda',
								name: 'menu',
								title: '菜单'
							},
							{
								icon: 'uicon-dashboard',
								name: 'fixed',
								title: '浮动'
							},
							{
								icon: 'uicon-card',
								name: 'card',
								title: '卡片'
							},
							{
								icon: 'uicon-view-list',
								name: 'list',
								title: '列表'
							},
							{
								icon: 'uicon-grid',
								name: 'grid',
								title: '栅栏'
							},
							{
								icon: 'uicon-stock',
								name: 'timeline',
								title: '时间轴'
							},
							{
								icon: 'uicon-grid',
								name: 'table',
								title: '表格'
							}
						]
					},
					{
						title: '交互',
						subnav: [{
								icon: 'uicon-popover',
								name: 'popover',
								title: '气泡框'
							},
							{
								icon: 'uicon-stop',
								name: 'modal',
								title: '模态框'
							},
							{
								icon: 'uicon-subtitles',
								name: 'toast',
								title: '轻提示'
							},
							{
								icon: 'uicon-view-quilt',
								name: 'drawer',
								title: '抽屉'
							},
							{
								icon: 'uicon-view-day',
								name: 'collapse',
								title: '折叠面板'
							},
							{
								icon: 'uicon-view-array',
								name: 'tab',
								title: '选项卡'
							},
							{
								icon: 'uicon-view-carousel',
								name: 'swiper',
								title: '轮播图'
							},
							{
								icon: 'uicon-git-commit',
								name: 'steps',
								title: '步骤条'
							}
						]
					},
					{
						title: '表单',
						subnav: [{
								icon: 'uicon-input',
								name: 'input',
								title: '输入框'
							},
							{
								icon: 'uicon-radiobox',
								name: 'radio',
								title: '单选框'
							},
							{
								icon: 'uicon-checkbox',
								name: 'checkbox',
								title: '复选框'
							},
							{
								icon: 'uicon-toggle',
								name: 'switch',
								title: '开关'
							},
							{
								icon: 'uicon-view-headline',
								name: 'picker',
								title: '选择器'
							}
						]
					}
				],

			}
		},
		onLoad() {
			_this = this;
		},
		methods: {}
	}
</script>

<style lang="scss">

</style>
