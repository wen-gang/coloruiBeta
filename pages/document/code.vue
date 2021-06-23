<template>
	<ui-sys title="代码">
		<view class="ui-container">
			<!-- 简介 -->
			<ui-title title="简介" depth="2" isIcon></ui-title>
			<view class="paragraph">代码组件是用来展示计算机代码文本的一个组件。</view>

			<!-- 行内用法 -->
			<ui-title title="行内用法" depth="2" isIcon></ui-title>
			<view class="paragraph">
				默认是行内代码的用法。支持默认插槽与
				<ui-code>content</ui-code>
				参数引入,在包含一些特殊符号的时候请使用引入的方式。
			</view>

			<view class="p-4">
				<ui-code>@colorui/...</ui-code>
				<ui-code :content="code"></ui-code>
			</view>

			<ui-code tag="pre" lang="html" :content="code1"></ui-code>

			<!-- 代码块用法 -->
			<ui-title title="代码块用法" depth="2" isIcon></ui-title>
			<view class="paragraph">
				<ui-code>tag</ui-code>
				参数设置为
				<ui-code>pre</ui-code>
				就可以使用代码块了。
			</view>
			<view class="paragraph">
				<ui-code>lang</ui-code>
				参数设置为指定语言。可以实现代码高亮。
			</view>
			<view class="blockquote">
				代码高亮是使用了
				<ui-code>PrismJS</ui-code>
				。你可以在官网
				<ui-code>https://prismjs.com/</ui-code>
				配置其他语言或主题,并替换
				<ui-code>@colorui/components/ui-code/prism.js</ui-code>
				和
				<ui-code>@colorui/components/ui-code/prism.scss</ui-code>
				来实现其他语言或主题的高亮。
			</view>
			<view class="blockquote">暗色主题的高亮颜色是亮色主题的反转。</view>

			<ui-code tag="pre" lang="html" :content="html"></ui-code>
			<ui-code tag="pre" lang="css" :content="css"></ui-code>

			<ui-code tag="pre" lang="html" :content="code2"></ui-code>

			<ui-title title="参数" depth="2" isIcon></ui-title>
			<view class="ui-table table-border table-full ui-BG">
				<view class="ui-table-header">
					<view class="ui-table-tr ui-BG-1">
						<view class="ui-table-th" style="width: 120rpx;">属性名</view>
						<view class="ui-table-th" style="width: 120rpx;">类型</view>
						<view class="ui-table-th" style="width: 200rpx;">默认值</view>
						<view class="ui-table-th">说明</view>
					</view>
				</view>
				<view class="ui-table-body">
					<view class="ui-table-tr">
						<view class="ui-table-td">mask</view>
						<view class="ui-table-td">Boolean</view>
						<view class="ui-table-td">false</view>
						<view class="ui-table-td">是否显示遮罩</view>
					</view>
					<view class="ui-table-tr">
						<view class="ui-table-td">index</view>
						<view class="ui-table-td">Number</view>
						<view class="ui-table-td">0</view>
						<view class="ui-table-td">层级，一些特殊情况可以用来提升层级</view>
					</view>
					<view class="ui-table-tr">
						<view class="ui-table-td">show</view>
						<view class="ui-table-td">Boolean</view>
						<view class="ui-table-td">false</view>
						<view class="ui-table-td">显示与隐藏</view>
					</view>
					<view class="ui-table-tr">
						<view class="ui-table-td">bg</view>
						<view class="ui-table-td">String</view>
						<view class="ui-table-td">'ui-BG-1'</view>
						<view class="ui-table-td">
							背景颜色
							<navigator class="ui-TC-Main inline" url="/pages/document/rules/rules">《使用规则》</navigator>
						</view>
					</view>
					<view class="ui-table-tr">
						<view class="ui-table-td">text</view>
						<view class="ui-table-td">String</view>
						<view class="ui-table-td">'main-a'</view>
						<view class="ui-table-td">
							文本颜色
							<navigator class="ui-TC-Main inline" url="/pages/document/rules/rules">《使用规则》</navigator>
						</view>
					</view>
					<view class="ui-table-tr">
						<view class="ui-table-td">time</view>
						<view class="ui-table-td">Number</view>
						<view class="ui-table-td">3000</view>
						<view class="ui-table-td">在多少毫秒后自动关闭</view>
					</view>
				</view>
			</view>
			<ui-title title="插槽" depth="2" isIcon></ui-title>
			<view class="ui-table table-border table-full ui-BG">
				<view class="ui-table-header">
					<view class="ui-table-tr ui-BG-1">
						<view class="ui-table-th" style="width: 130rpx;">名称</view>
						<view class="ui-table-th">说明</view>
					</view>
				</view>
				<view class="ui-table-body">
					<view class="ui-table-tr">
						<view class="ui-table-td">无</view>
						<view class="ui-table-td">行内代码的内容</view>
					</view>
				</view>
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
			isShow: false,
			code: '<ui-code></ui-code>',
			code1: '<ui-code>...</ui-code> \n<ui-code :content="..."></ui-code>',
			html: '<ui-code>...</ui-code> \n<ui-code :content="..."></ui-code>',
			css: '.ui-code { \n  white-space: pre-wrap; \n  word-break: break-all; \n  word-wrap: break-word; \n  font-size: 90%; \n}',
			code2: '<ui-code tag="pre" lang="html" :content="...">\n</ui-code>\n<ui-code tag="pre" lang="css" :content="...">\n</ui-code>'
		};
	},
	onLoad() {
		_this = this;
	},
	onReady() {
		this.loading = false;
	},
	methods: {}
};
</script>

<style lang="scss"></style>
