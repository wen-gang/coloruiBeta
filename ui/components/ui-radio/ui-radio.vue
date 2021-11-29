<template>
	<view class="ui-radio" @click="_onRadioClick" :class="[{ disabled: isDisabled }, { img: src }, ui]">
		<view class="ui-radio-input" :class="[isChecked ? 'cur ' + bg : unbg, src ? 'radius' : 'round']" v-if="!none"></view>
		<image class="ui-radio-img radius" v-if="src" :src="src" mode="aspectFill"></image>
		<view class="ui-radio-content" v-else><slot></slot></view>
		<view class="ui-radio-bg round" v-if="_has(ui, 'card')" :class="[isChecked ? 'cur ' + bg : '']"></view>
	</view>
</template>

<script>
export default {
	name: 'UiRadio',
	data() {
		return {
			currentValue: null
		};
	},
	props: {
		ui: {
			type: String,
			default: ''
		},
		value: {
			type: [String, Number, Boolean]
		},
		label: {
			type: [String, Number, Boolean]
		},
		disabled: {
			type: Boolean,
			default: false
		},
		bg: {
			type: String,
			default: 'ui-BG-Main'
		},
		unbg: {
			type: String,
			default: 'borderss'
		},
		src: {
			type: String,
			default: ''
		},
		clearable: {
			type: Boolean,
			default: false
		},
		none: {
			type: Boolean,
			default: false
		}
	},
	computed: {
		isGroup() {
			let parent = this._getParent('UiRadioGroup');
			if (parent) {
				return true;
			}
			return false;
		},
		isDisabled() {
			if (this.isGroup) {
				return this._getParent('UiRadioGroup').disabled || this.disabled;
			}
			return this.disabled;
		},
		isClearable() {
			if (this.isGroup) {
				return this._getParent('UiRadioGroup').clearable || this.clearable;
			}
			return this.clearable;
		},
		isChecked() {
			let parent = this._getParent('UiRadioGroup');
			if ((this.isGroup && parent.value == this.label) || (!this.isGroup && this.currentValue == this.label)) {
				return true;
			}
			return false;
		}
	},
	watch: {
		value: {
			handler(value) {
				this.currentValue = value;
			},
			immediate: true
		}
	},
	created() {
		let parent = this._getParent('UiRadioGroup');
		if (parent) {
			this._setValue(parent.value);
		}
	},
	methods: {
		_onRadioClick() {
			if (!this.isDisabled) {
				this._choose();
			}
		},
		_choose() {
			if (this.currentValue != this.label) {
				this.currentValue = this.label;
				this.$emit('input', this.currentValue);
				this.$emit('change', this.currentValue);
				if (this.isGroup) {
					let parent = this._getParent('UiRadioGroup');
					parent._onRadioChange(this.label);
				}
			} else if (this.isClearable) {
				this.currentValue = null;
				this.$emit('input', this.currentValue);
				this.$emit('change', this.currentValue);
				if (this.isGroup) {
					let parent = this._getParent('UiRadioGroup');
					parent._onRadioChange(null);
				}
			}
		},
		_setValue(groupValue) {
			this.currentValue = groupValue;
		}
	}
};
</script>

<style lang="scss">
.ui-radio {
	display: inline-flex;
	align-items: center;
	margin: 0 1em 0 0.14286em;

	.ui-radio-input {
		margin: 0 0.5em 0 0.14286em;
		display: inline-block;
		width: 18px;
		height: 18px;
		vertical-align: middle;
		&::before {
			content: '';
			position: absolute;
			width: 0%;
			height: 0%;
			background-color: currentColor;
			border-radius: 50%;
			@include position-center;
		}
	}

	.ui-radio-input.cur {
		position: relative;
		&::before {
			width: 10px;
			height: 10px;
			transition: $transition-base;
		}
	}

	&:last-child {
		margin: 0 0.14286em;
	}
	&.check {
		.ui-radio-input {
			&::before {
				font-family: 'colorui';
				content: '\e69f';
				width: 18px;
				height: 18px;
				font-size: 0%;
				background-color: transparent;
			}
		}
		.ui-radio-input.cur {
			&::before {
				width: 18px;
				height: 18px;
				font-size: 1em;
				transform: scale(0.8);
				text-align: center;
				line-height: 18px;
			}
		}
	}
	&.line {
		.ui-radio-input.cur {
			&::before {
				width: calc(100% - 2px);
				height: calc(100% - 2px);
				background-color: var(--ui-BG);
			}
			&::after {
				content: '';
				position: absolute;
				width: 10px;
				height: 10px;
				background-color: inherit;
				border-radius: 50%;
				@include position-center;
			}
		}
	}
	&.lg {
		.ui-radio-input {
			font-size: 18px;
		}
	}
	&.img {
		position: relative;
		margin: 0 0.28572em 0 0.28572em;
		.ui-radio-input {
			width: 42px;
			height: 42px;
			border-radius: 0px;
			position: absolute;
			margin: 0;
			left: -1px;
			top: -1px;
			// opacity: 0;
			&::before {
				width: 40px;
				height: 40px;
				border-radius: $radius;
			}
			&.cur {
				width: 44px;
				height: 44px;
				top: -2px;
				left: -2px;
				border-radius: 7px !important;
				opacity: 0.8;
			}
		}
		.ui-radio-img {
			// position: absolute;
			width: 40px;
			height: 40px;
			display: block;
			overflow: hidden;
			border-radius: 10px;
			// opacity: 0.2;
		}
	}
	&.card {
		display: flex;
		margin: 30rpx;
		padding: 30rpx;
		position: relative;
		border-radius: $radius !important;
		flex-direction: row-reverse;
		justify-content: space-between;
		.ui-radio-bg {
			content: '';
			position: absolute;
			width: 200%;
			height: 200%;
			transform: scale(0.5);
			border-radius: #{$radius * 2} !important;
			z-index: 0;
			left: 0;
			top: 0;
			transform-origin: 0 0;
			background-color: var(--ui-BG);
		}
		.ui-radio-input {
			position: relative;
			z-index: 1;
			margin-right: 0;
		}
		.ui-radio-bg::after {
			content: '';
			position: absolute;
			width: calc(200% - 16px);
			height: calc(200% - 16px);
			transform: scale(0.5);
			transform-origin: 0 0;
			// border: 1px solid inherit;
			background-color: var(--ui-BG) !important;
			left: 4px;
			top: 4px;
			border-radius: #{$radius * 2 + 8} !important;
			z-index: 0;
		}
		.ui-radio-content {
			position: relative;
			z-index: 1;
			display: flex;
			align-items: center;
			flex: 1;
		}
	}
}
</style>
