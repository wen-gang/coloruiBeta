<template>
	<view class="cu-page" :class="['theme-' + sys_theme, 'main-' + sys_main, sys_mode]">
		<match-media :min-width="1025" v-if="doc" class="box-bg-sub">
			<cu-fixed :index="-10" :width="left" noNav :val="sys_navBar" fixed>
				<cu-scroll
					@cuScroll="_scroll"
					:topVal="leftTop"
					:toid="'nav-' + title"
					scrolly
					class="page-left"
					:style="{ height: 'calc(100vh - ' + sys_navBar + 'px)' }"
					:width="left"
				>
					<left-window :title="title"></left-window>
				</cu-scroll>
			</cu-fixed>
		</match-media>
		<view class="page-body" :class="[bgClass]" :style="[{ backgroundColor: bgCss }, styles]" :id="'page-body-' + _uid">
			<cu-toc :open="doc">
				<app-nav :backtext="title" shadow v-if="title && doc"></app-nav>
				<slot></slot>
			</cu-toc>
			<view class="loading-body bg-filter" :style="[{ zIndex: 1999 }]" v-if="loading">
				<view class="cui-loading1 icon-spin icon-xl mb-3"></view>
				<view>加载中</view>
			</view>
		</view>
		<!-- <image :src="img" mode="widthFix" class="page-bgImg"></image> -->
	</view>
</template>

<script>
var _this = {};
export default {
	name: 'cuSys',
	data() {
		return {
			body: {}
		};
	},
	props: {
		styles: {
			type: Object,
			default() {
				return {};
			}
		},
		bg: {
			type: String,
			default: 'page-bg'
		},
		img: {
			//如果bg == bg-img 则加载对应的图片
			type: String,
			default: ''
		},
		doc: {
			type: Boolean,
			default: false
		},
		loading: {
			type: Boolean,
			default: false
		},
		left: {
			type: [String, Number],
			default: '260'
		},
		title: {
			type: String,
			default: ''
		}
	},
	created() {
		_this = this;
	},
	computed: {
		leftTop() {
			return this.$store.state.leftTop;
		}
	},
	mounted() {
		this._loading = false;
	},
	methods: {
		_scroll(val) {
			this.$store.commit('setLeftTop', val);
		}
		
	}
};
</script>

<style lang="scss">
.cu-page {
	position: relative;
	color: var(--text-a);
	// height: 100vh;
	z-index: 2;
	display: flex;
	.page-body {
		flex: 1;
		min-height: 100vh;
		position: relative;
		z-index: 1;
		overflow: hidden;
		// background-color: rgba(255,255,255,.6);
	}
	.page-left {
		height: 100vh;
		position: relative;
	}

	&.loading {
		// filter: blur(10px);
	}
}
.loading-body {
	width: 100%;
	height: 100%;
	position: fixed;
	top: 0;
	left: 0;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}
</style>
