<template>
	<ui-sys :title="title" :loading="loading">
		<view class="ui-container">
			<ui-title title="参数" depth="2" isIcon toc></ui-title>
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

			<block v-if="slot.length > 0">
				<ui-title title="插槽" depth="2" isIcon toc></ui-title>

				<view class="ui-table table-border table-full mt-3 table-radius sm">
					<view class="ui-table-header">
						<view class="ui-table-tr">
							<view class="ui-table-th">名称</view>
							<view class="ui-table-th">说明</view>
						</view>
					</view>
					<view class="ui-table-body">
						<view class="ui-table-tr" v-for="(item, index) in slot" :key="index">
							<view class="ui-table-td">{{ item.name }}</view>
							<view class="ui-table-td">{{ item.info }}</view>
						</view>
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
			title: '参数',
			loading: true,
			parameter: [],
			slot: []
		};
	},
	onLoad(e) {
		this.title = '组件 <' + e.component + '> 参数'
		this.$api
			.callFunction({
				name: 'getParameter',
				data: {
					name: e.component
				}
			})
			.then(res => {
				this.parameter = res.result.data[0].parameter;
				this.slot = res.result.data[0].slot?res.result.data[0].slot:[];
				this.loading = false;
			})
			.catch(err => {
				this.loading = false;
			});
	},
	methods: {}
};
</script>

<style></style>
