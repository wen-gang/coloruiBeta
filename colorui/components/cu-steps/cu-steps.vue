<template>
	<view class="cu-steps" :class="[{ 'steps-arrow': arrow }, { 'steps-number': number }, { 'steps-column': column }]" v-else>
		<view class="cu-step" :class="index > cur ? '' : curTextClass" :style="[{ color: index > cur ? '' : curTextCss }]" v-for="(item, index) in info" :key="index">
			<view class="cu-steps-num" :data-index="index + 1" v-if="number" :class="[{ 'cu-steps-err': index + 1 == err }]"></view>
			<view :class="index > cur ? 'cui-title' : item.icon" v-else></view>
			<view class="cu-steps-text">
				<view class="cu-steps-title">
					{{ item.title }}
				</view>
				<view class="cu-steps-desc" v-if="item.desc&&column">
					{{ item.desc }}
				</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	name: 'cuSteps',
	data() {
		return {};
	},
	props: {
		direction: {
			type: String,
			default: 'row'
		},
		arrow: {
			type: Boolean,
			default: false
		},
		number: {
			type: Boolean,
			default: false
		},
		column: {
			type: Boolean,
			default: false
		},
		cur: {
			type: Number,
			default: 0
		},
		err: {
			type: Number,
			default: 0
		},
		info: {
			type: Array,
			default() {
				return [];
			}
		}
	},
	methods: {}
};
</script>

<style></style>
