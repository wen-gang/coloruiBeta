<template>
	<view>
		<block v-if="sub">
			<view class="cu-tab" :class="[align, tpl, sub ? 'flex' : '']">
				<view class="item" v-for="(item, index) in nav" :key="index" :class="[Mcur == index ? textCur + ' cur' : '', tpl == 'segment' ? textCur : '', sub ? 'flex-sub' : '']" @tap="changeTab(index,item[back])">
					<view class="cu-btn sm badge" v-if="item.tag" :class="tag">{{ item.tag }}</view>
					<view class="cu-tab-dot" :class="dot" v-if="dot"></view>
					<block v-if="tpl != 'button'">
						<view :class="'cui-' + item.iconl" v-if="item.iconl"></view>
						<view class="text">{{ item[name] ? item[name] : item }}</view>
						<view :class="'cui-' + item.iconr" v-if="item.iconr"></view>
					</block>
					<view class="cu-btn" v-else :class="Mcur == index ? button : dfbutton">
						<view :class="'cui-' + item.iconl" v-if="item.iconl"></view>
						<view class="text">{{ item[name] ? item[name] : item }}</view>
						<view :class="'cui-' + item.iconr" v-if="item.iconr"></view>
					</view>
				</view>
			</view>
		</block>
		<block v-else>
			<scroll-view scroll-x class="cu-tab" :class="[align, tpl]" scroll-with-animation :scroll-left="scrollLeft" v-if="tpl != 'slider' && tpl != 'tabbar'">
				<view class="item" v-for="(item, index) in nav" :key="index" :class="[Mcur == index ? textCur + ' cur' : '', tpl == 'segment' ? textCur : '']"  @tap="changeTab(index,item[back])">
					<view class="cu-btn sm badge" v-if="item.tag" :class="tag">{{ item.tag }}</view>
					<view class="cu-tab-dot" :class="dot" v-if="dot"></view>
					<block v-if="tpl != 'button'">
						<view :class="'cui-' + item.iconl" v-if="item.iconl"></view>
						<view class="text">{{ item[name] ? item[name] : item }}</view>
						<view :class="'cui-' + item.iconr" v-if="item.iconr"></view>
					</block>
					<view class="cu-btn" v-else :class="Mcur == index ? button : dfbutton">
						<view :class="'cui-' + item.iconl" v-if="item.iconl"></view>
						<view class="text">{{ item[name] ? item[name] : item }}</view>
						<view :class="'cui-' + item.iconr" v-if="item.iconr"></view>
					</view>
				</view>
			</scroll-view>
			<view class="cu-tab" :class="[align, tpl]" v-if="tpl == 'slider'">
				<view class="item" v-for="(item, index) in nav" :key="index" :class="[Mcur == index ? textCur + ' cur' : '']"  @tap="changeTab(index,item[back])">
					<view :class="'cui-' + item.iconl" v-if="item.iconl"></view>
					<view class="text" :class="Mcur == index ? slider : ''">{{ item[name] ? item[name] : item }}</view>
					<view :class="'cui-' + item.iconr" v-if="item.iconr"></view>
				</view>
				<view class="cu-tab-slider" :class="slider" :style="[{ width: 'calc((100% - 10px) / ' + nav.length + ')', left: 'calc((100% - 10px) / ' + nav.length + ' * ' + Mcur + ' + 5px)' }]"></view>
			</view>
		</block>
	</view>
</template>

<script>
export default {
	name: 'cuTab',
	data() {
		return {
			Mcur: 0,
			scrollLeft: 0
		};
	},
	props: {
		nav: {
			type: Array,
			default() {
				return [];
			}
		},
		cur: {
			type: Number,
			default: 0
		},
		tpl: {
			type: String,
			default: 'default'
		},
		tag: {
			type: String,
			default: 'bg-red round'
		},
		dot: {
			type: String,
			default: ''
		},
		slider: {
			type: String,
			default: ''
		},
		button: {
			type: String,
			default: ''
		},
		dfbutton: {
			type: String,
			default: ''
		},
		textCur: {
			type: String,
			default: 'text-black'
		},
		align: {
			type: String,
			default: 'left'
		},
		name: {
			type: String,
			default: 'name'
		},
		back: {
			type: String,
			default: 'id'
		},
		sub: {
			type: Boolean,
			default: false
		}
	},
	watch: {
		cur(index) {
			this.Mcur = index;
		},
		Mcur(index) {
			this.$emit('update:cur', index);
			this.scrollLeft = (index - 1) * 70;
		}
	},
	methods: {
		changeTab(index,id) {
			// console.log(id)
			this.$emit('change', index,id);
			this.Mcur = index;
		}
	}
};
</script>

<style></style>
