<template>
	<view class="cu-btn-box" :class="[sys_mode]">
		<button class="cu-btn" :disabled="disabled||loading" :class="[bgClass,textClass,
				size,{round:round},{radius:radius},{icon:icon},{block:block},{shadow:shadow},
			{'shadow-sm':shadow=='sm'},{'shadow-lg':shadow=='lg'},{border:border},{'border-sm':border=='sm'},{'border-lg':border=='lg'}]"
		 :style="[{ backgroundColor: bgCss },{ color: textCss }]">
			<slot></slot>
			<text class="cui-loading1 icon-spin ml-3" v-if="loading"></text>
		</button>
	</view>
</template>

<script>
	export default {
		name: 'cuSwitch',
		data() {
			return {

			};
		},
		props: {
			bg: {
				type: String,
				default: 'bg-main-a'
			},
			text: {
				type: String,
				default: ''
			},
			size: {
				type: String,
				default: 'df'
			},
			round: {
				type: Boolean,
				default: false
			},
			radius: {
				type: Boolean,
				default: false
			},
			disabled: {
				type: Boolean,
				default: false
			},
			loading: {
				type: Boolean,
				default: false
			},
		},
		created() {

		},
		watch: {

		},
		mounted() {

		},
		methods: {

		}
	};
</script>

<style lang="scss">
	
</style>
