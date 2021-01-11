<template>
	<cu-sys :loading="loading" title="标题" doc>
		<view class="cu-container">
			<cu-title title="简介" depth="2" isIcon toc></cu-title>
			<view class="paragraph">标题组件可以快速构建一个等级标题。包含多种样式。</view>
			<!-- Api -->
			<block v-if="!demo">
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
							<view class="cu-table-td">depth</view>
							<view class="cu-table-td">Number</view>
							<view class="cu-table-td">0</view>
							<view class="cu-table-td">
								标题等级
								<view class="text-c">
									1 ~ 6 不同等级文字和边距也不一样，对应着HTML的
									<cu-code content="<h1></h1>..."></cu-code>
									标签
								</view>
							</view>
						</view>
						<view class="cu-table-tr">
							<view class="cu-table-td">title</view>
							<view class="cu-table-td">String</view>
							<view class="cu-table-td">''</view>
							<view class="cu-table-td">标题文字</view>
						</view>
						<view class="cu-table-tr">
							<view class="cu-table-td">desc</view>
							<view class="cu-table-td">String</view>
							<view class="cu-table-td">''</view>
							<view class="cu-table-td">辅助文字</view>
						</view>
						<view class="cu-table-tr">
							<view class="cu-table-td">isIcon</view>
							<view class="cu-table-td">Boolean</view>
							<view class="cu-table-td">false</view>
							<view class="cu-table-td">是否显示前缀图标</view>
						</view>
						<view class="cu-table-tr">
							<view class="cu-table-td">hasDot</view>
							<view class="cu-table-td">Boolean</view>
							<view class="cu-table-td">false</view>
							<view class="cu-table-td">是否显示圆点</view>
						</view>
						<view class="cu-table-tr">
							<view class="cu-table-td">hasLine</view>
							<view class="cu-table-td">Boolean</view>
							<view class="cu-table-td">false</view>
							<view class="cu-table-td">是否显示下划线</view>
						</view>
						<view class="cu-table-tr">
							<view class="cu-table-td">tpl</view>
							<view class="cu-table-td">String</view>
							<view class="cu-table-td">'default'</view>
							<view class="cu-table-td">
								样式
								<view class="text-c">default / stack / center-column</view>
							</view>
						</view>
						<view class="cu-table-tr">
							<view class="cu-table-td">align</view>
							<view class="cu-table-td">String</view>
							<view class="cu-table-td">'left'</view>
							<view class="cu-table-td">
								对齐方式
								<view class="text-c">left / center / right</view>
							</view>
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
							<view class="cu-table-td">'bg-none'</view>
							<view class="cu-table-td">
								背景颜色
								<navigator class="text-main-a inline" url="/pages/docment/rules/rules">《使用规则》</navigator>
							</view>
						</view>
					</view>
				</view>
				<cu-title title="插槽" depth="2" isIcon toc></cu-title>
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
							<view class="cu-table-td">标题内容</view>
						</view>
						<view class="cu-table-tr">
							<view class="cu-table-td">more</view>
							<view class="cu-table-td">更多内容</view>
						</view>
						<view class="cu-table-tr">
							<view class="cu-table-td">icon</view>
							<view class="cu-table-td">图标内容</view>
						</view>
					</view>
				</view>
			</block>
		<cu-title class="mt-3" title="基础" desc="basic">
			<block slot="icon"><view class="text-green cui-title"></view></block>
		</cu-title>
		<cu-title class="mt-3" title="基础" desc="basic" isIcon></cu-title>
		
		<cu-title class="mt-3" title="基础" desc="basic"></cu-title>
		<cu-title class="mt-3" title="圆点" desc="dot" hasDot></cu-title>
		<cu-title class="mt-3" title="短线" desc="line" hasLine></cu-title>
		
		<cu-title class="mt-3" title="基础" desc="basic" tpl="stack"></cu-title>
		<cu-title class="mt-3" title="圆点" desc="dot" tpl="stack" hasDot></cu-title>
		<cu-title class="mt-3" title="短线" desc="line" tpl="stack" hasLine></cu-title>
		
		<cu-title class="mt-3" title="基础" desc="basic" align="center"></cu-title>
		<cu-title class="mt-3" title="圆点" desc="dot" align="center" hasDot></cu-title>
		<cu-title class="mt-3" title="短线" desc="line" align="center" hasLine></cu-title>
		
		<cu-title class="mt-3" title="基础" desc="basic" align="center" tpl="stack"></cu-title>
		<cu-title class="mt-3" title="圆点" desc="dot" align="center" tpl="stack" hasDot></cu-title>
		<cu-title class="mt-3" title="短线" desc="line" align="center" tpl="stack" hasLine></cu-title>
		
		<cu-title class="mt-3" title="精选推荐" titleColor="text-blue" descColor="text-cyan" desc="Carefully chosen" tpl="center-column" hasDot></cu-title>
		<cu-title class="mt-3" title="精选推荐" titleColor="text-blue" tpl="center-column" hasDot></cu-title>
		
		<cu-title class="mt-3" title="猜你喜欢" titleColor="text-red" descColor="text-orange" desc="Guess you like" tpl="center-column" hasLine></cu-title>
		<cu-title class="mt-3" title="猜你喜欢" titleColor="text-red" tpl="center-column" hasLine></cu-title>
		</view>
		<demo-btn :demo.sync="demo"></demo-btn>
		
	</cu-sys>
</template>

<script>
let _this = null;
export default {
	data() {
		return {
			demo: false,
			loading: true
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
