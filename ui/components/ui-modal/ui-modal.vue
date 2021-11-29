<template>
	<view>
		<view
			class="ui-modal"
			:class="[align, tpl, name == target ? 'show' : 'hide', { 'bg-mask-80': mask||mask=='80'}, { 'bg-mask-20': mask == '20' }, { 'bg-mask-40': mask == '40'}]"
			@tap="_cancel"
			:style="{ top: (noNav ? 0 : sys_navBar + top) + 'px' }"
		>
			<view :style="dialog" class="ui-dialog" :class="[transparent? 'bg-none' : '',ui]" @tap.stop>
				<view class="ui-modal-title border-bottom" v-if="title != ''"><ui-title :title="title" align="center" text="text-xl"></ui-title></view>
				<slot v-if="name != 'sys_dialog'"></slot>
				<view class="ui-modal-content" v-if="content != ''">{{ content }}</view>
				<view class="ui-modal-option flex-bar" :class="{'border-top':!transparent}" v-if="option&&!iconCancel">
					<view class="ui-modal-btn border-right" @tap="_cancel" v-if="showCancel">{{ cancelText }}</view>
					<view class="ui-modal-btn ui-TC-Main" @tap="_confirm">{{ confirmText }}</view>
				</view>
				<view class="flex-center" @tap="_cancel" v-if="iconCancel&&transparent">
					<button class="ui-btn bg-none icon xxl borders round border-white">
						<text class="_icon-close text-white"></text>
					</button>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
import { mapState } from 'vuex';
export default {
	name: 'UiModal',
	props: {
		noNav: {
			type: Boolean,
			default: false
		},
		ui: {
			type: String,
			default: ''
		},
		title: {
			type: String,
			default: ''
		},
		content: {
			type: String,
			default: ''
		},
		iconCancel: {
			type: [Boolean, String],
			default: false
		},
		showCancel: {
			type: [Boolean, String],
			default: true
		},
		option: {
			type: [Boolean, String],
			default: true
		},	
		cancelText: {
			type: String,
			default: '取消'
		},
		confirmText: {
			type: String,
			default: '确定'
		},
		name: {
			type: String,
			default: ''
		},
		align: {
			type: String,
			default: ''
		},
		dialog: {
			type: String,
			default: ''
		},
		tpl: {
			type: String,
			default: 'default'
		},
		transparent: {
			type: [Boolean, String],
			default: false
		},	
		mask: {
			type: [Boolean, String],
			default: true
		},
		duration: {
			type: Number,
			default: 0
		},
		top: {
			type: Number,
			default: 0
		}
	},
	data() {
		return {
			touch: false
		};
	},
	computed: {
		...mapState({
			target: state => state.modal.target
		})
	},
	watch: {
		target: {
			handler(target) {
				if (target == this.name) {
					if (this.duration != 0) {
						setTimeout(() => {
							this.hide();
						}, this.duration);
					}
					setTimeout(() => {
						this.touch = true;
					}, 500);
				}
			},
			immediate: true
		}
	},
	methods: {
		hide() {
			if (this.touch) {
				this.$store.commit('setTarget', '');
				this.touch = false;
			}
		},
		_cancel() {
			this.hide();
			this.$emit('success', { cancel: true });
		},
		_confirm() {
			this.hide();
			this.$emit('success', { confirm: true });
		}
	}
};
</script>

<style lang="scss">
.ui-modal {
	@include flex-center;
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
	transition: 0.3s;
	pointer-events: none;
	.ui-dialog {
		position: relative;
		display: inline-block;
		vertical-align: middle;
		margin-left: auto;
		margin-right: auto;
		width: 680rpx;
		max-width: 100%;
		background-color: var(--ui-BG);
		border-radius: 10rpx;
		overflow: hidden;
		text-align: left;
		color: var(--ui-TC);
		.ui-modal-title {
			// padding-top: 20rpx;
		}
		.ui-modal-content {
			padding: 10rpx 50rpx 50rpx;
			font-size: 32rpx;
			color: var(--ui-TC-2);
		}
		.ui-modal-content:first-child {
			padding: 50rpx;
			color: var(--ui-TC);
			
		}
		.ui-modal-option {
			display: flex;
			padding: 15rpx 0;
			justify-content: center;
			.ui-modal-btn {
				flex: 1;
				padding: 15rpx 0;
				text-align: center;
			}
		}
		&.bg-none .ui-modal-option {
			background: transparent;
			color: #FFFFFF;
			.ui-modal-btn{
				border: 1px solid #FFFFFF;
				border-radius: 500px;
				margin: 0 40rpx;
				color: #FFFFFF !important;
			}
		}
	} 

	&.show {
		opacity: 1;
		transform: scale(1);
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
		&::after {
			vertical-align: bottom;
		}
		.ui-dialog {
			align-self: flex-end;
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
		&::after {
			vertical-align: top;
		}
		.ui-dialog {
			align-self: flex-start;
			width: 100%;
			border-radius: 0;
		}
		&.show {
			margin-top: 0;
		}
	}

	&.left,
	&.right {
		transform: scale(1);
		display: flex;
	}
	&.right {
		justify-content: flex-end;
	}
	&.left .ui-dialog,
	&.right .ui-dialog {
		height: 100%;
		min-width: 200rpx;
		border-radius: 0;
		margin: initial;
		transition: 0.3s;
		width: auto;
		padding-bottom: calc(env(safe-area-inset-bottom) / 4 * 3);
	}

	&.left .ui-dialog {
		transform: translateX(-100%);
	}

	&.right .ui-dialog {
		transform: translateX(100%);
	}

	&.left.show .ui-dialog,
	&.right.show .ui-dialog {
		transform: translateX(0%);
	}
}
</style>
