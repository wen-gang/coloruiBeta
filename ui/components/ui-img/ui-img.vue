<template>
	<view class="ui-img-box" @click="_preview()" :id="'image-' + _uid" :class="[ui, mode]" :style="[{ backgroundImage: 'url(' + src + ')' }, { width: imgW }, { height: imgH }]">
		<image class="ui-img" :class="mode" :id="'img-' + _uid" :src="src" mode="aspectFill" @load="_load" @error="_error"></image>
		<view class="ui-img-load" v-if="isLoad"><ui-loading color size="xl"></ui-loading></view>
	</view>
</template>

<script>
export default {
	name:'UiImg',
	data() {
		return {
			isLoad: true,
			error: false,
			detail: {},
			imgW: '',
			imgH: ''
		};
	},
	props: {
		src: {
			type: String,
			default: ''
		},
		ui: {
			type: String,
			default: ''
		},
		mode: {
			type: String,
			default: 'cover' //width cover self
		},
		width: {
			type: String,
			default: ''
		},
		height: {
			type: String,
			default: ''
		},
		preview: {
			type: Boolean,
			default: false
		},
		urls: {
			type: Array,
			default(){
				return []
			}
		},
		current: {
			type: Number,
			default: 0
		},
	},
	watch: {
		width: {
			handler(val) {
				this.imgW = val;
			},
			immediate: true
		},
		height: {
			handler(val) {
				this.imgH = val;
			},
			immediate: true
		}
	},
	mounted() { 
		this.$nextTick(() => {
			// #ifdef H5
			uni.onWindowResize(res => {
				this._computed(this.detail);
			});
			// #endif
		});
	},
	methods: {
		_load(e) {
			this.detail = e.detail;
			this._computed(e.detail);
			this.isLoad = false;
		},
		_computed({ width, height }) {
			if (this.width == '' && this.height == '') {
				uni.createSelectorQuery()
					.in(this)
					.select('#image-' + this._uid)
					.boundingClientRect(data => {
						if (data != null) {
							this.imgH = (data.width * height) / width + 'px';
						} else {
							console.log('image-' + this._uid + ' data error');
						}
					})
					.exec();
				return false;
			}
			if (this.width != '' && this.height == '') {
				this.imgH = (this.width * height) / width + 'px';
				return false;
			}
			if (this.width == '' && this.height != '') {
				this.imgW = (this.height * width) / height + 'px';
				return false;
			}
		},
		_computedWidth(width) {
			return width + 'px';
		},
		_computedHeight(height) {
			return height + 'px';
		},
		_error(e) {
			this.error = true;
		},
		_preview() {
			if (!this.preview) {
				return false;
			} 
			uni.previewImage({
				urls: this.urls.length<1?[this.src]:this.urls,
				current:this.current,
				longPressActions: {
					itemList: ['发送给朋友', '保存图片', '收藏'],
					success: function(data) {
						console.log('选中了第' + (data.tapIndex + 1) + '个按钮,第' + (data.index + 1) + '张图片');
					},
					fail: function(err) {
						console.log(err.errMsg);
					}
				}
			});
		},
	}
};
</script>

<style lang="scss">
.ui-img-box {
	position: relative;
	width: 100%;
	height: 280rpx;
	max-width: 100%;
	.ui-img-load {
		position: absolute;
		width: 100%;
		height: 100%;
		border-radius: inherit;
		z-index: 1;
		background-color: var(--ui-BG-4);
		@include flex-center;
	}
	.ui-img {
		border-radius: inherit;
		display: none;
	}
	&.cover {
		background-size: cover;
	}
	// &.cover {
	// 	display: block;
	// 	width: 100%;
	// 	max-width: 100%;
	// 	.ui-img {
	// 		display: none;
	// 	}
	// }
	// &.width {
	// 	display: block;
	// 	max-width: 100%;
	// 	.ui-img {
	// 		display: block;
	// 		width: 100%;
	// 		max-width: 100%;
	// 	}
	// }
}
</style>
