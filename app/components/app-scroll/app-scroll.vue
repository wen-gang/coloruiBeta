<!-- PC滚动条 没设计好 慎用 （主要解决深色主题滚动条美化问题） -->
<template>
	<view
		class="ui-scroll-page"
		:class="[{ 'scroll-y': scrolly }, { 'scroll-x': scrollx }]"
		id="scrollPage"
		:style="[scrolly ? { width: width + 'px' } : { height: height + 'px' }]"
	>
		<scroll-view :scroll-y="scrolly" :scroll-x="scrollx" class="ui-scroll-box" @scroll="_scroll" :scroll-top="toTop">
			<!-- {{toTop}} -->
			<view class="ui-scroll-content" id="scrollContent" :style="[scrolly ? { width: width + 'px' } : { height: height + 'px' }]"><slot></slot></view>
		</scroll-view>

		<view class="ui-scroll-y" v-if="barheight != 0 && scrolly">
			<view
				class="ui-scroll-bar ui-BG-Main"
				:style="[{ height: barheight + 'px', top: top + 'px' }]"
				@mousedown="mousedown"
				@touchmove="TouchMove"
				@touchend="TouchEnd"
				@touchstart="TouchStart"
			></view>
		</view>
		<!-- {{barheight}}, {{scrollx}} -->
		<view class="ui-scroll-x" v-if="barwidth != 0 && scrollx">
			<view
				class="ui-scroll-bar ui-BG-Main"
				:style="[{ width: barwidth + 'px', top: top + 'px' }]"
				@mousedown="mousedown"
				@touchmove="TouchMove"
				@touchend="TouchEnd"
				@touchstart="TouchStart"
			></view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			top: 0,
			toTop: 0,
			scrollContentWidth: 0,
			scrollContentHeight: 0,
			barheight: 0,
			scrollheight: 0,
			barwidth: 0,
			scrollwidth: 0,
			touchStartY: 0,
			touchDirection: '',
			scrollTop: 0,
			stopScroll: false
		};
	},
	props: {
		topVal: {
			type: Number,
			default: 0
		},
		height: {
			type: Number,
			default: 0
		},
		width: {
			type: [String, Number],
			default: 0
		},
		scrolly: {
			type: Boolean,
			default: false
		},
		scrollx: {
			type: Boolean,
			default: false
		},
		toid: {
			type: String,
			default: ''
		}
	},
	watch: {
		scrollTop(newValue, oldValue) {
			this.setTop(newValue);
		}
	},
	mounted() {
		if (this.scrolly) {
			uni.createSelectorQuery()
				.in(this)
				.select('#scrollPage')
				.boundingClientRect(data => {
					if (data != null) {
						// console.log('scrollPage data: ', data);
						this.scrollheight = data.height;
					} else {
						console.log('scrollPage data error');
					}
				})
				.select('#scrollContent')
				.boundingClientRect(data => {
					if (data != null) {
						// console.log('scrollContent data: ', data);
						this.scrollContentHeight = data.height;

						this.barheight = (this.scrollheight / this.scrollContentHeight) * this.scrollheight;
						// console.log(this.barheight,this.scrollheight,this.scrollContentHeight);
						if (this.barheight >= this.scrollheight) {
							this.barheight = 0;
						}
						this.setTop(0);
					} else {
						console.log('scrollContent data error');
					}
				})
				.exec();
		}
		if (this.scrollx) {
			uni.createSelectorQuery()
				.in(this)
				.select('#scrollPage')
				.boundingClientRect(data => {
					if (data != null) {
						this.scrollwidth = data.width;
					} else {
						console.log('scrollPage data error');
					}
				})
				.select('#scrollContent')
				.boundingClientRect(data => {
					if (data != null) {
						this.scrollContentWidth = data.width;

						this.barwidth = (this.scrollwidth / this.scrollContentWidth) * this.scrollwidth;
						console.log('barwidth', this.barwidth, this.scrollwidth, this.scrollContentWidth);
						if (this.barwidth >= this.scrollwidth) {
							this.barwidth = 0;
						}

						console.log('barwidth', this.barwidth);
						this.setTop(0);
					} else {
						console.log('scrollContent data error');
					}
				})
				.exec();
		}

		if (this.topVal || this.topVal != 0) {
			this.stopScroll = true;
			this.toTop = this.topVal;
			setTimeout(() => {
				this.stopScroll = false;
			}, 500);
		}
		if (this.toid && this.topVal == 0) {
			uni.createSelectorQuery()
				// .in()
				.select('#' + this.toid)
				.boundingClientRect(data => {
					if (data != null) {
						// console.log('toid data: ', data);
						this.toTop = data.top - this.sys_navBar - 10;
					} else {
						console.log('scroll to id data error');
					}
				})
				.exec();
		}
	},
	methods: {
		_scroll(e) {
			if (this.stopScroll) {
				return false;
			}
			this.scrollTop = e.detail.scrollTop;
		},
		setTop(value) {
			this.$emit('appScroll', value);
			if (this.scrolly) {
				this.top = (value / this.scrollContentHeight) * this.scrollheight;
			} else {
				this.top = (value / this.scrollContentWidth) * this.scrollheight;
			}
		},
		// Touch触摸开始
		TouchStart(e) {
			console.log(e);
			this.touchStartY = e.changedTouches[0].pageY;
		},

		// Touch计算方向
		TouchMove(e) {
			console.log(e);
			let moveY = e.changedTouches[0].pageY - this.touchStartY;
			this.touchDirection = moveY > 0 ? 'top' : 'bottom';
			console.log(moveY);
		},

		// Touch触摸结束
		TouchEnd(e) {
			this.touchDirection = null;
		},

		mousedown(e) {
			console.log(e);
		}
	}
};
</script>

<style lang="scss">
.ui-scroll-page.scroll-y {
	position: relative;
	overflow: hidden;
	.ui-scroll-box {
		overflow-y: auto;
		height: inherit;
		width: calc(100% + 30px);
	}
	.ui-scroll-y {
		position: absolute;
		z-index: 999;
		width: 1px;
		right: 0;
		top: 0;
		height: inherit;
		background-color: var(--border-color);
		.ui-scroll-bar {
			position: absolute;
			width: 1px;
			right: 0;
		}
	}
}
.ui-scroll-page.scroll-x {
	position: relative;
	overflow: hidden;
	.ui-scroll-box {
		overflow-x: auto;
		width: inherit;
		height: calc(100% + 30px);
		.ui-scroll-content {
			width: max-content;
		}
	}
	.ui-scroll-x {
		position: absolute;
		z-index: 999;
		height: 1px;
		left: 0;
		bottom: 0;
		width: inherit;
		background-color: var(--border-color);
		.ui-scroll-bar {
			position: absolute;
			height: 1px;
			bottom: 0;
		}
	}
}
</style>
