<template>
	<view>
		<view class="flex-between align-baseline" :class="tpl">
			<view class="cui-search icon-lg text-gray px-3"></view> <input :type="type" :placeholder="placeholder" :value="key">
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				key:''
			}
		},
		props: {
			type: {
				type: String,
				default: 'text'
			},
			tpl: {
				type: String,
				default: ''
			},
			placeholder: {
				type: String,
				default: ''
			},
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
