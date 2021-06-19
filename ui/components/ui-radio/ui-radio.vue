<template>
	<view class="ui-radio" @click="_onRadioChange" :class="{ disabled: isDisabled }">
		<view class="ui-radio-input round" :class="[cur == label ? 'cur ' + ui : unbg==''?'borderss':unbg]"></view>
		<slot></slot>
	</view>
</template>

<script>
export default {
	name: 'uiRadio',
	data() {
		return {
			radioGroupDate: null
		};
	},
	props: {
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
			default: ''
		}
	},
	created() {},
	computed: {
		isGroup() {
			let parent = this.$parent;
			while (parent) {
				if (parent.$options.name != 'uiRadioGroup') {
					parent = parent.$parent;
				} else {
					this.radioGroupDate = parent;
					return true;
				}
			}
			return false;
		},
		isDisabled() {
			if (this.isGroup) {
				return this.radioGroupDate.disabled || this.disabled
			}
			return this.disabled
		},
		ui() {
			if (this.isGroup) {
				return this.radioGroupDate.bg || this.bg
			}
			return this.bg
		},
		cur: {
			get() {
				return this.isGroup ? this.radioGroupDate.value : this.value;
			}
		}
	},
	watch: {},
	methods: {
		_onRadioChange() {
			if (!this.disabled) {
				if (this.isGroup) {
					this.radioGroupDate._onRadioGroupChange(this.label);
				} else {
					this.$emit('input', this.label);
					this.$emit('change', this.label);
				}
			}
		}
	}
};
</script>

<style lang="scss">
.ui-radio {
	display: inline-block;
	margin: 0 1em 0 0.14286em;
	.ui-radio-input {
		margin: 0 0.5em 0 0.14286em;
		display: inline-block;
		width: 1.2em;
		height: 1.2em;
		vertical-align: middle;
	}
	.ui-radio-input.cur {
		position: relative;
		&::before {
			content: '';
			position: absolute;
			width: 0.5em;
			height: 0.5em;
			background-color: currentColor;
			border-radius: 50%;
			@include position-center;
		}
	}
	&:last-child{
		margin: 0 0.14286em;
	}
}
</style>
