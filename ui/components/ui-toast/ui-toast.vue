<template>
	<view
		class="ui-toast-box"
		:class="[title != '' ? 'show' : 'hide', { 'bg-mask-80': mask || mask == '80' }, { 'bg-mask-20': mask == '20' }, { 'bg-mask-40': mask == '40' }]"
		:style="{ top: sys_navBar + 'px' }"
	>
		<view class="ui-toast bg-mask-80" :class="[{ hasIcon: icon != '' }]">
			<view class="ui-toast-icon" v-if="icon != ''"><text :class="[icon,{'icon-spin':isLoading}]"></text></view>
			<text>{{ title.length > 255 ? title.substring(0, 255) + '...' : title }}</text>
		</view>
	</view>
</template>

<script>
import { mapState } from 'vuex';
export default {
	name: 'UiToast',
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
		},
		isLoading: {
			type: [Boolean, String],
			default: false
		},
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
				if (val&&!this.isLoading) {
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
			this.$store.commit('setToast', {
				title: '',
				icon: '',
				image: '',
				duration: 1500,
				mask: false,
				isLoading: false,
				success: () => {}
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
		&.hasIcon {
			text-align: center;
			padding: 0.5em 1em 1em;
			.ui-toast-icon {
				display: block;
				width: 170rpx;
				height: 150rpx;
				@include flex-center;
				font-size: 80rpx;
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
	}
}
</style>
