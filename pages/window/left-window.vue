<template>
	<scroll-view scroll-y style="height: calc(100vh - 50px);">
		<view class="p-3" v-for="(item,index) in 100" :key="index">
			{{index}}
		</view>
	</scroll-view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
