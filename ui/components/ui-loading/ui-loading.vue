<template>
	<view class="ui-loading-box" :class="[size ? `text-${size}` : ``, { loop: slots.default||img },ui]">
		<view class="ui-loading">
			<view class="ui-loading-cut">
				<view class="ui-loading-loop" :class="[color == true ? 'color' : `default ${color}`]"/>
			</view>
		</view>
		<view class="ui-loading-content">
			<image :src="img" mode="aspectFill" class="ui-loading-image" v-if="img"/>
			<view class="ui-loading-icon">
				<slot></slot>
			</view>
		</view>
	</view>
</template>

<script>
let _this = null;
export default {
	name: 'UiLoading',
	data() {
		return {  
		};
	},
	props: {
		ui: {
			type: String,
			default: ''
		},
		size: {
			type: String,
			default: ''
		},
		img: {
			type: String,
			default: ''
		},
		color: {
			type: [Boolean, String],
			default: ''
		},
	},
	watch: {
		String: {
			handler(val) {},
			immediate: true
		}
	},
	created() {
		_this = this;
	},
	methods: {}
};
</script>

<style lang="scss">
.ui-loading-box {
	display: inline-block;
	vertical-align: middle;
	.ui-loading {
		width: 1em;
		height: 1em;
		margin: 0 0.5em;
		animation: loading_spin 0.7s linear infinite;
		.ui-loading-cut {
			//position: relative;
			width: 0.5em;
			height: 1em;
			overflow: hidden;
			position: absolute;
			top: 0;
			left: 0;
			.ui-loading-loop {
				box-sizing: border-box;
				width: 1em;
				height: 1em;
				color: var(--ui-TC-3);
				border: 4rpx solid currentColor;
				border-radius: 50%;
				border-left-color: transparent;
				border-bottom-color: transparent;
				position: absolute;
				top: 0;
				left: 0;
				background: none;
				margin: 0;
				&.default {
					animation: loop_spin 2s cubic-bezier(0.4, 0, 0.22, 1) infinite;
				}
				&.color {
					animation: loop_spin_color 2s cubic-bezier(0.4, 0, 0.22, 1) infinite;
				}
			}
		}
	}

	&.loop {
		position: relative;
		.ui-loading {
			position: relative;
			z-index: 1;
			width: 6em;
			height: 6em;
			margin: 0;
			.ui-loading-cut {
				width: 3em;
				height: 6em;
				.ui-loading-loop {
					width: 6em;
					height: 6em;
				}
			}
		}

		.ui-loading-content {
			position: absolute;
			border-radius: 50%;
			width: 6em;
			height: 6em;
			left: 0;
			top: 0;
			border: 4rpx solid var(--ui-BG-4);
			.ui-loading-image,.ui-loading-icon {
				width: 80% !important;
				height: 80% !important;
				margin: 10%;
				@include  flex-center;
			}
		}
	}
}

@keyframes loading_spin {
	0% {
		transform: rotate(0deg);
	}
	100% {
		transform: rotate(360deg);
	}
}
@keyframes loop_spin {
	0% {
		transform: rotate(0);
	}
	50% {
		transform: rotate(-140deg);
	}
	100% {
		transform: rotate(0);
	}
}
@keyframes loop_spin_color {
	0% {
		transform: rotate(0);
		color: $green;
	}
	50% {
		transform: rotate(-140deg);
		color: $blue;
	}
	100% {
		transform: rotate(0);
		color: $red;
	}
}
</style>
