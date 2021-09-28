<template>
	<ui-sys title="按钮">
		<view class="ui-container">
			<ui-title depth="2" title="默认" isIcon></ui-title>
			<view class="p-3 flex-between"><button class="ui-btn">按钮</button></view>
			<ui-title depth="2" title="颜色" isIcon></ui-title>
			<view class="p-3 flex-between">
				<button class="ui-btn bg-orange">按钮</button>
				<button class="ui-btn bg-orange-thin">按钮</button>
				<button class="ui-btn bg-orange-gradient">按钮</button>
				<button class="ui-btn bg-orange-light">按钮</button>
			</view>
			<view class="p-3 flex-between">
				<button class="ui-btn bg-blue">按钮</button>
				<button class="ui-btn bg-blue-thin">按钮</button>
				<button class="ui-btn bg-blue-gradient">按钮</button>
				<button class="ui-btn bg-blue-light">按钮</button>
			</view>
			<view class="p-3 flex-between">
				<button class="ui-btn bg-green">按钮</button>
				<button class="ui-btn bg-green-thin">按钮</button>
				<button class="ui-btn bg-green-gradient">按钮</button>
				<button class="ui-btn bg-green-light">按钮</button>
			</view>
			<ui-title depth="2" title="尺寸" isIcon></ui-title>
			<view class="p-3 flex-between">
				<button class="ui-btn sm">按钮</button>
				<button class="ui-btn df">按钮</button>
				<button class="ui-btn lg">按钮</button>
				<button class="ui-btn xl">按钮</button>
			</view>
			<ui-title depth="2" title="形状" isIcon></ui-title>
			<view class="p-3 flex-between">
				<button class="ui-btn">按钮</button>
				<button class="ui-btn">按钮</button>
				<button class="ui-btn round">按钮</button>
				<button class="ui-btn icon"><text class="cicon-link"></text></button>
			</view>

			<ui-title depth="2" title="块状" isIcon></ui-title>
			<view class="p-3"><button class="ui-btn block">按钮</button></view>

			<ui-title depth="2" title="阴影" isIcon></ui-title>
			<view class="p-4"><button class="ui-btn block shadow-sm">按钮</button></view>
			<view class="p-4"><button class="ui-btn block shadow">按钮</button></view>
			<view class="p-4"><button class="ui-btn block bg-blue shadow shadow-blue">按钮</button></view>
			<view class="p-4"><button class="ui-btn block shadow-lg">按钮</button></view>
			<ui-title depth="2" title="边框" isIcon></ui-title>

			<view class="p-3 flex-between">
				<button class="ui-btn border bg-none">按钮</button>
				<button class="ui-btn borders bg-none">按钮</button>
				<button class="ui-btn borderss bg-none">按钮</button>
				<button class="ui-btn dashed bg-none">按钮</button>
			</view>
			<view class="p-3 flex-between">
				<button class="ui-btn bg-orange-thin">按钮</button>
				<button class="ui-btn border border-orange  bg-orange-thin">按钮</button>
				<button class="ui-btn borders border-orange bg-orange-thin">按钮</button>
				<button class="ui-btn borderss border-orange bg-orange-thin">按钮</button>
			</view>
			<view class="p-3 flex-between">
				<button class="ui-btn bg-blue-light">按钮</button>
				<button class="ui-btn border border-blue bg-blue-light">按钮</button>
				<button class="ui-btn borders border-blue bg-blue-light">按钮</button>
				<button class="ui-btn borderss border-blue bg-blue-light">按钮</button>
			</view>
			<view class="p-3 flex-between">
				<button class="ui-btn dashed border-green bg-green-thin">按钮</button>
				<button class="ui-btn dashed border-green bg-green-thin">按钮</button>
				<button class="ui-btn dashed border-green bg-green-thin">按钮</button>
				<button class="ui-btn dashed border-green bg-green-light">按钮</button>
			</view>
			<view class="p-3 flex-between">
				<button class="ui-btn border border-red bg-red-light">按钮</button>
				<button class="ui-btn border border-yellow bg-yellow-light">按钮</button>
				<button class="ui-btn border border-green bg-green-light">按钮</button>
				<button class="ui-btn border border-blue bg-blue-light">按钮</button>
			</view>
			<view class="p-3 flex-between">
				<button class="ui-btn icon bg-none border border-blue"><text class="cicon-link text-blue"></text></button>
				<button class="ui-btn icon lg borders bg-none border-bluegreen"><text class="cicon-link text-green"></text></button>
				<button class="ui-btn icon round xl borderss bg-none border-yellow"><text class="cicon-link text-yellow"></text></button>
			</view>

			<ui-title depth="2" title="无效" isIcon></ui-title>
			<view class="p-3 flex-between">
				<button class="ui-btn" disabled>按钮</button>
				<button class="ui-btn" disabled>按钮</button>
				<button class="ui-btn" disabled>按钮</button>
				<button class="ui-btn" disabled>按钮</button>
			</view>

			<ui-title depth="2" title="图标" isIcon></ui-title>
			<view class="p-3"><button class="ui-btn block">按钮  <text class="cicon-ellipse"></text></button></view> 
			<view class="p-3"><button class="ui-btn block">按钮 <text class="cicon-ellipse"></text> </button></view>
			<view class="p-3"><button class="ui-btn xl">按钮 <text class="cicon-ellipse"></text> </button><button class="ui-btn xxl">按钮 <text class="cicon-ellipse"></text> </button></view>
			
			<view class="p-3"><button class="ui-btn block">按钮 </button></view> 
			<view class="p-3"><button class="ui-btn block">按钮 </button></view>
			<view class="p-3"><button class="ui-btn xl">按钮 </button><button class="ui-btn xxl">按钮 </button></view>
			
			
			<ui-title depth="2" title="加载" isIcon></ui-title>
			<view class="p-3"><button class="ui-btn block">按钮 <text class="cicon-loader-fill icon-spin"></text> </button></view>
			<view class="p-3"><button class="ui-btn block">按钮 <ui-loading color></ui-loading> </button></view>
			
			<view class="p-3"><button class="ui-btn xl">按钮 <text class="cicon-loader-fill icon-spin"></text> </button><button class="ui-btn xxl">按钮 <text class="cicon-loader-fill icon-spin"></text> </button></view>
			
			<ui-title depth="2" title="填充无样式" isIcon></ui-title>
			<view class="position-relative p-5"><button class="ui-btn none-style">sx</button></view>
		</view>
	</ui-sys>
</template>

<script>
let _this = null;
export default {
	data() {
		return {
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

<style></style>
