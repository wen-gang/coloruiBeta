<template>
	<view class="ui-page" :class="['theme-' + sys_theme, 'main-' + sys_main, 'font-' + sys_text]">
		<view class="page-body" :class="[bg,ui]" :style="[styles]">
			<view class="page-body-main">
				<app-navbar :bg="navBg" :title="title" v-if="title"></app-navbar>
				<slot></slot>
				<app-footer v-if="footer"></app-footer>
				<ui-tabbar ui="shadow border-top" v-if="tabbar"></ui-tabbar>

				<view class="loading-body bg-blur" :style="[{ zIndex: 1999 }]" v-if="isloading">
					<view class="_icon-loading icon-spin text-sl mb-3"></view>
					<view>加载中</view>
				</view>
			</view>

			<ui-modal
				name="sys_dialog"
				:title="dialog.title"
				:content="dialog.content"
				:showCancel="dialog.showCancel"
				:cancelText="dialog.cancelText"
				:confirmText="dialog.confirmText"
				@success="dialog.success($event)"
			></ui-modal>

			<ui-toast
				name="sys_dialog"
				:title="toast.title"
				:duration="toast.duration"
				:mask="toast.mask"
				:isLoading="toast.isLoading"
				:image="toast.image"
				:icon="toast.icon"
				@success="toast.success($event)"
			></ui-toast>
			<image :src="img" mode="aspectFill" v-if="img" class="page-img"></image>
		</view>
	</view>
</template>

<script>
import { mapState } from 'vuex';
var _this = {};
export default {
	name: 'UiSys',
	data() {
		return {
			isloading: true
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
			default: 'ui-BG-2'
		},
		ui: {
			type: String,
			default: ''
		},
		img: {
			type: String,
			default: ''
		},
		navBg: {
			type: String,
			default: 'bg-blur'
		},
		loading: {
			type: [String, Boolean],
			default: 'auto'
		},
		title: {
			type: String,
			default: ''
		},
		footer: {
			type: Boolean,
			default: true
		},
		tabbar: {
			type: Boolean,
			default: false
		}
	},
	created() {
		_this = this;
		uni.$on('_hideLoading_' + this.$root._uid, e => {
			if (this.loading == 'auto') {
				this.isloading = e;
			}
		});
	},
	watch:{
		loading: {
			handler(val) {
				if (val==false) {
					this.isloading = false;
				}
			},
			immediate: true
		}
	},
	computed: {
		...mapState({
			dialog: state => state.modal.dialog,
			toast: state => state.modal.toast
		})
	},
	mounted() {
		setTimeout(() => {
			if (this.loading == 'auto') {
				this.isloading = false;
			}
		}, 800);
	},
	destroyed() {
		uni.$off('_hideLoading_' + this.$root._uid);
	},
	methods: {}
};
</script>

<style lang="scss">
.ui-page {
	position: relative;
	color: var(--ui-TC);
	background-color: var(--ui-BG-1) !important;
	z-index: 2;
	display: flex;
	.page-body {
		flex: 1;
		min-height: 100vh;
		position: relative;
		z-index: 1;
		overflow: hidden;
		.page-body-main {
			position: relative;
			z-index: 1;
		}
		.page-img {
			height: 177vw;
			width: 100vw;
			position: absolute;
			top: 0;
			left: 0;
			z-index: 0;
		}
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
	z-index: 999;
	// opacity: .98;
}

// .ui-toast-box {
// 	position: fixed;
// 	width: 100vw;
// 	height: 20vh;
// 	bottom: 5vh;
// 	left: 0;
// 	display: flex;
// 	align-items: center;
// 	justify-content: center;
// 	pointer-events: none;
// 	z-index: 999;
// 	.ui-toast{
// 		padding: .5em 1em;
// 		border-radius: $radius;
// 		max-width: 90vw;
// 		max-height: 20vh;
// 		overflow: hidden;
// 	}
// }
</style>
