<template>
	<ui-sys title="《英雄联盟》头像素材">
		<view class="ui-grid ui-cols-5 p-1">
			<view class="p-1 ui-item text-center" v-for="(item, index) in 100" :key="index">
				<image :src="`https://cos.color-ui.com/avatar/lol-avatar/${1000 + index + 1}.jpg`" mode="widthFix" class="w-100 block  radius"></image>
			</view>
		</view>
	</ui-sys>
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
