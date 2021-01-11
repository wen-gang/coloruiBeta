<template>
	<view>
		<cu-fixed bottom class="touch-none" index="1000">
			<view class="text-right p-4">
				<view class="cu-btn box-bg shadow icon lg touch-all" @tap="clickBtn(demo)"><text :class="demo?'cui-file-text':'cui-demo'"></text></view>
			</view>
		</cu-fixed>
	</view>
</template>

<script>
export default {
	name: 'demoBtn',
	data() {
		return {};
	},
	props: {
		demo: {
			type: Boolean,
			default: true
		},
		link: {
			type: Boolean,
			default: false
		},
		url: {
			type: String,
			default: '../demo'
		},
	},
	methods:{
		clickBtn(){
			if(this.link){
				if(this.demo){
					uni.navigateTo({
						url:this.url
					})
				} else {
					this._back();
				}
			} else {
				this.$emit('update:demo',!this.demo)
			}
		}
	}
};
</script>

<style></style>
