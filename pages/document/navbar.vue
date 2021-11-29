<template>
	<ui-sys title="导航栏" doc>
		<view class="ui-container">
			<ui-title title="简介" depth="2" isIcon></ui-title>
			<view class="paragraph">自定义顶部导航栏,适用于所有页面,小程序有返回胶囊样式可以使用。</view>
	
			<ui-menu class="mt-4 radius border">
				<ui-menu-item icon="cicon-equalizer" title="参数" arrow @click.native="_to('/pages/parameter/parameter?component=ui-navbar')"></ui-menu-item>
			</ui-menu>
			<!-- 导航操作 -->
			<ui-title title="导航操作" depth="2" isIcon></ui-title>
			<view class="paragraph">
				默认导航栏,自动判断当前页面是否为首页而改变图标和跳转(请在
				<ui-code>@/app/store/index.js</ui-code>
				配置首页)
				<!-- 仅图标 -->
				<ui-title title="仅图标" depth="3" isIcon>
					<navigator class="text-main-a px-2" url="/pages/demo/navbar?id=1" slot="more">
						演示
						<text class="cicon-arrow ml-2"></text>
					</navigator>
				</ui-title>
			</view>
			<ui-img src="https://cos.color-ui.com/web/ozgly.jpg" ui="radius border"></ui-img> 
			<ui-code tag="pre" lang="html" title :content="code1"></ui-code>
			<!-- 自定义返回文本 -->
			<view class="paragraph">
				<ui-title title="自定义返回文本" depth="3" isIcon>
					<navigator class="text-main-a px-2" url="/pages/demo/navbar?id=2" slot="more">
						演示
						<text class="cicon-arrow ml-2"></text>
					</navigator>
				</ui-title>
			</view>
			<ui-img src="https://cos.color-ui.com/web/i4ux8.jpg" ui="radius border"></ui-img> 
			<ui-code tag="pre" lang="html" title :content="code2"></ui-code>

			<!-- 有阴影 -->
			<view class="paragraph">
				<ui-title title="有阴影" depth="2" isIcon>
					<navigator class="text-main-a px-2" url="/pages/demo/navbar?id=3" slot="more">
						演示
						<text class="cicon-arrow ml-2"></text>
					</navigator>
				</ui-title>
			</view>
			<ui-img src="https://cos.color-ui.com/web/7i87w.jpg" ui="radius border"></ui-img> 
			<ui-code tag="pre" lang="html" title :content="code3"></ui-code>
		</view>
	</ui-sys>
</template>

<script>
let _this = null;
export default {
	data() {
		return {
			loading: true,
			isShow: false,
			code1: '<ui-navbar> </ui-navbar>',
			code2: '<ui-navbar backtext="text"> </ui-navbar>',
			code3: '<ui-navbar shadow> </ui-navbar> \n<ui-navbar shadow="sm"> </ui-navbar> \n<ui-navbar shadow="lg"> </ui-navbar>'
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
