<template>
	<view>
		<view class="cu-modal" :class="[align, tpl, show? 'show' : 'hide', mask ? 'bg-mask' : 'bg-none']" @tap="hide" :style="{ top: top + 'px' }">
			<scroll-view scroll-y :style="dialog" class="cu-dialog" @tap.stop :class="transparent ? 'bg-none' : ''">
				<view class="cu-title center bg-white" v-if="title != ''">{{ title }}</view>
				<slot></slot>
			</scroll-view>
		</view>
	</view>
</template>

<script>
export default {
	name: 'cuModal',
	props: {
		title: {
			type: String,
			default: ''
		},
		show: {
			type: [Boolean,String],
			default: false
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
		time: {
			type: Number,
			default: 0
		}
	},
	data() {
		return {
			top: uni.getStorageSync('TopBar'),
			touch: false
		};
	},
	watch: {
		show() {
			if (this.show) {
				if (this.time != 0) {
					setTimeout(() => {
						this.hide();
					}, this.time);
				}
				setTimeout(() => {
					this.touch = true;
				}, 1000);
			}
		}
	},
	methods: {
		hide() {
			if (this.touch) {
				this.$emit('hide');
				this.touch = false;
			}
		}
	}
};
</script>

<style></style>
