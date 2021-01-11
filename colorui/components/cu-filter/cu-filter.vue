<template>
	<view class="cu-filter" :class="name">
		<view class="content text-white"><slot></slot></view>

		<view class="cu-filter-box" :class="[bgClass, name]" :style="[{ backgroundColor: bgCss }]"></view>
		<view class="cu-filter-bg" :class="[bgClass, name]" :style="[{ backgroundColor: bgCss }]"></view>
		<view class="cu-filter-shadow" :class="[name]"></view>
		<view class="cu-filter-border"></view>
		<view class="cu-filter-borders"></view>
	</view>
</template>

<script>
export default {
	data() {
		return {};
	},
	props: {
		bg: {
			type: String,
			default: 'bg-main-a'
		},
		subColor: {
			type: String,
			default: 'main-b-bg'
		},
		name: {
			type: String,
			default: ''
		}
	},
	methods: {}
};
</script>

<style lang="scss">
.cu-filter {
	position: relative;
	.content {
		position: relative;
		z-index: 1;
	}
	.cu-filter-box {
		position: absolute;
		width: 100%;
		height: 100%;
		@include position-center;
		filter: opacity(20%);
		-webkit-backdrop-filter: blur(5px);
		backdrop-filter: blur(5px);
	}
	.cu-filter-bg {
		position: absolute;
		width: 100%;
		height: 100%;
		@include position-center;
		filter: opacity(40%) brightness(12+0%);
		-webkit-backdrop-filter: blur(5px);
		backdrop-filter: blur(5px);
		transform: translateX(1px) translateY(5px);
	}
	.cu-filter-shadow {
		position: absolute;
		width: 100%;
		height: 100%;
		@include position-center;
		background: none;
		box-shadow: 1px 5px 0px 0px rgba(0,0,0,.05);
	}
	.cu-filter-border {
		width: 200%;
		height: 200%;
		position: absolute;
		top: 0;
		left: 0;
		transform: scale(0.5);
		transform-origin: 0 0;
		pointer-events: none;
		box-sizing: border-box;
		border-radius: inherit;
		// opacity: 0.2;
		border: 1px solid var(--border-color);
	}
	.cu-filter-borders {
		width: 200%;
		height: 200%;
		position: absolute;
		top: 0;
		left: 0;
		transform: scale(0.5) translateX(2px) translateY(6px);
		transform-origin: 0 0;
		pointer-events: none;
		box-sizing: border-box;
		border-radius: inherit;
		// border: 1px solid var(--border-color);
		opacity: 0.1;
	}
}
</style>
