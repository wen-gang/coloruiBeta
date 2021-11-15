<template>
	<ui-sys title="壁纸">
		<view class="p-3 ui-grid ui-cols-2">
			<view class="p-3 ui-item" v-for="(item, index) in list" :key="index">
				<ui-img preview ui="radius border" :src="item" :urls="list" :current="index"></ui-img>
			</view>
		</view>
	</ui-sys>
</template>

<script>
export default {
	data() {
		return {
			list:[]
		};
	},
	created() {
		let i=1;
		for(i;i<15;i++){
			this.$set(this.list,i-1,`https://cos.color-ui.com/wallpaper/10${i  < 10 ? '0' + (i ) : i }.jpg`);
		}
	},
	methods: {}
};
</script>

<style></style>
