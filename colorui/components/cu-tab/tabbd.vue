<template>
	<view>
		<view class="cu-tabbd" :class="[tpl]">
			<view class="cu-tabbd-box" :style="[{width: nav.length * 100  + '%',transform:'translateX(-' + cur/nav.length * 100 +'%)'}]">
				<slot/>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'cuTabBd',
		props: {
			nav: {
				type: Array,
				default () {
					return []
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
		},
		computed: {
			bdStyle() {
				let width = this.nav.length;
				return 'width:' + width
			}
		},
		created() {

		},
		methods: {

		}
	}
</script>

<style>

</style>
