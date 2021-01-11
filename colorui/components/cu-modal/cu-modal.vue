<template>
	<view>
		<view class="cu-modal" :class="[align, tpl, name==cur ? 'show' : 'hide', mask ? 'bg-mask' : 'bg-none']" @tap="hide" :style="{ top: (sys_navBar + top) + 'px' }">
			<view :style="dialog" class="cu-dialog" @tap.stop :class="transparent ? 'bg-none' : ''">
				<view class="cu-title center bg-white" v-if="title != ''">{{ title }}</view>
				<slot></slot> 
			</view>
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
		name: {
			type: String,
			default: ''
		},
		cur: {
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
		time: {
			type: Number,
			default: 0
		},
		top: {
			type: Number,
			default: 0
		},
		
	},
	data() {
		return {
			touch: false
		};
	},
	watch: {
		cur() {
			if (this.name==this.cur) {
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
				this.$emit('update:cur','');
				this.touch = false;
			}
		}
	}
};
</script>

<style></style>
