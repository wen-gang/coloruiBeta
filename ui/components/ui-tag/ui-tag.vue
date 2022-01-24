<template>
	<view class="ui-tag" :class="[ui, bg,{'img':src}, {'empty':!slots.default&&info==''},{'icon':icon},{'badge':badge},badge?'badge-'+badge:'']">
		<image class="tag-img" v-if="src" :src="src" mode="aspectFill"></image>
		<view class="">
			<block v-if="slots.default"><slot></slot></block>
			<block v-else>{{info}}</block>
		</view>
	</view>
</template>

<script>
	export default {
	name: 'UiTag',
		data() {
			return {
				
			};
		},
		props: {
			ui: {
				type: String,
				default: ''
			},
			bg: {
				type: String,
				default: 'ui-BG-3'
			},
			info: {
				type: String,
				default: ''
			},
			src: {
				type: String,
				default: ''
			},
			badge: {
				type: [Boolean,String],
				default: false
			},
			icon: {
				type: [Boolean],
				default: false
			},
		}
	}
</script>

<style lang="scss">
.ui-tag {
	font-size: calc(28rpx + var(--textSize));
	vertical-align: middle;
	position: relative;
	display: inline-flex;
	align-items: center;
	justify-content: center;
	box-sizing: border-box;
	padding: .5833em .833em;
	white-space: nowrap; 
	border-radius: $radius;
	line-height: initial;
	margin: 0 .14286em;
	&.xs {
		transform: scale(0.7);
		padding: .2em .5em;
		margin: 0;
	}
	&.sm {
		transform: scale(0.8);
		margin: 0 0.02em 0 0;
	}
	&.lg {
		font-size: calc(#{map-get($fontsize, lg)}rpx + var(--textSize)) !important;
	}
	&.xl {
		font-size: calc(#{map-get($fontsize, xl)}rpx + var(--textSize)) !important;
	}
	&.xxl {
		font-size: calc(#{map-get($fontsize, xxl)}rpx + var(--textSize)) !important;
	}
	&.img {
		padding: .5833em .833em .5833em .5em;
		line-height: 1;
		.tag-img {
			margin: -.5833em .5em -.5833em -.5em;
			width: 2.1666em;
			height: 2.1666em;
			border-radius: $radius 0 0 $radius;
		}
	}
	&.badge {
		border-radius: 200rpx;
		position: absolute;
		z-index: 1;
		margin: 0;
		font-size: 2em;
		top: 0;
		right: 0;
		line-height: 1;
		padding: 0.4em 0.6em 0.3em;
		transform: scale(0.3) translateX(0.5em) translatey(-0.6em);
		transform-origin: 100% 0;
		&.badge-br{
			top: auto;
			bottom: 0;
			right: 0;
			transform: scale(0.3) translateX(0.5em) translatey(0.4em);
			transform-origin: 100% 100%;
		}
		&.badge-bl{
			top: auto;
			bottom: 0;
			right: auto;
			left: 0;
			transform: scale(0.3) translateX(-0.5em) translatey(0.4em);
			transform-origin: 0 100%;
		}
		&.badge-tl{
			right: auto;
			left: 0;
			transform: scale(0.3) translateX(-0.5em) translatey(-0.6em);
			transform-origin: 0 0;
		}
	}

	&.badge:not([class*='bg-']) {
		background-color: $red !important;
		color: $white;
	}

	&.empty {
		padding: 0px;
		width: 40px;
		height: 40px;
	}
	&.icon { 
		padding: 0.4em;
	}
	&:first-child{
		margin-left: 0;
	}
	&:last-child{
		margin-right: 0;
	}
}
</style>
