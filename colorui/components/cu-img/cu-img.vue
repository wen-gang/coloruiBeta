<template>
	<view class="cu-img-box" :class="[mode]" :style="[{ backgroundImg: 'url(' + src + ')' }, { width: img_width }, { height, img_height }]">
		<image class="cu-img" :class="mode" :id="'img-' + _uid" :src="src" mode="widthFix" @load="_load" @error="_error"></image>
	</view>
</template>

<script>
export default {
	data() {
		return {
			src: '',
			load: true,
			error: false,
			ratio: 0,
			img_width: '',
			img_height: ''
		};
	},
	props: {
		url: {
			type: String,
			default: ''
		},
		mode: {
			type: String,
			default: 'width' //width cover self
		},
		width: {
			type: String,
			default: ''
		},
		height: {
			type: String,
			default: ''
		}
	},
	watch:{
		url(){
			this.$util.request(this.url).then(res => {
				this.src = this.url;
			});
		}
	},
	created() {
		this.$util.request(this.url).then(res => {
			this.src = this.url;
		});
	},
	mounted() {
		// uni.createSelectorQuery().in(this).select('#img-' + this.id).boundingClientRect(data => {
		// 	if (data != null) {
		// 		console.log('#img-' + this.id, data);
		// 		this.box = data;
		// 	} else {
		// 		console.log('#img-' + this.id + ' error');
		// 	}
		// }).exec();
	},
	methods: {
		_load(e) {
			
		},
		_error(e) {
			this.error = true;
		}
	}
};
</script>

<style lang="scss">
.cu-img-box {
	&.cover {
		display: block;
		width: 100%;
		max-width: 100%;
		.cu-img {
			display: none;
		}
	}
	&.width {
		display: block;
		max-width: 100%;
		.cu-img {
			display: block;
			width: 100%;
			max-width: 100%;
		}
	}
}
</style>
