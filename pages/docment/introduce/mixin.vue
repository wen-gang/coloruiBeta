<template>
	<cu-sys :loading="loading" doc title="全局混入mixin">
		<view class="cu-container">
			<!-- 简介 -->
			<cu-title title="简介" depth="2" isIcon toc></cu-title>
			<view class="paragraph">全局混入。 <cu-code>@/colorui/js/mixin.js</cu-code> Colorui提供自定义组件的一些通用参数和函数。你都可以使用这些参数来自定义组件的各种样式。</view>

			<!-- Data -->
			<cu-title title="Data" depth="2" isIcon toc></cu-title>
			<view class="paragraph">Colorui提供一些已经声明好的data来完善你的组件。</view>
			<view class="px-3">
				<cu-title title="_uid" depth="3" isIcon toc></cu-title>
				<view class="paragraph">组件的实例id。通常用来区分父子级组件或者用来获取实例的节点信息等。</view>
				<cu-title title="sys_scrollTop" depth="3" isIcon toc></cu-title>
				<view class="paragraph">组件实例所在页面滚动值。注意当前页面是否可以滚动。</view>
				<cu-title title="sys_atPage" depth="3" isIcon toc></cu-title>
				<view class="paragraph">组件实例所在页面是否有显示。页面生命周期onShow时为true,onHide时为false。</view>
				<cu-title title="sys_atHome" depth="3" isIcon toc></cu-title>
				<view class="paragraph">组件实例所在页面是否为第一个页面。当指定页面打开应用时的第一个页面。用来判断是否有首页图标等。</view>
				<cu-title title="sys_layer" depth="3" isIcon toc></cu-title>
				<view class="paragraph">组件实例的页面层级。会根据组件的嵌套来生成一个层级数，可以用这个层级来使用css的z-index。避免弹框或者其他全屏的组件相互影响。</view>
				<cu-title title="sys_homePage" depth="3" isIcon toc></cu-title>
				<view class="paragraph">
					应用的首页。一些特定场景需要回到首页的url。默认是
					<cu-code>/pages/index/index</cu-code>
				</view>
			</view>

			<!-- Props -->
			<cu-title title="Props" depth="2" isIcon toc></cu-title>
			<view class="paragraph">一些组件有的通用传值参数。每个参数都有默认的值，你也可以在自定义组件的内部重新覆盖这些参数的默认值。</view>

			<view class="px-3">
				<!-- bg -->
				<cu-title title="bg" depth="3" isIcon toc></cu-title>
				<view class="paragraph">
					背景样式。支持Colorui所有
					<navigator class="text-main-a inline px-2" url="/pages/docment/bg/bg?cur=1">
						背景
						<text class="cui-arrow"></text>
					</navigator>
					样式的类名。也支持css写法的字符串
					<cu-code>#xxxxxx</cu-code>
					<cu-code>rgba(0,0,0,.2)</cu-code>
				</view>
				<cu-code tag="pre" lang="html" :content="bgcode"></cu-code>
				<view class="paragraph">
					组件内
					<cu-code>bgClass</cu-code>
					表示bg中传来的类名。
					<cu-code>bgCss</cu-code>
					表示bg中传来的css字符串。
				</view>
				<cu-code tag="pre" lang="html" :content="bgcode2"></cu-code>

				<!-- text -->
				<cu-title title="text" depth="3" isIcon toc></cu-title>
				<view class="paragraph">
					文本样式。支持Colorui所有
					<navigator class="text-main-a inline px-2" url="/pages/docment/text/text?cur=1">
						文本
						<text class="cui-arrow"></text>
					</navigator>
					样式的类名。也支持css写法的字符串
					<cu-code>#xxxxxx</cu-code>
					<cu-code>rgba(0,0,0,.2)</cu-code>
					来自定义文字颜色。
				</view>
				<cu-code tag="pre" lang="html" :content="textcode"></cu-code>
			</view>

			<!-- methods -->
			<cu-title title="methods" depth="2" isIcon toc></cu-title>
			<view class="paragraph">一些组件内通用的函数。</view>
			<view class="px-3">
				<!-- _onShow -->
				<cu-title title="_onShow" depth="3" isIcon toc></cu-title>
				<view class="paragraph">组件所在页面显示时。</view>
				<!-- _onHide -->
				<cu-title title="_onHide" depth="3" isIcon toc></cu-title>
				<view class="paragraph">组件所在页面隐藏时。</view>
				<!-- _backPage -->
				<cu-title title="_backPage" depth="3" isIcon toc></cu-title>
				<view class="paragraph">返回上一页。</view>
				<!-- _toHome -->
				<cu-title title="_toHome" depth="3" isIcon toc></cu-title>
				<view class="paragraph">回首页。</view>
			</view>
			<cu-code tag="pre" lang="js" :content="methods2"></cu-code>
			<cu-code tag="pre" lang="html" :content="methods"></cu-code>
			<!-- onShare -->
			<cu-title title="右上角分享" depth="2" isIcon toc></cu-title>
			<view class="paragraph">你可以在这里配置小程序全局页面的右上角分享。</view>
			<cu-code tag="pre" lang="js" :content="onShare"></cu-code>
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
			bgcode: '<cu-xxx bg="bg-blue"></cu-xxx> \n<cu-xxx bg="#ffffff"></cu-xxx> \n<cu-xxx bg="bg-img" img="https://..."></cu-xxx>',
			bgcode2: '<view  \n :class="[bgClass]"  \n :style="[{ background: bgCss }] \n"></view>',
			textcode: '<cu-xxx text="text-blue"></cu-xxx> \n<cu-xxx text="#ffffff"></cu-xxx>',
			methods: '<view @click="_backPage">返回上一页</view> \n<view @click="_toHome">回首页</view>',
			methods2: 'methods: {\n _onShow() {  \n ...\n },  \n _onHide() {  \n ...\n }\n}',
			onShare: 'onShareAppMessage() {\n  wx.showShareMenu({\n    withShareTicket: true,\n    menus: ["shareAppMessage", "shareTimeline"]\n  });\n},\nonShareTimeline() {\n  return {\n    title: "Colorui组件库",\n    query: {}\n  };\n},'
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
