<template>
	<view class="ui-radio-group" :class="[ui]">
		<slot></slot>
	</view>
</template>

<script>
	export default {
		name: 'UiRadioGroup',
		data() {
			return {};
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
			clearable: {
				type: Boolean,
				default: false
			}
		},
		watch: {
			value: {
				handler(value) {
					this._deepSetValue(this.$children)
				}
			}
		},
		methods: {
			_onRadioChange(label) {
				this.$emit('input', label)
				this.$emit('change', label)
			},
			_deepSetValue(array) {
				if (Array.isArray(array)) {
					array.forEach((child) => {
						let childName = child.$options.name
						if (childName == 'UiRadio') {
							if (typeof child._setValue == 'function') {
								child._setValue(this.value)
							}
						} else if (child.$children) {
							this._deepSetValue(child.$children)
						}
					})
				}
			}
		}
	};
</script>

<style></style>
