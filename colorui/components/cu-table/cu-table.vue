<template>
	<view>
		<view class="cu-table" :class="[{'table-border':border,'table-striped':striped,'table-full':full},bgClass,textClass]" :style="[{ backgroundColor: bgCss },{ color: textCss }]">
			<view class="cu-table-header">
				<view class="cu-table-tr">
					<view v-for="(item,index) in header" :key="index" class="cu-table-th" :class="'text-'+align[index]">
						<inline :text="item"></inline>
					</view>
				</view>
			</view>
			<view class="cu-table-body">
				<view v-for="(tr,row) in cells" :key="row" class="cu-table-tr">
					<view v-for="(td,col) in tr" :key="col" class="cu-table-td" :class="'text-'+align[col]">
						<inline :text="td"></inline>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import inline from '@/colorui/components/cu-markdown/inline'
	export default {
		components: {
			inline
		},
		props: {
			bg:{
				type: String,
				default:'bg-none'
			},
			text:{
				type: String,
				default:'text-a'
			},
			align: {
				type: [Array, String],
				default () {
					return [];
				}
			},
			cells: {
				type: [Array, String],
				default () {
					return [];
				}
			},
			header: {
				type: [Array, String],
				default () {
					return [];
				}
			},
			border: {
				type: Boolean,
				default: true
			},
			striped: {
				type: Boolean,
				default: true
			},
			full: {
				type: Boolean,
				default: true
			},
		},
		created() {
			// console.log(this.header,this.align,this.cells)
		}
	}
</script>

<style lang="scss">
	
</style>
