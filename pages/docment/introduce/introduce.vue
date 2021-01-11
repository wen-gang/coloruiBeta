<template>
	<cu-sys :loading="loading" doc title="开始使用">
		<view class="cu-container">
			<!-- 什么是Colorui？ -->
			<cu-title title="什么是Colorui？" depth="2"  isIcon toc></cu-title>
			<view class="paragraph">Colorui是基于UniApp的组件框架,你可以基于Colorui快速构建自己的APP,小程序,H5网站等应用。</view>
			<!-- Colorui的特性 -->
			<cu-title title="Colorui的特性" depth="3"  isIcon toc></cu-title>
			<view class="paragraph">
				<view>
					<text class="cui-title text-main-a mx-2"></text>
					专注于视觉,提供更鲜亮的色彩配色。
				</view>
				<view>
					<text class="cui-title text-main-a mx-2"></text>
					多主题化,暗黑、亮色主题自动适配。
				</view>
				<view>
					<text class="cui-title text-main-a mx-2"></text>
					SCSS预编译处理,更灵活自定义修改。
				</view>
				<view>
					<text class="cui-title text-main-a mx-2"></text>
					适配大屏,PC小程序、iPad也能兼容。
				</view>
				<view>
					<text class="cui-title text-main-a mx-2"></text>
					提供常用组件,把控每个细节,提高开发效。
				</view>
			</view>

			<!-- 什么是UniApp？ -->
			<cu-title title="什么是UniApp？" depth="2"  isIcon toc></cu-title>
			<view class="paragraph">
				UniApp是一个使用
				<cu-code><a href="https://vuejs.org/" target="_blank">Vue.js</a></cu-code>
				开发所有前端应用的框架,你可以在
				<cu-code><a href="https://uniapp.dcloud.io/" target="_blank">https://uniapp.dcloud.io/</a></cu-code>
				学习相关的知识。
			</view>

			<!-- 使用编辑器开发 -->
			<cu-title title="使用编辑器开发" depth="2"  isIcon toc></cu-title>
			<view class="paragraph">
				推荐使用 HBuilderX：
				<cu-code>
					<a href="https://www.dcloud.io/hbuilderx.html" target="_blank">
						IDE下载地址
						<text class="cui-arrow"></text>
					</a>
				</cu-code>
				开发。 再点击工具栏里的
				<cu-code>文件 → 新建 → 项目</cu-code>
				：
			</view>
			<view class="paragraph"><image src="https://image.weilanwl.com/web/dy0y8.png" mode="widthFix" style="width:100%;max-width:600px"></image></view>
			<view class="paragraph">选择uni-app类型，输入工程名，选择ColorUI模板，点击创建，即可成功创建。</view>
			<view class="paragraph"><image src="https://image.weilanwl.com/web/9ay63.png" mode="widthFix" style="width:100%;max-width:600px"></image></view>
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
			isShow: false
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
