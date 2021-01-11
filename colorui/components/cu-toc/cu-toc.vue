<template>
	<view class="cu-toc-box">
		<view class="cu-toc-content" :class="{'doc-mode':open}"><slot></slot></view>
		<match-media :min-width="1025" v-if="open">
			<cu-fixed sticky width="240">
				<view class="cu-toc" :class="tocToggle ? 'show' : 'hide'">
					<view v-for="(item, index) in tocList" :key="index" class="item text-cut" :class="['child' + item.depth, { cur: scrollCur == item.id }]">
						<text class="cu-link" @tap="changeInto(item)">{{ item.text }}</text>
					</view>
				</view>
			</cu-fixed>

			<view class="cu-toc-btn" :class="tocToggle ? 'show' : 'hide'">
				<view class="cu-btn" @tap="tocToggleChange">
					<text class="cui-bookmark"></text>
					<text class="cui-close-round"></text>
				</view>
			</view>
			<view class="cu-toc-bg" :class="tocToggle ? 'show' : 'hide'" @tap="tocToggleChange"></view>
		</match-media>
	</view>
</template>

<script>
export default {
	name: 'cu-toc',
	data() {
		return {
			scrollTop: 0,
			scrollCur: 0,
			tocList: [],
			tocToggle: false,
			stop: false
		};
	},
	props: {
		open: {
			type: Boolean,
			default: false
		},
		toc: {
			type: [Array, String],
			default() {
				return [];
			}
		},
		height: {
			type: [Number, String],
			default: 0
		}
	},
	created() {
		if(this.open){
			uni.$on('_scrollTop_' + this.$root._uid, top => {
				this.setCur(top);
			});
			uni.$on('toclists-' + this.$root._uid, data => {
				let tocList = this.tocList;
				tocList.push(data);
				this.tocList = tocList;
				this.scrollCur = this.tocList[0].id;
			});
		}
	},
	destroyed() {
		uni.$off('_scrollTop_' + this.$root._uid);
		uni.$off('toclists-' + this.$root._uid);
	},
	methods: {
		tocToggleChange() {
			this.tocToggle = !this.tocToggle;
		},
		setCur(top) {
			let i = 0;
			for (i in this.tocList) {
				if (top > this.tocList[i].content.top && !this.stop) {
					this.scrollCur = this.tocList[i].id;
				}
			}
		},
		changeInto(item) {
			this.stop = true;
			this.scrollCur = Number(item.id);
			uni.pageScrollTo({
				scrollTop: item.content.top,
				duration: 100
			});
			setTimeout(() => {
				this.stop = false;
			}, 300);
		}
	}
};
</script>

<style lang="scss">
	
	@media screen and (min-width: 1025px) {
		.cu-toc-content.doc-mode { 
			padding: 20px;
		}
	}
</style>
