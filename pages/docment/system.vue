<template>
	<ui-sys :loading="loading" doc title="系统">
		<view class="ui-container">
			<view class="ellipse bg-blue-gradient"></view>
			<ui-title title="简介" depth="2" isIcon toc></ui-title>
			<view class="paragraph">
				Colorui提供
				<ui-code content="&lt;ui-sys&gt;&lt;/ui-sys&gt;"></ui-code>
				组件来控制页面的表现，内嵌Colorui的交互反馈(模态框，轻提示等)，主题样式，页面加载等，是每个页面必须有的组件。
			</view>
			<view class="mt-3 text-d">示例代码：</view>
			<ui-code tag="pre" lang="html" :content="code1"></ui-code>
			<ui-title title="参数" depth="2" isIcon toc></ui-title>
			<view class="ui-table table-border table-full ui-BG">
				<view class="ui-table-header">
					<view class="ui-table-tr ui-BG-1">
						<view class="ui-table-th" style="width: 120rpx;">属性名</view>
						<view class="ui-table-th" style="width: 120rpx;">类型</view>
						<view class="ui-table-th" style="width: 150rpx;">默认值</view>
						<view class="ui-table-th">说明</view>
					</view>
				</view>
				<view class="ui-table-body">
					<view class="ui-table-tr">
						<view class="ui-table-td">styles</view>
						<view class="ui-table-td">Object</view>
						<view class="ui-table-td">{}</view>
						<view class="ui-table-td">内部样式</view>
					</view>
					<view class="ui-table-tr">
						<view class="ui-table-td">bg</view>
						<view class="ui-table-td">String</view>
						<view class="ui-table-td">'ui-BG-1'</view>
						<view class="ui-table-td">
							背景颜色
							<navigator class="ui-TC-Main" url="/pages/docment/rules">《使用规则》</navigator>
						</view>
					</view>
					<view class="ui-table-tr">
						<view class="ui-table-td">img</view>
						<view class="ui-table-td">String</view>
						<view class="ui-table-td">' '</view>
						<view class="ui-table-td">背景图</view>
					</view>
					<view class="ui-table-tr">
						<view class="ui-table-td">loading</view>
						<view class="ui-table-td">Boolean</view>
						<view class="ui-table-td">false</view>
						<view class="ui-table-td">加载状态</view>
					</view>
					<view class="ui-table-tr">
						<view class="ui-table-td">title</view>
						<view class="ui-table-td">String</view>
						<view class="ui-table-td">''</view>
						<view class="ui-table-td">
							引入文字以开启默认导航
						</view>
					</view>
					<view class="ui-table-tr">
						<view class="ui-table-td">navBg</view>
						<view class="ui-table-td">String</view>
						<view class="ui-table-td">'bg-blur'</view>
						<view class="ui-table-td">
							默认导航的背景色
						</view>
					</view>
					<view class="ui-table-tr">
						<view class="ui-table-td">footer</view>
						<view class="ui-table-td">Boolean</view>
						<view class="ui-table-td">true</view>
						<view class="ui-table-td">
							页面底部展示信息
						</view>
					</view>
				</view>
			</view>
			<ui-title title="使用背景" depth="2" isIcon toc></ui-title>
			<view class="">
				默认背景是
				<ui-code>theme.scss</ui-code>
				里定义的页面背景色，关于主题的使用，请参考
				<navigator class="ui-TC-Main inline px-2" url="/pages/docment/theme">
					Colorui主题
					<text class="uicon-arrow"></text>
				</navigator>
				。你也可以使用
				<navigator class="ui-TC-Main inline" url="/pages/docment/rules">《使用规则》</navigator>
				里的背景颜色来配置页面颜色。

				<view class="mt-3 text-d">示例代码：</view>
				<ui-code tag="pre" lang="html" :content="code2"></ui-code>
				<view class="mt-5">
					你也可以使用背景图片来填充你的页面：
					<navigator class="ui-TC-Main inline px-2" url="/pages/docment/demo?cur=1">
						演示
						<text class="uicon-arrow"></text>
					</navigator>
				</view>
				<ui-code tag="pre" lang="html" :content="code3"></ui-code>
				<view class="mt-5">
					或者根据图片宽度来加载背景：
					<navigator class="ui-TC-Main inline px-2" url="/pages/docment/demo?cur=1">
						演示
						<text class="uicon-arrow"></text>
					</navigator>
				</view>
				<ui-code tag="pre" lang="html" :content="code4"></ui-code>
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

<style lang="scss">
</style>
