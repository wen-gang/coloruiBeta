<template>
	<view class="ui-radio-group"><slot></slot></view>
</template>

<script>
export default {
	name: 'uiRadioGroup',
	data() {
		return {};
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
		}
	},
	methods: {
		_onRadioGroupChange(res) {
			if (!this.disabled) {
				this.$emit('input', res);
				this.$emit('change', res);
			}
		}
	}
};
</script>

<style></style>
