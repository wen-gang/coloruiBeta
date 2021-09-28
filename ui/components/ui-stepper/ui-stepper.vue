<template>
	<view class="stepper" :class="[ui]">
		<button class="ui-btn round icon sm" :class="[bg]" @click="_calcValue('minus')" :disabled="inputValue <= min || disabled">
			<view class="cicon-move"></view>
		</button>
		<input :disabled="disabled" v-model="inputValue" type="number" @blur="_onBlur"/>
		<button class="ui-btn round icon sm" :class="[bg]" @click="_calcValue('plus')" :disabled="inputValue >= max || disabled">
			<view class="cicon-add"></view>
		</button> 
	</view>
</template>

<script>
	export default {
		name: 'UiStepper',
		data() {
			return {
				inputValue: 0
			};
		},
		props: {
			ui: {
				type: String,
				default: ''
			},
			value: {
				type: [Number, String],
				default: 1
			},
			min: {
				type: Number,
				default: 0
			},
			max: {
				type: Number,
				default: 100
			},
			step: {
				type: Number,
				default: 1
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
		watch: {
			value(val) {
				this.inputValue = +val
			},
			inputValue(newVal, oldVal) {
				if (+newVal !== +oldVal) {
					this.$emit('change', newVal)
				}
			}
		},
		created() {
			this.inputValue = +this.value
		},
		methods: {
			_calcValue(type) {
				if (this.disabled) {
					return
				}
				const scale = this._getDecimalScale()
				let value = this.inputValue * scale
				let step = this.step * scale
				if (type === 'minus') {
					value -= step
				} else if (type === 'plus') {
					value += step
				}
				if (value < this.min || value > this.max) {
					return
				}
				this.inputValue = value / scale
			},
			_getDecimalScale() {
				let scale = 1
				// 浮点型
				if (~~this.step !== this.step) {
					scale = Math.pow(10, (this.step + '').split('.')[1].length)
				}
				return scale
			},
			_onBlur(event) {
				let value = event.detail.value
				if (!value) {
					this.inputValue = 0
					return
				}
				value = +value
				if (value > this.max) {
					value = this.max
				} else if (value < this.min) {
					value = this.min
				}
				this.inputValue = value
			}
		}
	}
</script>

<style>
	.stepper {
		display: flex;
		align-items: center;
	}

	.stepper input {
		text-align: center;
		width: auto;
		max-width: 3em;
		padding: .5em;
	}
</style>
