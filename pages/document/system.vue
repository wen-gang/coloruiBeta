<template>
	<ui-sys doc title="系统">
		<view class="ui-container">
			<view class="ellipse bg-blue-gradient"></view>
			<ui-title title="简介" depth="2" isIcon></ui-title>
			<view class="paragraph">
				Colorui提供
				<ui-code content="&lt;ui-sys&gt;&lt;/ui-sys&gt;"></ui-code>
				组件来控制页面的表现，内嵌Colorui的交互反馈(模态框，轻提示等)，主题样式，页面加载等，是每个页面必须有的组件。
			</view>
			<ui-code tag="pre" lang="html" :content="code1" title></ui-code>
			<ui-menu ui="radius border"><ui-menu-item icon="cicon-equalizer" title="参数" arrow @click.native="_to('/pages/parameter/parameter?component=ui-sys')"></ui-menu-item></ui-menu>
			<ui-title title="使用背景" depth="2" isIcon></ui-title>
			<view class="">
				默认背景是
				<ui-code>theme.scss</ui-code>
				里定义的页面背景色，关于主题的使用，请参考
				<navigator class="ui-TC-Main inline px-2" url="/pages/document/theme">
					Colorui主题
					<text class="cicon-arrow"></text>
				</navigator>
				。你也可以使用
				<navigator class="ui-TC-Main inline" url="/pages/document/background">
					背景
					<text class="cicon-arrow"></text>
				</navigator>
				里的背景颜色来配置页面颜色。

				<ui-code tag="pre" lang="html" title :content="code2"></ui-code>
				<view class="mt-5">
					你也可以使用背景图片来填充你的页面：
					<navigator class="ui-TC-Main inline px-2" url="/pages/document/demo?cur=1">
						演示
						<text class="cicon-arrow"></text>
					</navigator>
				</view>
				<ui-code tag="pre" lang="html" title :content="code3"></ui-code>
				<view class="mt-5">
					或者根据图片宽度来加载背景：
					<navigator class="ui-TC-Main inline px-2" url="/pages/document/demo?cur=1">
						演示
						<text class="cicon-arrow"></text>
					</navigator>
				</view>
				<ui-code tag="pre" lang="html" title :content="code4"></ui-code>
			</view>
		</view>
	</ui-sys>
</template>

<script>
let _this = null;
export default {
	data() {
		return {
			loading: true,
			code1: '<template>\n  <ui-sys>\n    ...业务代码\n  </ui-sys>\n</template>',
			code2: '<template>\n  <ui-sys bg="bg-white">\n    ...业务代码\n  </ui-sys>\n</template>',
			code3: '<template>\n  <ui-sys img="....">\n    ...业务代码\n  </ui-sys>\n</template>',
			code4: '<template>\n  <ui-sys bg="bg-none" img="....">\n    ...业务代码\n  </ui-sys>\n</template>'
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

<style lang="scss"></style>
