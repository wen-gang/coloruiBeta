<template>
	<ui-sys title="过渡背景色">
		<view class="ui-grid ui-cols-2  radius p-2">
			<block v-for="(item, index) in color" :key="$util.getUuid()">
				<view class="p-3 ui-item " v-for="(itemsub, indexsub) in color" :key="$util.getUuid()" v-if="item.name != itemsub.name && index < 6">
					<view class="ui-BG radius p-3 text-center">
						<ui-avatar :bg="'bg-' + item.name + '-' + itemsub.name" ui="round xxl"></ui-avatar>
						<view class="text-14 mt-3">{{ '.bg-' + item.name + '-' + itemsub.name }}</view>
						<view class="text-14 mt-3">{{ '#' + item.value + ' - #' + itemsub.value }}</view>
					</view>
				</view>
			</block>
		</view>
	</ui-sys>
</template>

<script>
export default {
	data() {
		return {
			color: [
				{ name: 'yellow', value: 'fbbd08', desc: '明黄' },
				{ name: 'orange', value: 'f37b1d', desc: '橘橙' },
				{ name: 'red', value: 'e54d42', desc: '嫣红' },
				{ name: 'pink', value: 'e03997', desc: '桃粉' },
				{ name: 'mauve', value: 'b745cb', desc: '木槿' },
				{ name: 'purple', value: '905ddf', desc: '姹紫' },
				{ name: 'blue', value: '0081ff', desc: '海蓝' },
				{ name: 'cyan', value: '1cbbb4', desc: '天青' },
				{ name: 'green', value: '3eb93b', desc: '森绿' },
				{ name: 'olive', value: '8dc63f', desc: '橄榄' },
				{ name: 'grey', value: '8799a3', desc: '玄灰' },
				{ name: 'brown', value: 'a5673f', desc: '棕褐' }
			]
		};
	},
	methods: {}
};
</script>

<style></style>
