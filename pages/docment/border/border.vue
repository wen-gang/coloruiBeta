<template>
	<cu-sys :loading="loading" title="边框" doc>
		<view class="cu-container">
			<!-- 简介 -->
			<cu-title title="简介" depth="2" isIcon toc></cu-title>
			<view class="paragraph">容器的边框样式,使用Class控制。适用于任何组件元素。</view>
			<view class="paragraph">
				边框默认颜色是根据当前主题来设置的，在
				<cu-code>@/colorui/scss/theme/{themeName}.scss</cu-code>
				有变量
				<cu-code>--border-color</cu-code>
				控制。
			</view>

			<view class="blockquote text-sm">为实现移动端边框达到1px物理像素,Colorui采用的是伪元素缩放的方案,请注意容器的定位类型以及伪元素的使用。</view>
			<!-- 实线 -->
			<cu-title title="实线" depth="2" isIcon toc></cu-title>
			<view class="paragraph">
				为容器添加class
				<cu-code>.border</cu-code>
				来使容器添加实线边框。
			</view>
			<view class="box-bg radius text-center" v-if="demo">
				<view class="p-3"><view class="border p-3">四周全边框</view></view>
				<view class="p-3"><view class="border-top p-3">顶部边框</view></view>
				<view class="p-3"><view class="border-right p-3">右边边框</view></view>
				<view class="p-3"><view class="border-bottom p-3">底部边框</view></view>
				<view class="p-3"><view class="border-left p-3">左边边框</view></view>

				<view class="p-3"><view class="borders p-3">四周全粗边框</view></view>
				<view class="p-3"><view class="borders-top p-3">顶部粗边框</view></view>
				<view class="p-3"><view class="borders-right p-3">右边粗边框</view></view>
				<view class="p-3"><view class="borders-bottom p-3">底部粗边框</view></view>
				<view class="p-3"><view class="borders-left p-3">左边粗边框</view></view>
			</view>
			<view class="cu-table table-border table-full box-bg" v-else>
				<view class="cu-table-header">
					<view class="cu-table-tr box-bg-sub">
						<view class="cu-table-th" style="width: 300rpx;">类名</view>
						<view class="cu-table-th">说明</view>
					</view>
				</view>
				<view class="cu-table-body">
					<view class="cu-table-tr">
						<view class="cu-table-td">.border</view>
						<view class="cu-table-td">四周全边框</view>
					</view>
					<view class="cu-table-tr">
						<view class="cu-table-td">.border-top</view>
						<view class="cu-table-td">顶部边框</view>
					</view>
					<view class="cu-table-tr">
						<view class="cu-table-td">.border-right</view>
						<view class="cu-table-td">右边边框</view>
					</view>
					<view class="cu-table-tr">
						<view class="cu-table-td">.border-bottom</view>
						<view class="cu-table-td">底部边框</view>
					</view>
					<view class="cu-table-tr">
						<view class="cu-table-td">.border-left</view>
						<view class="cu-table-td">左边边框</view>
					</view>
					<view class="cu-table-tr">
						<view class="cu-table-td">.borders</view>
						<view class="cu-table-td">四周全粗边框</view>
					</view>
					<view class="cu-table-tr">
						<view class="cu-table-td">.borders-top</view>
						<view class="cu-table-td">顶部粗边框</view>
					</view>
					<view class="cu-table-tr">
						<view class="cu-table-td">.borders-right</view>
						<view class="cu-table-td">右边粗边框</view>
					</view>
					<view class="cu-table-tr">
						<view class="cu-table-td">.borders-bottom</view>
						<view class="cu-table-td">底部粗边框</view>
					</view>
					<view class="cu-table-tr">
						<view class="cu-table-td">.borders-left</view>
						<view class="cu-table-td">左边粗边框</view>
					</view>
				</view>
			</view>

			<!-- 虚线 -->
			<cu-title title="虚线" depth="2" isIcon toc></cu-title>
			<view class="paragraph">
				为容器添加class
				<cu-code>.dashed</cu-code>
				来实现边框虚线。
			</view>
			<view class="box-bg radius text-center" v-if="demo">
				<view class="p-3"><view class="dashed p-3">四周全虚线边框</view></view>
				<view class="p-3"><view class="dashed-top p-3">顶部虚线边框</view></view>
				<view class="p-3"><view class="dashed-right p-3">右边虚线边框</view></view>
				<view class="p-3"><view class="dashed-bottom p-3">底部虚线边框</view></view>
				<view class="p-3"><view class="dashed-left p-3">左边虚线边框</view></view>

				<view class="p-3"><view class="dasheds p-3">四周全粗虚线边框</view></view>
				<view class="p-3"><view class="dasheds-top p-3">顶部粗虚线边框</view></view>
				<view class="p-3"><view class="dasheds-right p-3">右边粗虚线边框</view></view>
				<view class="p-3"><view class="dasheds-bottom p-3">底部粗虚线边框</view></view>
				<view class="p-3"><view class="dasheds-left p-3">左边粗虚线边框</view></view>
			</view>
			<view class="cu-table table-border table-full box-bg" v-else>
				<view class="cu-table-header">
					<view class="cu-table-tr box-bg-sub">
						<view class="cu-table-th" style="width: 300rpx;">类名</view>
						<view class="cu-table-th">说明</view>
					</view>
				</view>
				<view class="cu-table-body">
					<view class="cu-table-tr">
						<view class="cu-table-td">.dashed</view>
						<view class="cu-table-td">四周全虚线边框</view>
					</view>
					<view class="cu-table-tr">
						<view class="cu-table-td">.dashed-top</view>
						<view class="cu-table-td">顶部虚线边框</view>
					</view>
					<view class="cu-table-tr">
						<view class="cu-table-td">.dashed-right</view>
						<view class="cu-table-td">右边虚线边框</view>
					</view>
					<view class="cu-table-tr">
						<view class="cu-table-td">.dashed-bottom</view>
						<view class="cu-table-td">底部虚线边框</view>
					</view>
					<view class="cu-table-tr">
						<view class="cu-table-td">.dashed-left</view>
						<view class="cu-table-td">左边虚线边框</view>
					</view>

					<view class="cu-table-tr">
						<view class="cu-table-td">.dasheds</view>
						<view class="cu-table-td">四周全粗虚线边框</view>
					</view>
					<view class="cu-table-tr">
						<view class="cu-table-td">.dasheds-top</view>
						<view class="cu-table-td">顶部粗虚线边框</view>
					</view>
					<view class="cu-table-tr">
						<view class="cu-table-td">.dasheds-right</view>
						<view class="cu-table-td">右边粗虚线边框</view>
					</view>
					<view class="cu-table-tr">
						<view class="cu-table-td">.dasheds-bottom</view>
						<view class="cu-table-td">底部粗虚线边框</view>
					</view>
					<view class="cu-table-tr">
						<view class="cu-table-td">.dasheds-left</view>
						<view class="cu-table-td">左边粗虚线边框</view>
					</view>
				</view>
			</view>

			<!-- 颜色 -->
			<cu-title title="颜色" depth="2" isIcon toc></cu-title>
			<view class="paragraph">
				添加包含颜色名的Class来控制边框颜色。
				<cu-code>.border-{color}</cu-code>
				<navigator class="text-main-a px-2" url="/pages/docment/navbar/demo?id=2">
					颜色表
					<text class="cui-arrow ml-2"></text>
				</navigator>
			</view>
			<view class="box-bg radius text-center" v-if="demo">
				<view class="p-3"><view class="border border-red p-3">红色边框</view></view>
				<view class="p-3"><view class="borders border-blue p-3">蓝色边框</view></view>
				<view class="p-3"><view class="dasheds border-orange p-3">橙色虚线边框</view></view>
				<view class="p-3"><view class="borders main-a-border p-3">主颜色边框</view></view>
			</view>
			<view class="cu-table table-border table-full box-bg" v-else>
				<view class="cu-table-header">
					<view class="cu-table-tr box-bg-sub">
						<view class="cu-table-th" style="width: 300rpx;">类名</view>
						<view class="cu-table-th">说明</view>
					</view>
				</view>
				<view class="cu-table-body">
					<view class="cu-table-tr">
						<view class="cu-table-td">.border-{color}</view>
						<view class="cu-table-td">
							边框颜色
							<view class="mt-1 text-sm">
								不管实线还是虚线都是以
								<cu-code>.border</cu-code>
								开头
							</view>
						</view>
					</view>
					<view class="cu-table-tr">
						<view class="cu-table-td">.border-main-{value}</view>
						<view class="cu-table-td">主题主色的边框</view>
					</view>
				</view>
			</view>

			<!-- 虚线边框动画 -->
			<cu-title title="虚线边框动画" depth="2" isIcon toc></cu-title>
			<view class="paragraph">
				为容器添加class
				<cu-code>.dasheds-shine</cu-code>
				来实现虚线边框动画。
			</view>
			<view class="paragraph">
				虚线边框动画容器占用了
				<cu-code>:after</cu-code>
				<cu-code>:before</cu-code>
				伪元素。
			</view>
			<view class="box-bg radius text-center" v-if="demo">
				<view class="p-3"><view class="dasheds-shine p-3">粗虚线边框动画</view></view>
				<view class="p-3"><view class="dashed-shine border-blue p-3">蓝色虚线边框动画</view></view>
			</view>
			<view class="cu-table table-border table-full box-bg" v-else>
				<view class="cu-table-header">
					<view class="cu-table-tr box-bg-sub">
						<view class="cu-table-th" style="width: 300rpx;">类名</view>
						<view class="cu-table-th">说明</view>
					</view>
				</view>
				<view class="cu-table-body">
					<view class="cu-table-tr">
						<view class="cu-table-td">.dashed-shine</view>
						<view class="cu-table-td">虚线边框动画</view>
					</view>
					<view class="cu-table-tr">
						<view class="cu-table-td">.dasheds-shine</view>
						<view class="cu-table-td">粗虚线边框动画</view>
					</view>
				</view>
			</view>
		</view>
		<demo-btn :demo.sync="demo"></demo-btn>
	</cu-sys>
</template>

<script>
export default {
	data() {
		return {
			demo: true,
			loading: true,
			isShow: false
		};
	},
	onReady() {
		this.loading = false;
	},
	methods: {}
};
</script>

<style></style>
