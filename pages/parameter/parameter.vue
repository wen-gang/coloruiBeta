<template>
	<ui-sys :title="title">
		<view class="ui-container">
			<view class="ui-table table-border table-full mt-3 table-radius sm">
				<view class="ui-table-header">
					<view class="ui-table-tr">
						<view class="ui-table-th">属性名</view>
						<view class="ui-table-th text-center">类型/默认值</view>
						<view class="ui-table-th">说明</view>
					</view>
				</view>
				<view class="ui-table-body">
					<view class="ui-table-tr" v-for="(item, index) in parameter" :key="index">
						<view class="ui-table-td">{{ item.name }}</view>
						<view class="ui-table-td text-center">
							<view class="ui-tag block sm bg-blue-thin">[{{ item.type }}]</view>
							<view class="ui-tag block sm bg-grey-thin">{{ item.default }}</view>
						</view>
						<view class="ui-table-td">{{ item.info }}</view>
					</view>
				</view>
			</view>
		</view>
	</ui-sys>
</template>

<script>
export default {
	data() {
		return {
			title: '参数',
			parameter: [
				{ name: 'styles', type: 'Object', default: '{}', info: '内部样式' },
				{ name: 'bg', type: 'String', default: 'ui-BG-1', info: '背景颜色' },
				{ name: 'img', type: 'String', default: '/', info: '背景图' },
				{ name: 'title', type: 'String', default: '/', info: '引入文字以开启默认导航' },
				{ name: 'navBg', type: 'String', default: 'bg-blur', info: '默认导航的背景色' },
				{ name: 'footer', type: 'Boolean', default: 'true', info: '页面底部展示信息' }
			]
		};
	},
	methods: {}
};
</script>

<style></style>
