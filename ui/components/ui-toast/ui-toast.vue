<template>
	<view
		class="ui-toast-box"
		:class="[title!='' ? 'show' : 'hide', { 'bg-mask-80': mask || mask == '80' }, { 'bg-mask-20': mask == '20' }, { 'bg-mask-40': mask == '40' }]"
		:style="{ top: sys_navBar + 'px' }"
	>
		<view class="ui-toast bg-mask-80">
			<view class=""><text :class="icon"></text></view>
			<text>{{ title.length > 255 ? title.substring(0, 255) + '...' : title }}</text>
		</view>
	</view>
</template>

<script>
import { mapState } from 'vuex';
export default {
	name: 'uiModal',
	props: {
		title: {
			type: String,
			default: ''
		},
		icon: {
			type: String,
			default: ''
		},
		position: {
			type: String,
			default: ''
		},
		duration: {
			type: Number,
			default: 1500
		},
		mask: {
			type: [Boolean, String],
			default: false
		}
	},
	data() {
		return {
			touch: false
		};
	},
	created() {},
	computed: {
		...mapState({
			toastTarget: state => state.modal.toastTarget
		})
	},
	watch: {
		title: {
			handler(val) {
				if (val) {
					setTimeout(() => {
						this.hide();
					}, this.duration);
				}
			},
			immediate: true
		}
	},
	methods: {
		hide() {
			this.$store.commit('setToast',{
			title:'', 
			icon:'',
			image:'',
			duration:1500,
			mask:false,
			success:()=>{},
		 });
		}
	}
};
</script>

<style lang="scss">
.ui-toast-box {
	position: fixed;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	z-index: 880;
	opacity: 0;
	outline: 0;
	text-align: center;
	transform: scale(1);
	backface-visibility: hidden;
	perspective: 2000rpx;
	pointer-events: none;
	.ui-toast {
		position: relative;
		display: inline-block;
		vertical-align: middle;
		margin-left: auto;
		margin-right: auto;
		background-color: var(--ui-BG);
		border-radius: 10rpx;
		overflow: hidden;
		text-align: left;
		color: var(--ui-TC);
		padding: 0.5em 1em;
		border-radius: $radius;
		max-width: 90vw;
		max-height: 20vh;
		overflow: hidden;
		.ui-toast-title {
			padding-top: 20rpx;
		}
		.ui-toast-content {
			padding: 10rpx 50rpx 50rpx;
			font-size: 32rpx;
			color: var(--ui-TC-2);
		}
		.ui-toast-content:first-child {
			padding: 50rpx;
			color: var(--ui-TC);
		}
		.ui-toast-option {
			display: flex;
			padding: 15rpx 0;
			justify-content: center;
			view {
				flex: 1;
				padding: 15rpx 0;
				text-align: center;
			}
		}
		&.bg-none .ui-toast-option {
			background: transparent;
			color: #ffffff;
			.ui-toast-btn {
				border: 1px solid #ffffff;
				border-radius: 500px;
				margin: 0 40rpx;
				color: #ffffff !important;
			}
		}
	}
	&::before {
		content: '\200B';
		display: inline-block;
		height: 100%;
		vertical-align: middle;
	}

	&.show {
		opacity: 1;
		transform: scale(1);
		transition: 0.3s;
		overflow-x: hidden;
		overflow-y: auto;
		pointer-events: auto;
	}
	&.show.bg-none {
		pointer-events: none;
		.ui-dialog {
			pointer-events: auto;
		}
	}

	&.bottom {
		margin-bottom: -1000rpx;
		&::before {
			vertical-align: bottom;
		}
		.ui-dialog {
			width: 100%;
			border-radius: 0;
			padding-bottom: calc(env(safe-area-inset-bottom) / 4 * 3);
		}
		&.show {
			margin-bottom: 0;
		}
	}
	&.top {
		margin-top: -1000rpx;
		&::before {
			vertical-align: top;
		}
		.ui-dialog {
			width: 100%;
			border-radius: 0;
		}
		&.show {
			margin-top: 0;
		}
	}
}
</style>
