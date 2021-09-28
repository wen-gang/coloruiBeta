<template>
	<view class="ui-table"
		:class="[{ 'table-border': border, 'table-striped': striped, 'table-radius': radius, 'table-full': full }, bg,ui]">
		<view class="ui-table-header">
			<view class="ui-table-tr">
				<view class="ui-table-th" style="width: 120rpx;" v-if="type == 'checked'">
					<view class="text-xxl text-center" @tap="toggleAllChecked()"><text
							:class="allChecked ? '_icon-checkbox' : '_icon-box'"></text></view>
				</view>
				<view v-for="(item, index) in header" :key="index" class="ui-table-th"
					:class="['text-' + item.align, item.className]"
					:style="[{ width: item.width, minWidth: item.minWidth, maxWidth: item.maxWidth }]"
					@tap="clickTh(item, index)">
					<block v-if="!item.isSearch && !item.isFilter">
						<view class="text-cut">
							<inline :text="item.title"></inline>
						</view>
						<text v-if="item.sortable" class="_icon-unfold-more"></text>
					</block>
					<block v-if="item.isSearch">
						<ui-popover :mask="true" :index="10000" :show.sync="hidePopover[item.key]">
							<view class="flex-center ui-link">
								<view class="text-cut">
									<inline :text="item.title"></inline>
								</view>
								<text class="_icon-search ml-3"></text>
							</view>
							<block slot="content">
								<view class="p-3 flex-bar text-left">
									<view class="border flex-sub p-3 radius">
										<input type="text" v-model="tempSearch[item.key]" class="text-a text-14"
											style="width:200px" :placeholder="item.searchPlaceholder" />
									</view>
									<button class="ui-btn ui-BG-Main radius ml-3"
										@tap="searchHead(item.key, tempSearch[item.key])">搜索</button>
								</view>
							</block>
						</ui-popover>
					</block>
					<block v-if="item.isFilter">
						<ui-popover :mask="true" :index="10000" :show.sync="hidePopover[item.key]">
							<view class="flex-center ui-link">
								<view class="text-cut">
									<inline :text="item.title"></inline>
								</view>
								<text class="_icon-filter ml-3"></text>
							</view>
							<block slot="content">
								<view class="ui-list menu sm-border" style="width: 150px;">
									<view class="ui-item" v-for="(filter, filterIndex) in item.filter"
										:key="filterIndex" @tap="searchHead(item.key, filter.value)">
										{{ filter['name'] }}
										<view class="action"><text class="_icon-forward"></text></view>
									</view>
								</view>
							</block>
						</ui-popover>
					</block>
				</view>
			</view>
		</view>

		<!-- <view class="ui-table-loading" v-if="dataList.length == 0"><view class="ui-loading-icon">暂无数据</view></view> -->
		<view class="ui-table-body">

			<block v-for="(tr2, row) in 3" :key="row" v-if="dataList.length == 0">
				<view class="ui-table-tr">
					<view class="ui-table-td" v-if="type == 'checked'"></view>
					<block v-for="(item, index) in header" :key="index">
						<view class="ui-table-td"></view>
					</block>
				</view>
			</block>
			<block v-for="(tr, row) in dataList" :key="row">
				<view class="ui-table-tr">
					<view class="ui-table-td" v-if="type == 'checked'" @tap="toggleIndexChecked(row)">
						<view class="text-xxl text-center"><text
								:class="tr['_checked'] ? '_icon-checkbox' : '_icon-box'"></text></view>
					</view>
					<block v-for="(item, index) in header" :key="index">
						<view class="ui-table-td"
							:class="['text-' + item.align, item.className,{'text-orange':item.price}]"
							:style="[{ width: item.width, minWidth: item.minWidth, maxWidth: item.maxWidth }]"
							@tap="clickTd(tr, item)">
							<block v-if="!item.slot">
								<block v-if="item.key == subkey && tr.subnav">
									<text class="mr-2 icon-lg"
										:class="tr._showChildren ? '_icon-move-round' : '_icon-add-round-o'"></text>
								</block>
								<text v-if="item.price">{{ tr[item.key] | price}}</text>
								<text v-else>{{ tr[item.key] }}</text>
							</block>
							<block v-else>
								<slot :name="item.slot" :row="tr" :index="row"></slot>
							</block>
						</view>
					</block>
				</view>

				<block v-for="(subtr, subrow) in tr.subnav" :key="row + '-' + subrow">
					<view class="ui-table-tr" v-if="subtr._show">
						<view class="ui-table-td" v-if="type == 'checked'" @tap="toggleIndexChecked(subrow)">
							<view class="text-xxl text-center"><text
									:class="subtr['_checked'] ? '_icon-checkbox' : '_icon-box'"></text></view>
						</view>
						<block v-for="(item, index) in header" :key="index">
							<view class="ui-table-td" :class="['text-' + item.align, item.className]"
								:style="[{ width: item.width, minWidth: item.minWidth, maxWidth: item.maxWidth }]">
								<block v-if="!item.slot">
									<block v-if="item.key == subkey">
										<text v-if="subtr['pid'] > 0"
											class="mr-2">{{ subrow == tr.subnav.length - 1 ? '└' : '├' }}</text>
									</block>
									{{ subtr[item.key] }}
								</block>
								<block v-else>
									<slot :name="item.slot" :row="subtr" :index="subrow"></slot>
								</block>
							</view>
						</block>
					</view>
				</block>
			</block>
		</view>
	</view>

</template>

<script>
	import Csv from './csv';
	import ExportCsv from './export-csv';
	import inline from '@/ui/components/ui-markdown/inline';
	export default {
		name: 'UiTable',
		components: {
			inline
		},
		data() {
			return {
				allChecked: false,
				dataList: [],
				checkeIDGroup: [],
				sortType: 'desc',
				hidePopover: {},
				tempSearch: {}
			};
		},
		props: {
			bg: {
				type: String,
				default: 'ui-BG'
			},
			ui: {
				type: String,
				default: ''
			},
			type: {
				type: String,
				default: ''
			},
			subkey: {
				type: String,
				default: ''
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
			isLoading: {
				type: Boolean,
				default: true
			},
			radius: {
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
		watch: {
			cells(val) {
				this.renderCell(val);
			}
		},
		created() {
			this.renderCell(this.cells);
		},
		methods: {
			renderCell(data) {
				if (this.type == 'checked') {
					data.map(item => {
						item._checked = false;
					});
				}
				if (this.subkey != '') {
					data.map(item => {
						if (item.subnav) {
							item._showChildren = false;
							item.subnav.forEach(sub => {
								sub._show = false;
							});
						}
					});
				}

				this.dataList = JSON.parse(JSON.stringify(data));
			},
			toggleAllChecked() {
				this.allChecked = !this.allChecked;
				this.dataList.map(item => {
					item._checked = this.allChecked;
				});
				this.checkedId();
			},
			toggleIndexChecked(index) {
				let item = this.dataList[index];
				item._checked = !item._checked;
				this.$set(this.dataList, index, item);
				this.renderAllChececked();
				this.checkedId();
			},
			//重新渲染全选框
			renderAllChececked() {
				this.allChecked = !this.dataList.some(item => {
					return item._checked == false;
				});
				this.checkedId();
			},
			//收集选中的id
			checkedId() {
				let group = [];
				this.dataList.forEach(item => {
					if (item._checked) {
						group.push(item.id);
					}
				});
				this.checkeIDGroup = group;
				this.$emit('on-checked', group);
			},
			//点击td
			clickTd(tr, item) {
				if (tr.subnav && item.key == this.subkey) {
					this.toggleTr(tr, item);
				}
			},

			//点击th
			clickTh(item, index) {
				if (item.sortable) {
					this.sorTable(item, index);
				}
			},
			//折叠与展开下级
			toggleTr(tr, item) {
				this.dataList.forEach(item => {
					if (tr.id == item.id) {
						item._showChildren = !item._showChildren;
						item.subnav.forEach(sub => {
							sub._show = !sub._show;
						});
					}
				});
			},
			//排序列
			sorTable(item, index) {
				this.sortType = this.sortType == 'asc' ? 'desc' : 'asc';
				this.dataList = this.sortData(this.dataList, this.sortType, index);
			},
			sortData(data, type, index) {
				const key = this.header[index].key;
				data.sort((a, b) => {
					if (this.header[index].sortMethod) {
						return this.header[index].sortMethod(a[key], b[key], type);
					} else {
						if (type === 'asc') {
							return a[key] > b[key] ? 1 : -1;
						} else if (type === 'desc') {
							return a[key] < b[key] ? 1 : -1;
						}
					}
				});
				return data;
			},
			exportCsv(params) {
				if (params.filename) {
					if (params.filename.indexOf('.csv') === -1) {
						params.filename += '.csv';
					}
				} else {
					params.filename = 'table.csv';
				}

				let columns = [];
				let datas = [];
				if (params.columns && params.data) {
					columns = params.columns;
					datas = params.data;
				} else {
					columns = this.header;
					if (!('original' in params)) params.original = true;
					datas = params.original ? this.dataList : this.dataList;
				}

				let noHeader = false;
				if ('noHeader' in params) noHeader = params.noHeader;

				const data = Csv(columns, datas, params, noHeader);
				if (params.callback) params.callback(data);
				else ExportCsv.download(params.filename, data);
			},
			searchHead(name, key) {
				this.$emit('headSearch', {
					name: name,
					key: key,
					isKey: true
				});
				this.hidePopover[name] = false;
			}
		}
	};
</script>

<style lang="scss">


</style>
