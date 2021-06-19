<template>
	<view class="ui-loading-box" :class="[size ? `text-${size}` : ``, { loop: loop }]">
		<view class="ui-loading">
			<view class="ui-loading-cut"><view class="ui-loading-loop" :class="[color == true ? 'color' : `default text-${color}`]"></view></view>
		</view>
		<view class="ui-loading-content"><slot></slot></view>
	</view>
</template>

<script>
let _this = null;
export default {
	data() {
		return {
			loop: false
		};
	},
	props: {
		size: {
			type: String,
			default: ''
		},
		color: {
			type: [Boolean, String],
			default: false
		},
		Number: {
			type: Number,
			default: 0
		},
		Array: {
			type: Array,
			default() {
				return [];
			}
		},
		Object: {
			type: Object,
			default() {
				return {};
			}
		}
	},
	watch: {
		String: {
			handler(val) {},
			immediate: true
		}
	},

	mounted() {
		this.loop = this.$scopedSlots.$hasNormal;
	},
	created() {
		_this = this;
	},
	methods: {}
};
</script>

<style lang="scss">
.ui-loading-box {
	.ui-loading {
		width: 1em;
		height: 1em;
		margin: 0 0.5em;
		animation: loading_spin 0.7s linear infinite;
		.ui-loading-cut {
			position: relative;
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
		/deep/ .ui-loading-content {
			position: absolute;
			border-radius: 50%;
			width: 6em;
			height: 6em;
			left: 0;
			top: 0;
			border: 4rpx solid var(--ui-BG-3);
			image {
				width: 80% !important;
				height: 80% !important;
				margin: 10%;
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
