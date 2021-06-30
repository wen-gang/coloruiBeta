<template>
	<view class="ui-form-group">
		<view class="ui-form-title">
			{{title}}
		</view>
		<slot></slot>
	</view>
</template>

<script>
	export default {
		name: 'UiFormGroup',
		data() {
			return {

			}
		},
		props: {
			ui: {
				type: String,
				default: ''
			},
			title: {
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
