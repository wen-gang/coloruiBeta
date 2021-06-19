<template>
	<view class="ui-menu" :class="[bg,{'border-top border-bottom':!radius},{ radius: radius },{ 'radius-lg': radius == 'lg' }, { shadow: shadow }, { 'shadow-sm': shadow == 'sm' }, { 'shadow-lg': shadow == 'lg' }]">
		<slot></slot>
	</view>
</template>

<script>
export default {
	name: 'uiRadio',
	data() {
		return {
			 
		};
	},
	props: {
		bg: {
			type: String,
			default: 'ui-BG'
		},
		shadow: {
			type: [Boolean, String],
			default: false
		},
		radius: {
			type: [Boolean, String],
			default: false
		},
	},
	created() {},
	computed: {
		 
	},
	watch: {},
	methods: {
	 
	}
};
</script>

<style lang="scss">
.ui-menu {
	 
}
</style>
