<template>
	<ui-sys title="入门指南">
		<ui-card shadow :title="item.title" :desc="item.desc" fixedTitle  v-for="(item, index) in list" :key="index">
			<view class="p-4">
				目录结构
			</view>
		</ui-card>
	</ui-sys>
</template>

<script>
	export default {
		data() {
			return {
				list:[{
					img:"https://oss.colorui.org/cos/img/qtrr8.png"
				}]
			}
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
