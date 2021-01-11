<template>
	<cu-sys :loading="loading" doc title="了解SCSS">
		<view class="cu-container">
			<!-- 什么是SCSS -->
			<cu-title title="什么是SCSS" depth="2"  isIcon toc></cu-title>
			<view class="paragraph">
				<view>Sass是成熟、稳定、强大的CSS预处理器，而SCSS是Sass3版本当中引入的新语法特性，完全兼容CSS3的同时继承了Sass强大的动态功能。</view>
				<view>
					你可以在
					<cu-code><a href="https://www.sass.hk/" target="_blank">https://www.sass.hk/</a></cu-code>
					学习相关的技巧知识。
				</view>
			</view>

			<!-- 在HBuilderX使用SCSS -->
			<cu-title title="在HBuilderX使用SCSS" depth="2"  isIcon toc></cu-title>
			<view class="paragraph">
				<view>
					UniApp支持SCSS,你需要先在HBuilderX安装相关插件才能使用。
					<cu-code><a href="https://ext.dcloud.net.cn/plugin?id=2046" target="_blank">scss/sass编译插件 →</a></cu-code>
				</view>
				<view>
					UniApp中的
					<cu-code>uni.scss</cu-code>
					相关说明与配置
					<cu-code><a href="https://uniapp.dcloud.io/collocation/uni-scss" target="_blank">uni-scss →</a></cu-code>
				</view>
			</view>

			<!-- Colorui中的SCSS -->
			<cu-title title="Colorui中的SCSS" depth="2"  isIcon toc></cu-title>
			<view class="paragraph"><view>Colorui所有的主题,样式,组件都依赖于SCSS的预编译。你也可以更改里面的参数来自定义你自己的项目工程。</view></view>

			<!-- 目录结构 -->
			<cu-title title="目录结构" depth="2"  isIcon toc></cu-title>
			<view class="paragraph">
				<view>
					<cu-code>@/colorui/scss/</cu-code>
					目录下包含了核心的SCSS文件。
				</view>
				<view class="px-3">
					<!-- /icon -->
					<cu-title title="icon" depth="3"  isIcon toc></cu-title>
					<view class="paragraph">
						<view>
							<cu-code>@/colorui/scss/icon</cu-code>
							目录下包含了核心的图标库文件。
						</view>
					</view>

					<!-- /style -->
					<cu-title title="style" depth="3"  isIcon toc></cu-title>
					<view class="paragraph">
						<view>
							<cu-code>@/colorui/scss/style</cu-code>
							目录下包含了核心的辅助样式文件。
						</view>
					</view>

					<!-- /theme -->
					<cu-title title="theme" depth="3"  isIcon toc></cu-title>
					<view class="paragraph">
						<view>
							<cu-code>@/colorui/scss/theme</cu-code>
							目录下包含了核心的主题样式文件。你可以在这里配置你自己的主题。
						</view>
					</view>

					<!-- main -->
					<cu-title title="main" depth="3"  isIcon toc></cu-title>
					<view class="paragraph">
						<view>
							<cu-code>@/colorui/scss/_main.scss</cu-code>
							核心的主样式文件
						</view>
					</view>

					<!-- mixins -->
					<cu-title title="mixins" depth="3"  isIcon toc></cu-title>
					<view class="paragraph">
						<view>
							<cu-code>@/colorui/scss/_mixins.scss</cu-code>
							辅助的mixins混入样式。
						</view>
					</view>

					<!-- var -->
					<cu-title title="var" depth="3"  isIcon toc></cu-title>
					<view class="paragraph">
						<view>
							<cu-code>@/colorui/scss/_var.scss</cu-code>
							核心的参数，你需要在uni.scss里引入
						</view>
						<cu-code tag="pre" lang="css" :content="code"></cu-code>
					</view>
				</view>
			</view>
		</view>
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
			code: "@import '@/colorui/scss/var';"
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
