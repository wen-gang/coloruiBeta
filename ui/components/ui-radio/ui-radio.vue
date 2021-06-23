<template>
	<view class="ui-radio" @click="_onRadioClick" :class="{ disabled: isDisabled }">
		<view class="ui-radio-input round" :class="[isChecked ? 'cur ' + ui : unbg==''?'borderss':unbg]"></view>
		<slot></slot>
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
		},
		preventClick: {
			type: Boolean,
			default: false
		},
		clearable: {
			type: Boolean,
			default: false
		}
	},
	computed: {
		isGroup() {
			let parent = this._getParent()
			if (parent) {
				return true
			}
			return false
		},
		isDisabled() {
			if (this.isGroup) {
				return this._getParent().disabled || this.disabled
			}
			return this.disabled
		},
		isChecked() {
			let parent = this._getParent()
			if ((this.isGroup && parent.value == this.label) || (!this.isGroup && this.currentValue == this.label)) {;
				return true
			}
			return false
		},
		ui() {
			let parent = this._getParent()
			if (this.isGroup) {
				return parent.bg || this.bg
			}
			return this.bg
		}
	},
	watch: {
		value: {
			immediate: true,
			handler(value) {
				this.currentValue = value
			}
		}
	},
	created() {
		let parent = this._getParent()
		if (parent) {
			this._setValue(parent.value)
		}
	},
	methods: {
		_getParent() {
			let parent = this.$parent
			if (parent) {
				let parentName = parent.$options.name
				while (parentName !== 'UiRadioGroup') {
					parent = parent.$parent
					if (parent) {
						parentName = parent.$options.name
					} else {
						return null
					}
				}
				return parent
			}
			return null
		},
		// _onRadioChange() {
		// 	if (!this.disabled) {
		// 		if (this.isGroup) {
		// 			this.radioGroupDate._onRadioGroupChange(this.label);
		// 		} else {
		// 			this.$emit('input', this.label);
		// 			this.$emit('change', this.label);
		// 		}
		// 	}
		// },
		_onRadioClick() {
			if (!this.isDisabled && !this.preventClick) {
				this._choose()
			}
		},
		select() {
			if (!this.isDisabled) {
				this._choose()
			}
		},
		_choose() {
			if (this.currentValue != this.label) {
				this.currentValue = this.label
				this.$emit('input', this.currentValue)
				this.$emit('change', this.currentValue)
				if (this.isGroup) {
					let parent = this._getParent()
					parent._onRadioChange(this.label)
				}
			} else if (this.clearable) {
				this.currentValue = null
				this.$emit('input', this.currentValue)
				this.$emit('change', this.currentValue)
				if (this.isGroup) {
					let parent = this._getParent()
					parent._onRadioChange(null)
				}
			}
		},
		_setValue(groupValue) {
			this.currentValue = groupValue
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
