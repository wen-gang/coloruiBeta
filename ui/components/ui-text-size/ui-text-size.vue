<template>
	<view class=""> 
		<ui-menu :ui="ui">
			<ui-menu-item title="文字大小" @click.native="_to('/pages/parameter/parameter?component=ui-theme')"></ui-menu-item>
		</ui-menu>
		<ui-modal name="ColorPicker">
			<view class="ui-grid ui-cols-6 p-3">
				<view class="text-center ui-item py-2 my-2" v-for="(item, index) in color" :key="index"
					@tap="chooseColor(item)">
					<ui-radio :value="sys_main" :label="item" :bg="`bg-${item} shadow-${item} shadow-sm`"
						:unbg="`bg-${item} shadow-${item} shadow-sm`"></ui-radio>
				</view>
			</view>
		</ui-modal>
	</view>
</template>

<script>
	let _this = null;
	export default {
		name: 'UiChangeTheme',
		data() {
			return {
				color: ['red', 'orange', 'yellow', 'olive', 'green', 'cyan', 'blue', 'purple', 'mauve', 'pink', 'brown',
					'grey'
				]
			};
		},
		props: {
			ui: {
				type: String,
				default: ''
			},
		},
		watch: {},
		created() {
			_this = this;
		},
		methods: {
			setTheme(val) {
				this.$store.commit('setTheme', val);
			},
			chooseColor(val) {
				this.$store.commit('setMain', val);
			}
		}
	};
</script>

<style lang="scss">

</style>
