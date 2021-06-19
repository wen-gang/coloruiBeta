<template>
	<ui-sys :loading="loading" title="导航栏" doc>
		<view class="ui-container">
			<ui-title title="简介" depth="2" isIcon toc></ui-title>
			<view class="paragraph">自定义顶部导航栏,适用于所有页面,小程序有返回胶囊样式可以使用。</view>
			<!-- <view class="paragraph">默认导航栏带有返回按钮,自动判断当前页面是否为首页而改变图标和跳转(请在<ui-code>@/colorui/js/mixin.js</ui-code>配置首页)</view> -->

			<!-- 带返回 -->
			<ui-title title="带返回" depth="2" isIcon toc></ui-title>
			<view class="paragraph">
				带有返回按钮的导航栏,自动判断当前页面是否为首页而改变图标和跳转(请在
				<ui-code>@/colorui/js/mixin.js</ui-code>
				配置首页)
				<!-- 仅图标 -->
				<ui-title title="仅图标" depth="3" isIcon toc>
					<navigator class="text-main-a px-2" url="/pages/docment/navbar/demo?id=1" slot="more">
						演示
						<text class="uicon-arrow ml-2"></text>
					</navigator>
				</ui-title>
			</view>
			<view class="text-center" v-if="demo"><image src="https://image.weilanwl.com/web/ozgly.jpg" mode="widthFix" style="width: 100%;"></image></view>
			<ui-code tag="pre" lang="html" :content="code1" v-else></ui-code>
			<!-- 自定义返回文本 -->
			<view class="paragraph">
				<ui-title title="自定义返回文本" depth="3" isIcon toc>
					<navigator class="text-main-a px-2" url="/pages/docment/navbar/demo?id=2" slot="more">
						演示
						<text class="uicon-arrow ml-2"></text>
					</navigator>
				</ui-title>
			</view>
			<view class="text-center" v-if="demo"><image src="https://image.weilanwl.com/web/i4ux8.jpg" mode="widthFix" style="width: 100%;"></image></view>
			<ui-code tag="pre" lang="html" :content="code2" v-else></ui-code>

			<!-- 有阴影 -->
			<view class="paragraph">
				<ui-title title="有阴影" depth="2" isIcon toc>
					<navigator class="text-main-a px-2" url="/pages/docment/navbar/demo?id=3" slot="more">
						演示
						<text class="uicon-arrow ml-2"></text>
					</navigator>
				</ui-title>
			</view>
			<view class="text-center" v-if="demo"><image src="https://image.weilanwl.com/web/7i87w.jpg" mode="widthFix" style="width: 100%;"></image></view>
			<ui-code tag="pre" lang="html" :content="code3" v-else></ui-code>
			<!-- Api -->
			<block v-if="!demo">
				<ui-title title="参数" depth="2" isIcon toc></ui-title>
				<view class="ui-table table-border table-full box-bg">
					<view class="ui-table-header">
						<view class="ui-table-tr box-bg-sub">
							<view class="ui-table-th" style="width: 120rpx;">属性名</view>
							<view class="ui-table-th" style="width: 100rpx;">类型</view>
							<view class="ui-table-th" style="width: 150rpx;">默认值</view>
							<view class="ui-table-th" style="width: 150rpx;">说明</view>
						</view>
					</view>
					<view class="ui-table-body">
						<view class="ui-table-tr">
							<view class="ui-table-td">back</view>
							<view class="ui-table-td">Boolean</view>
							<view class="ui-table-td">true</view>
							<view class="ui-table-td">是否显示返回</view>
						</view>
						<view class="ui-table-tr">
							<view class="ui-table-td">backtext</view>
							<view class="ui-table-td">String</view>
							<view class="ui-table-td">''</view>
							<view class="ui-table-td">返回文本</view>
						</view>
						<view class="ui-table-tr">
							<view class="ui-table-td">status</view>
							<view class="ui-table-td">String</view>
							<view class="ui-table-td">''</view>
							<view class="ui-table-td">
								状态栏文本颜色
								<view class="text-c">light / dark （其他字符串视为黑色）</view>
							</view>
						</view>
						<view class="ui-table-tr">
							<view class="ui-table-td">opacity</view>
							<view class="ui-table-td">Boolean</view>
							<view class="ui-table-td">false</view>
							<view class="ui-table-td">是否开启滑动渐变</view>
						</view>
						<view class="ui-table-tr">
							<view class="ui-table-td">opacityChange</view>
							<view class="ui-table-td">Boolean</view>
							<view class="ui-table-td">false</view>
							<view class="ui-table-td">开启滑动渐变后 文本样式是否翻转</view>
						</view>
						<view class="ui-table-tr">
							<view class="ui-table-td">opacityBg</view>
							<view class="ui-table-td">Boolean</view>
							<view class="ui-table-td">false</view>
							<view class="ui-table-td">开启滑动渐变后 返回按钮是否添加背景</view>
						</view>
						<view class="ui-table-tr">
							<view class="ui-table-td">fixed</view>
							<view class="ui-table-td">Boolean</view>
							<view class="ui-table-td">false</view>
							<view class="ui-table-td">是否浮动占位,为true时浮动不占位</view>
						</view>
						<view class="ui-table-tr">
							<view class="ui-table-td">shadow</view>
							<view class="ui-table-td">Boolean,
							String</view>
							<view class="ui-table-td">false</view>
							<view class="ui-table-td">
								是否开启阴影
								<view class="text-c">true / false / 'sm' / 'lg'</view>
							</view>
						</view>
						<view class="ui-table-tr">
							<view class="ui-table-td">capsule</view>
							<view class="ui-table-td">Boolean</view>
							<view class="ui-table-td">false</view>
							<view class="ui-table-td">是否开启胶囊返回</view>
						</view>
						<view class="ui-table-tr">
							<view class="ui-table-td">bg</view>
							<view class="ui-table-td">String</view>
							<view class="ui-table-td">'box-bg'</view>
							<view class="ui-table-td">
								背景颜色
								<navigator class="text-main-a inline" url="/pages/docment/rules/rules">《使用规则》</navigator>
							</view>
						</view>
						<view class="ui-table-tr">
							<view class="ui-table-td">img</view>
							<view class="ui-table-td">String</view>
							<view class="ui-table-td">''</view>
							<view class="ui-table-td">如果bg == bg-img 则加载对应的图片</view>
						</view>
					</view>
				</view>
				<ui-title title="插槽" depth="2" isIcon toc></ui-title>
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
							<view class="ui-table-td">自定义整条bar,需要将参数custom设置为true</view>
						</view>
						<view class="ui-table-tr">
							<view class="ui-table-td">left</view>
							<view class="ui-table-td">自定义bar的左边内容(默认带有back的部分,完全自定义左边部分请将参数back设置为false)</view>
						</view>
						<view class="ui-table-tr">
							<view class="ui-table-td">center</view>
							<view class="ui-table-td">自定义bar的中间内容</view>
						</view>
						<view class="ui-table-tr">
							<view class="ui-table-td">right</view>
							<view class="ui-table-td">
								自定义bar的右边内容(支付宝小程序不支持),排序从右开始的弹性布局,小程序端会自动生成胶囊的安全区域。做小程序及跨端的时候right表现的不是很理想，请以项目实际情况自定义right部分
							</view>
						</view>
					</view>
				</view>
			</block>
		</view>
		<!-- <demo-btn :demo.sync="demo"></demo-btn> -->
	</ui-sys>
</template>

<script>
let _this = null;
export default {
	data() {
		return {
			demo: false,
			loading: true,
			isShow: false,
			code1: '<ui-navbar> </ui-navbar>',
			code2: '<ui-navbar backtext="text"> </ui-navbar>',
			code3: '<ui-navbar shadow> </ui-navbar> \n<ui-navbar shadow="sm"> </ui-navbar> \n<ui-navbar shadow="lg"> </ui-navbar>'
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
<style></style>
