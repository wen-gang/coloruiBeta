<template>
	<view class="cu-popover" :class="popover ? 'show' : 'hide'">
		<view class="cu-popover-button" :id="'popover-button-' + _uid" :style="{ zIndex: index + sys_layer }" @tap="popoverClick" @mouseleave="mouseleave" @mouseover="mouseover">
			<slot></slot>
		</view>
		<view class="cu-popover-box" :style="BoxStyle">
			<view class="cu-popover-content-box" :id="'popover-content-' + _uid" :style="contentStyle">
				<view class="cu-popover-content radius text-a" :class="bgClass" :style="{ zIndex: index + sys_layer + 2 }">
					<view class="p-3 text-sm" v-if="tips">{{ tips }}</view>
					<block v-else><slot name="content" /></block>
				</view>
				<view class="cu-popover-arrow" :class="bgClass" :style="arrowStyle"></view>
			</view>
		</view>
		<view class="cu-popover-mask" :class="mask?'bg-mask-50':''" :style="{ zIndex: index + sys_layer - 1 }" @tap="popover = false" v-if="(popover&&tips==''&&time==0)||mask"></view>
	</view>
</template>

<script>
export default {
	name: 'cuPopover',
	data() {
		return {
			popover: false,
			BoxStyle: '',
			contentStyle: '',
			arrowStyle: '',
			button: {},
			content: {}
		};
	},
	props: {
		tips: {
			type: String,
			default: ''
		},
		mask: {
			type: Boolean,
			default: false
		},
		show: {
			type: [Boolean,String],
			default: 'change'
		},
		hover: {
			type: Boolean,
			default: false
		},
		index: {
			type: Number,
			default: 0
		},
		time: {
			type: Number,
			default: 0
		}
	},
	watch: {
		popover(val) {
			this.computedQuery(uni.getSystemInfoSync().windowWidth,uni.getSystemInfoSync().windowHeight);
			if (val) {
				if (this.tips != ''||this.time>0) {
					setTimeout(() => {
						this.popover = false;
					}, this.time==0?3000:this.time);
				}
				this.sys_layer = this.sys_layer + 100;
			} else {
				this.sys_layer = this.sys_layer - 100;
			}
			this.$emit('update:show',val)
		},
		show(val) {
			this.popover = val;
		}
	},
	mounted() {
		this.$nextTick(() => {
			this.computedQuery(uni.getSystemInfoSync().windowWidth,uni.getSystemInfoSync().windowHeight);
			uni.onWindowResize((res) => {
				this.computedQuery(res.size.windowWidth,res.size.windowHeight);
			})
		})
	},
	methods: {
		computedQuery(w,h) {
			uni.createSelectorQuery()
				.in(this)
				.select('#popover-button-' + this._uid)
				.boundingClientRect(button => {
					if (button != null) {
						this.button = button;
					} else {
						console.log('popover-button-' + this._uid + ' data error');
					}
				})
				.select('#popover-content-' + this._uid)
				.boundingClientRect(content => {
					if (content != null) {
						this.content = content;
						let button = this.button;
						//contentStyle
						let contentStyle = '';
						let arrowStyle = '';
						this.BoxStyle = `width:${w}px; left:-${button.left}px;z-index: ${this.index + this.sys_layer + 102}`;
						// 判断气泡在上面还是下面
						if (button.bottom < h/2) {
							// '下';
							contentStyle = contentStyle + `top:10px;`;
							arrowStyle = arrowStyle + `top:${-5}px;`;
						} else {
							// '上';
							contentStyle = contentStyle + `bottom:${button.height + 10}px;`;
							arrowStyle = arrowStyle + `bottom:${-5}px;`;
						}
						
						// 判断气泡箭头在左中右
						let btnCenter = button.right - button.width / 2;
						let contentCenter = content.right - content.width / 2;
						if ((btnCenter < w/3 && content.width > btnCenter )|| (content.width > w/2 && btnCenter < w/2)) {
							// '左';
							contentStyle = contentStyle + `left:10px;`;
							arrowStyle = arrowStyle + `left:${btnCenter - 17}px;`;
						} else if ((btnCenter > w/6*4 && content.width > w-btnCenter)|| (content.width > w/2 && btnCenter > w/2)) {
							// '右';
							contentStyle = contentStyle + `right:10px;`;
							arrowStyle = arrowStyle + `right:${w - btnCenter - 17}px;`;
						} else {
							// '中';
							contentStyle = contentStyle + `left:${button.left -  content.width / 2 + button.width / 2}px;`;
							arrowStyle = arrowStyle + `left:0px;right:0px;margin:auto;`;
						}
						
						this.arrowStyle = arrowStyle + `z-index:${this.index + this.sys_layer + 1};`;
						this.contentStyle = contentStyle + `z-index:${this.index + this.sys_layer + 2};`;
						
					} else {
						console.log('popover-content-' + this._uid + ' data error');
					}
				})
				.exec();
		},
		popoverClick() {
			if (this.tips == '') {
				if (this.show == 'change') {
					this.popover = !this.popover;
				}
			} else {
				this.popover = true;
			}
		},
		mouseover() {
			if (this.hover) {
				this.popover = true;
			}
		},
		mouseleave() {
			if (this.hover) {
				this.popover = false;
			}
		}
	}
};
</script>

<style lang="scss"></style>
