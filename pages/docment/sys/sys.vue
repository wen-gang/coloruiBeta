<template>
	<cu-sys :loading="loading" doc title="系统">
		<view class="cu-container">
			<cu-title title="简介" depth="2" isIcon toc></cu-title>
			<view class="paragraph">
				Colorui提供
				<cu-code content="&lt;cu-sys&gt;&lt;/cu-sys&gt;"></cu-code>
				组件来控制页面的表现形式，内嵌Colorui的弹框，主题，页面加载等，是每个页面必须有的组件。
			</view>
			<view class="mt-3 text-d">示例代码：</view>
			<cu-code tag="pre" lang="html" :content="code1"></cu-code>
			<cu-title title="参数" depth="2" isIcon toc></cu-title>
			<view class="cu-table table-border table-full box-bg">
				<view class="cu-table-header">
					<view class="cu-table-tr box-bg-sub">
						<view class="cu-table-th" style="width: 120rpx;">属性名</view>
						<view class="cu-table-th" style="width: 120rpx;">类型</view>
						<view class="cu-table-th" style="width: 150rpx;">默认值</view>
						<view class="cu-table-th">说明</view>
					</view>
				</view>
				<view class="cu-table-body">
					<view class="cu-table-tr">
						<view class="cu-table-td">styles</view>
						<view class="cu-table-td">Object</view>
						<view class="cu-table-td">{}</view>
						<view class="cu-table-td">内部样式</view>
					</view>
					<view class="cu-table-tr">
						<view class="cu-table-td">bg</view>
						<view class="cu-table-td">String</view>
						<view class="cu-table-td">page-bg</view>
						<view class="cu-table-td">
							背景颜色
							<navigator class="text-main-a" url="/pages/docment/rules/rules">《使用规则》</navigator>
						</view>
					</view>
					<view class="cu-table-tr">
						<view class="cu-table-td">img</view>
						<view class="cu-table-td">String</view>
						<view class="cu-table-td">' '</view>
						<view class="cu-table-td">如果bg == bg-img 则加载对应的图片</view>
					</view>
					<view class="cu-table-tr">
						<view class="cu-table-td">loading</view>
						<view class="cu-table-td">Boolean</view>
						<view class="cu-table-td">false</view>
						<view class="cu-table-td">加载状态</view>
					</view>
					<view class="cu-table-tr">
						<view class="cu-table-td">tpl</view>
						<view class="cu-table-td">String</view>
						<view class="cu-table-td">'icon'</view>
						<view class="cu-table-td">
							加载样式
							<view class="text-c">icon / shadow / progress</view>
						</view>
					</view>
				</view>
			</view>
			<cu-title title="使用背景" depth="2" isIcon toc></cu-title>
			<view class="">
				默认背景是
				<cu-code>theme.scss</cu-code>
				里定义的页面背景色，关于主题的使用，请参考
				<navigator class="text-main-a inline px-2" url="/pages/docment/theme/theme">
					Colorui主题
					<text class="cui-arrow"></text>
				</navigator>
				。你也可以使用
				<navigator class="text-main-a inline" url="/pages/docment/rules/rules">《使用规则》</navigator>
				里的背景颜色来配置页面颜色。

				<view class="mt-3 text-d">示例代码：</view>
				<cu-code tag="pre" lang="html" :content="code2"></cu-code>
				<view class="mt-5">
					你也可以使用背景图片来填充你的页面：
					<navigator class="text-main-a inline px-2" url="/pages/docment/sys/demo?cur=1">
						演示
						<text class="cui-arrow"></text>
					</navigator>
				</view>
				<cu-code tag="pre" lang="html" :content="code3"></cu-code>
				<view class="mt-5">
					或者根据图片宽度来加载背景：
					<navigator class="text-main-a inline px-2" url="/pages/docment/sys/demo?cur=1">
						演示
						<text class="cui-arrow"></text>
					</navigator>
				</view>
				<cu-code tag="pre" lang="html" :content="code4"></cu-code>
			</view>
		</view>
		<cu-fixed bottom class="touch-none">
			<view class="text-right p-4">
				<navigator url="/pages/docment/sys/demo" class="cu-btn bg-main-a shadow icon touch-all lg"><text class="cui-demo"></text></navigator>
			</view>
		</cu-fixed>
	</cu-sys>
</template>

<script>
let _this = null;
export default {
	data() {
		return {
			loading: true,
			code1: '<template>\n  <cu-sys>\n    ...业务代码\n  </cu-sys>\n</template>',
			code2: '<template>\n  <cu-sys bg="bg-white">\n    ...业务代码\n  </cu-sys>\n</template>',
			code3: '<template>\n  <cu-sys img="....">\n    ...业务代码\n  </cu-sys>\n</template>',
			code4: '<template>\n  <cu-sys bg="bg-none" img="....">\n    ...业务代码\n  </cu-sys>\n</template>'
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
