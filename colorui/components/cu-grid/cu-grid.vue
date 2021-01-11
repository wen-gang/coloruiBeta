<template>
	<view class="cu-grid-box" :class="['p-' + padding]">
		<view :class="['out-' + out]">
			<view class="cu-grid" :class="column?'column':'grid'">
				<slot></slot>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'cuGrid',
		data() {
			return {
				
			}
		},
		props: {
			out: {
				type: String,
				default: '0'
			},
			padding: {
				type: [String,Number],
				default: 0
			},
			column: {
				type: Boolean,
				default: false
			},
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
