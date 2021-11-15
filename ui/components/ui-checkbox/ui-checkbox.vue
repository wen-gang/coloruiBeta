<template>
	<view class="ui-checkbox" @click="_onCheckboxClick" :class="[{ disabled: isDisabled }, ui]">
		<view class="ui-checkbox-input radius" :class="[isChecked ? 'cur ' + bg : unbg, isIndeterminate ? 'indeterminate ' + bg : unbg]"></view>
		<view class="ui-checkbox-content"><slot></slot></view>
		<view class="ui-checkbox-bg radius" v-if="_has(ui, 'card')" :class="[isChecked ? 'cur ' + bg : '', isIndeterminate ? 'indeterminate ' + bg : '']"></view>
	</view>
</template>

<script>
export default {
	name: 'UiCheckbox',
	data() {
		return {
			currentValue: null,
			isIndeterminate:false,
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
		indeterminate: {
			type: Boolean,
			default: false
		},
		all: {
			type: Boolean,
			default: false
		}
	},
	computed: {
		isGroup() {
			let parent = this._getParent('UiCheckboxGroup');
			if (parent) {
				return true;
			}
			return false;
		},
		isDisabled() {
			if (this.isGroup) {
				return this._getParent('UiCheckboxGroup').disabled || this.disabled;
			}
			return this.disabled;
		},
		isChecked() {
			let parent = this._getParent('UiCheckboxGroup');
			if (typeof this.currentValue == 'boolean') {
				return this.currentValue;
			} else {
				return parent.group.indexOf(this.value) != -1;
			}
		}
	},
	watch: {
		value: {
			handler(value) {
				this.currentValue = value;
			},
			immediate: true
		},
		indeterminate: {
			handler(value) {
				this.isIndeterminate = value;
			},
			immediate: true
		}
	},
	created() {
		let parent = this._getParent('UiCheckboxGroup');
		if (parent) {
			this._setValue(parent.value);
		}
	},
	methods: { 
		_onCheckboxClick() {
			if (!this.isDisabled) {
				this._choose();
			}
		},
		_choose() {
			this.$emit('input', !this.isChecked);
			this.$emit('change', !this.isChecked);
			if (this.isGroup) {
				let parent = this._getParent('UiCheckboxGroup');
				if(this.all){
					parent._onCheckboxAll(!this.isChecked);
				} else {					
					parent._onCheckboxChange(this.value);
				}
			} else {
				this.isIndeterminate = false;
			}
		},
		_setValue(groupValue) {
			this.currentValue = groupValue.indexOf(this.value) != -1;
		}
	}
};
</script>

<style lang="scss">
.ui-checkbox {
	display: inline-flex;
	align-items: center;
	margin: 0 1em 0 0.14286em;
	cursor: pointer;
	.ui-checkbox-input {
		margin: 0 0.5em 0 0.14286em;
		display: inline-block;
		width: 1.2em;
		height: 1.2em;
		vertical-align: middle;
		position: relative;
		&::before {
			font-family: 'colorui';
			content: '\e69f';
			width: 1em;
			height: 1em;
			font-size: 0%;
			background-color: transparent;
			@include position-center;
		}
		&.indeterminate::before {
			content: '\e768';
			width: 1em;
			height: 1em;
			font-size: 80%;
		}
	}

	&.round {
		.ui-checkbox-input,
		.ui-checkbox-input::after {
			border-radius: $round-pill !important;
		}
	}
	.ui-checkbox-input.cur {
		&::before {
			content: '\e69f';
			width: 1em;
			height: 1em;
			font-size: 80%;
		}
	}

	&:last-child {
		margin: 0 0.14286em;
	}
	&.lg {
		.ui-checkbox-input {
			font-size: 18px;
		}
	}
}
</style>
