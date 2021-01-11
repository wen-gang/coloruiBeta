<template>
	<cu-sys :loading="loading" title="代码" doc>
		<view class="cu-container">
			<!-- 简介 -->
			<cu-title title="简介" depth="2"  isIcon toc></cu-title>
			<view class="paragraph">代码组件是用来展示计算机代码文本的一个组件。</view>

			<!-- 行内用法 -->
			<cu-title title="行内用法" depth="2"  isIcon toc></cu-title>
			<view class="paragraph">
				默认是行内代码的用法。支持默认插槽与
				<cu-code>content</cu-code>
				参数引入,在包含一些特殊符号的时候请使用引入的方式。
			</view>
			<block v-if="demo">
				<view class="p-4">
					<cu-code>@colorui/...</cu-code>
					<cu-code :content="code"></cu-code>
				</view>
			</block>
			<cu-code tag="pre" lang="html" :content="code1" v-else></cu-code>

			<!-- 代码块用法 -->
			<cu-title title="代码块用法" depth="2"  isIcon toc></cu-title>
			<view class="paragraph">
				<cu-code>tag</cu-code>
				参数设置为
				<cu-code>pre</cu-code>
				就可以使用代码块了。
			</view>
			<view class="paragraph">
				<cu-code>lang</cu-code>
				参数设置为指定语言。可以实现代码高亮。
			</view>
			<view class="blockquote">
				代码高亮是使用了<cu-code>PrismJS</cu-code>。你可以在官网<cu-code>https://prismjs.com/</cu-code>配置其他语言或主题,并替换<cu-code>@colorui/components/cu-code/prism.js</cu-code>
				和<cu-code>@colorui/components/cu-code/prism.scss</cu-code>来实现其他语言或主题的高亮。
			</view>
			<view class="blockquote">
				暗色主题的高亮颜色是亮色主题的反转。
			</view>
			
			<block v-if="demo">
				<cu-code tag="pre" lang="html" :content="html"></cu-code>
				<cu-code tag="pre" lang="css" :content="css"></cu-code>
			</block>
			
			<cu-code tag="pre" lang="html" :content="code2" v-else></cu-code>
			<!-- Api -->
				<block v-if="!demo">
					<cu-title title="参数" depth="2"  isIcon toc></cu-title>
					<view class="cu-table table-border table-full box-bg">
						<view class="cu-table-header">
							<view class="cu-table-tr box-bg-sub">
								<view class="cu-table-th" style="width: 120rpx;">属性名</view>
								<view class="cu-table-th" style="width: 120rpx;">类型</view>
								<view class="cu-table-th" style="width: 200rpx;">默认值</view>
								<view class="cu-table-th">说明</view>
							</view>
						</view>
						<view class="cu-table-body">
							<view class="cu-table-tr">
								<view class="cu-table-td">mask</view>
								<view class="cu-table-td">Boolean</view>
								<view class="cu-table-td">false</view>
								<view class="cu-table-td">是否显示遮罩</view>
							</view>
							<view class="cu-table-tr">
								<view class="cu-table-td">index</view>
								<view class="cu-table-td">Number</view>
								<view class="cu-table-td">0</view>
								<view class="cu-table-td">层级，一些特殊情况可以用来提升层级</view>
							</view>
							<view class="cu-table-tr">
								<view class="cu-table-td">show</view>
								<view class="cu-table-td">Boolean</view>
								<view class="cu-table-td">false</view>
								<view class="cu-table-td">显示与隐藏</view>
							</view>
							<view class="cu-table-tr">
								<view class="cu-table-td">bg</view>
								<view class="cu-table-td">String</view>
								<view class="cu-table-td">'box-bg-sub'</view>
								<view class="cu-table-td">
									背景颜色
									<navigator class="text-main-a inline" url="/pages/docment/rules/rules">《使用规则》</navigator>
								</view>
							</view>
							<view class="cu-table-tr">
								<view class="cu-table-td">text</view>
								<view class="cu-table-td">String</view>
								<view class="cu-table-td">'main-a'</view>
								<view class="cu-table-td">文本颜色
								<navigator class="text-main-a inline" url="/pages/docment/rules/rules">《使用规则》</navigator></view>
							</view>
							<view class="cu-table-tr">
								<view class="cu-table-td">time</view>
								<view class="cu-table-td">Number</view>
								<view class="cu-table-td">3000</view>
								<view class="cu-table-td">在多少毫秒后自动关闭</view>
							</view>
						</view>
					</view>
					<cu-title title="插槽" depth="2"  isIcon toc></cu-title>
					<view class="cu-table table-border table-full box-bg">
						<view class="cu-table-header">
							<view class="cu-table-tr box-bg-sub">
								<view class="cu-table-th" style="width: 130rpx;">名称</view>
								<view class="cu-table-th">说明</view>
							</view>
						</view>
						<view class="cu-table-body">
							<view class="cu-table-tr">
								<view class="cu-table-td">无</view>
								<view class="cu-table-td">行内代码的内容</view>
							</view>
						</view>
					</view>
				</block>
			
		</view>
		<demo-btn :demo.sync="demo"></demo-btn>
	</cu-sys>
</template>

<script>
let _this = null;
export default {
	data() {
		return {
			demo: true,
			loading: true,
			isShow: false,
			code: '<cu-code></cu-code>',
			code1: '<cu-code>...</cu-code> \n<cu-code :content="..."></cu-code>',
			html: '<cu-code>...</cu-code> \n<cu-code :content="..."></cu-code>',
			css: '.cu-code { \n  white-space: pre-wrap; \n  word-break: break-all; \n  word-wrap: break-word; \n  font-size: 90%; \n}',
			code2: '<cu-code tag="pre" lang="html" :content="...">\n</cu-code>\n<cu-code tag="pre" lang="css" :content="...">\n</cu-code>'
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
