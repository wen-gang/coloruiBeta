<template>
	<view class="ui-menu" :class="[uiclass,bg,{'border-top border-bottom':!radius},{ 'sm-border': smBorder },{ 'border': border },{ 'radius': radius },{ 'radius-lg': radius == 'lg' }, { shadow: shadow }, { 'shadow-sm': shadow == 'sm' }, { 'shadow-lg': shadow == 'lg' }]">
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
		uiclass:{
			type: String,
			default: ''
		},
		bg: {
			type: String,
			default: 'ui-BG'
		},
		border: {
			type: [Boolean, String],
			default: false
		},
		smBorder: {
			type: [Boolean, String],
			default: false
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
