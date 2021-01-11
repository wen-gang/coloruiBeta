<template>
	<view class="cu-griditem" :class="['col-' + col,'row-' + row]" :style="[{ backgroundColor: bgCss }]">
		<view class="content" :class="['p-' + padding]"><slot></slot></view>
		<view class="skeleton" v-if="row>0"></view>
	</view>
</template>

<script>
	export default {
		name: 'cuGriditem',
		data() {
			return {
				
			}
		},
		props: {
			col: {
				type: [String,Number],
				default: 1
			},
			row: {
				type: [String,Number],
				default: 0
			},
			padding: {
				type: [String,Number],
				default: 0
			},
		},
		methods: {
			
		}
	}
</script>

<style lang="scss">

</style>
