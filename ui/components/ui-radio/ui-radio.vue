<template>
	<view class="ui-radio" @click="_onRadioClick" :class="[{ disabled: isDisabled },ui]">
		<view class="ui-radio-input round" :class="[isChecked ? 'cur ' + bg : unbg==''?'borderss':unbg]"></view>
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
				default: ''
			},
			preventClick: {
				type: Boolean,
				default: false
			},
			clearable: {
				type: Boolean,
				default: false
			},
			checked: {
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
			isClearable() {
				if (this.isGroup) {
					return this._getParent().clearable || this.clearable
				}
				return this.clearable
			},
			isChecked() {
				let parent = this._getParent()
				if ((this.isGroup && parent.value == this.label) || (!this.isGroup && this.currentValue == this.label)) {
					return true
				}
				return this.checked
			},
		},
		watch: {
			value: {
				handler(value) {
					this.currentValue = value
				},
				immediate: true
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
			_onRadioClick() {
				if (!this.isDisabled && !this.preventClick) {
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
				} else if (this.isClearable) {
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
				width: 45%;
				height: 45%;
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
					width: 1em;
					height: 1em;
					font-size: 0%;
					background-color: transparent; 
				}
			}
			.ui-radio-input.cur { 
				&::before {					
					width: 1em;
					height: 1em;
					font-size: 80%;
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
					width: 50%;
					height: 50%;
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
	}
</style>
