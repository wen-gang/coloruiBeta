<template>
	<ui-sys title="气泡框">
		<view class="ui-container">
			<ui-title title="简介" depth="2" isIcon></ui-title>
			<view class="paragraph">
				气泡框组件可以对目标元素进行更多的操作或者简要的介绍与提示。
				<view>气泡框的主体会根据目标元素在屏幕的上下半部分来显示在上面或者下面。</view>
			</view>
			<!-- 文字提示 -->
			<ui-title title="文字提示" depth="2" isIcon></ui-title>
			<view class="paragraph">文字提示会自动关闭。</view>
			<view class="text-center">
				<ui-popover tips="这里是提示文本"><button class="ui-btn">点击</button></ui-popover>
			</view>
			<ui-code tag="pre" lang="html" :content="code1"></ui-code>

			<!-- 遮罩 -->
			<ui-title title="遮罩" depth="2" isIcon></ui-title>
			<view class="paragraph">默认无遮罩。</view>
			<view class="text-center">
				<ui-popover tips="这里是提示文本" mask><button class="ui-btn">点击</button></ui-popover>
			</view>
			<ui-code tag="pre" lang="html" :content="code2"></ui-code>

			<!-- 换背景 -->
			<ui-title title="换背景" depth="2" isIcon></ui-title>
			<view class="paragraph">
				遵循
				<navigator class="text-main-a inline" url="/pages/document/rules/rules">《使用规则》</navigator>
				里的背景使用，默认是
				<ui-code>'box-bg'</ui-code>
				菜单色。
			</view>
			<view class="text-center">
				<ui-popover tips="这里是提示文本" bg="bg-red"><button class="ui-btn">点击</button></ui-popover>
			</view>
			<ui-code tag="pre" lang="html" :content="code3"></ui-code>

			<!-- 自定义内容 -->
			<ui-title title="自定义内容" depth="2" isIcon></ui-title>
			<view class="paragraph">
				设定
				<ui-code>content</ui-code>
				插槽可以自定义气泡框内容
			</view>
			<view class="text-center pb-3">
				<ui-popover>
					<button class="ui-btn">点击</button>
					<block slot="content">
						<view class="p-3"><ui-title title="Hello Colorui" align="center" tpl="stack" hasLine></ui-title></view>
					</block>
				</ui-popover>
			</view>
			<ui-code tag="pre" lang="html" :content="code4"></ui-code>

			<!-- 定时 -->
			<ui-title title="定时" depth="2" isIcon></ui-title>
			<view class="paragraph">可以更改时间自动关闭，单位毫秒。文字提示默认是3000毫秒，自定义内容默认需要点击空白处或者遮罩关闭</view>
			<view class="text-center">
				<ui-popover tips="这里是提示文本" :time="5000"><button class="ui-btn">点击</button></ui-popover>
			</view>
			<ui-code tag="pre" lang="html" :content="code5"></ui-code>

			<!-- 自定义触发方式 -->
			<ui-title title="自定义触发方式" depth="2" isIcon></ui-title>
			<view class="paragraph">
				设定
				<ui-code>show</ui-code>
				来控制气泡框的显示，需要开启
				<ui-code>isChange</ui-code>
			</view>
			<view class="text-center">
				<view class="flex-bar p-3 radius ui-BG">
					<ui-popover tips="气泡框在这里出现哦" :show.sync="isShow" isChange><button class="ui-btn ui-BG-Main">目标</button></ui-popover>
					<button class="ui-btn ui-BG-Main" @tap="isShow = true">点击</button>
				</view>
			</view>
			<ui-code tag="pre" lang="html" :content="code6"></ui-code>
			<!-- Api -->
			<block v-if="!demo">
				<ui-title title="参数" depth="2" isIcon></ui-title>
				<view class="ui-table table-border table-full box-bg">
					<view class="ui-table-header">
						<view class="ui-table-tr box-bg-sub">
							<view class="ui-table-th" style="width: 120rpx;">属性名</view>
							<view class="ui-table-th" style="width: 120rpx;">类型</view>
							<view class="ui-table-th" style="width: 150rpx;">默认值</view>
							<view class="ui-table-th">说明</view>
						</view>
					</view>
					<view class="ui-table-body">
						<view class="ui-table-tr">
							<view class="ui-table-td">tips</view>
							<view class="ui-table-td">String</view>
							<view class="ui-table-td">''</view>
							<view class="ui-table-td">提示文字</view>
						</view>
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
							<view class="ui-table-td">'box-bg'</view>
							<view class="ui-table-td">
								背景
								<navigator class="text-main-a inline" url="/pages/document/article/mixin">《使用规则》</navigator>
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
				<view class="ui-table table-border table-full box-bg">
					<view class="ui-table-header">
						<view class="ui-table-tr box-bg-sub">
							<view class="ui-table-th" style="width: 130rpx;">名称</view>
							<view class="ui-table-th">说明</view>
						</view>
					</view>
					<view class="ui-table-body">
						<view class="ui-table-tr">
							<view class="ui-table-td">无</view>
							<view class="ui-table-td">主体内容，点击的目标元素</view>
						</view>
						<view class="ui-table-tr">
							<view class="ui-table-td">content</view>
							<view class="ui-table-td">气泡框弹出的内容</view>
						</view>
					</view>
				</view>
			</block>
		</view>
	</ui-sys>
</template>

<script>
export default {
	data() {
		return {
			demo: true,
			loading: true,
			isShow: false,
			code1: '<ui-popover tips="这里是提示文本">\n  <button class="ui-btn">点击</button>\n</ui-popover>',
			code2: '<ui-popover tips="这里是提示文本" mask>\n  <button class="ui-btn">点击</button>\n</ui-popover>',
			code3: '<ui-popover tips="这里是提示文本" bg="bg-red">\n  <button class="ui-btn">点击</button>\n</ui-popover>',
			code4: '<ui-popover>\n  <button class="ui-btn">点击</button>\n  <block slot="content">\n 自定义内容\n  </block>\n</ui-popover>',
			code5: '<ui-popover tips="这里是提示文本" :time="5000">\n  <button class="ui-btn">点击</button>\n</ui-popover>',
			code6:
				'<view class="flex-between p-3 radius bg-blue" @longpress="isShow = true">\n 长按蓝色区域\n <ui-popover tips="气泡框在这里出现哦" :show.sync="isShow" isChange>\n  <button class="ui-btn" bg="bg-white">\n   目标\n  </button>\n </ui-popover>\n</view>'
		};
	},
	onReady() {
		this.loading = false;
	},
	methods: {}
};
</script>

<style lang="scss"></style>
