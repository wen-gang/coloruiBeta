<template>
	<view class="cu-markdown" :class="[{ selectable: selectable }]">
		<view v-for="(item, index) in nodes" :key="index" :class="['md-' + item.type]" :id="'toc-' + index">
			<block v-if="item.type == 'heading'">
				<cu-title :depth="item.depth" :isIcon="titleicon" :title="item.text">
				</cu-title>
<!-- 				<view :class="'heading-' + ">
				  <text class="cui-titles" v-if="item.depth==2&&titleicon"></text>	
				  <text class="cui-title" v-if="item.depth==3&&titleicon"></text>
				  <text class="cui-title icon-sm" v-if="item.depth>3&&titleicon"></text>	
				</view> -->
			</block>
			<block v-if="item.type == 'hr'">
				<view class="border-bottom my-3"></view>
			</block>
			<block v-if="item.type == 'paragraph'">
				<view class="paragraph">
					<inline :text="item.text"></inline>
				</view>
			</block>
			<block v-if="item.type == 'blockquote'">
				<view class="blockquote">
					<cu-markdown :content="item.nodes"></cu-markdown>
				</view>
			</block>
			<block v-if="item.type == 'list'">
				<view class="list">
					<view class="list-item" v-for="(list_item, list_index) in item.nodes" :key="list_index" :class="list_item.type == 'list_item'?'list-item-p':''">
						<block v-if="list_item.type == 'list_item'">
							<block v-if="list_item.task">
								<text class="icon-fw list-item-t cui-square" v-if="list_item.checked"></text>
								<text class="icon-fw list-item-t cui-square-check-o" v-else></text>
							</block>
							<block v-if="item.ordered">
								<text class="icon-fw list-item-t">{{ list_index + 1 }}.</text>
							</block>
							<block v-if="!item.ordered && !list_item.task"><text class="icon-fw list-item-t cui-title"></text></block>
							<inline :text="list_item.nodes[0].text"></inline>
						</block>
						<block v-if="list_item.type == 'list'">
							<cu-markdown :content="[list_item]"></cu-markdown>
						</block>
					</view>
				</view>
			</block>
			<block v-if="item.type == 'code'">
				<cu-code :content="item.text" tag="pre" :lang="item.lang"></cu-code>
			</block>
			<block v-if="item.type == 'table'">
				<cu-table :align="item.align" :cells="item.cells" :header="item.header"></cu-table>
			</block>
			<block v-if="item.type == 'html'">
				<rich-text :nodes="item.text"></rich-text>
			</block>
		</view>
		<view>
			<slot name="content"></slot>
		</view>
	</view>
</template>

<script>
	import marked from '@/colorui/components/cu-markdown/marked.js';
	import inline from '@/colorui/components/cu-markdown/inline';
	export default {
		name: 'cuMarkdown',
		components: {
			inline
		},
		data() {
			return {
				nodes: []
			};
		},
		props: {
			content: {
				type: [Array, String],
				default () {
					return [];
				}
			},
			selectable: {
				type: Boolean,
				default: true
			},
			toc: {
				type: Boolean,
				default: false
			},
			toclist: {
				type: [Array, String],
				default () {
					return [];
				}
			},
			titleicon: {
				type: Boolean,
				default: true
			}
			
		},
		created() {
			this.changeContent();
		},
		watch: {
			content() {
				this.changeContent();
			},
		},
		methods: {
			changeContent() {
				let content = '';
				if (typeof this.content == 'string') {
					content = marked.lexer(this.content);
				} else {
					content = this.content;
				}
				this.nodes = this.markedArray(content);
				// console.log(JSON.parse(JSON.stringify(this.nodes)));
				setTimeout(()=>{
					this.getToc();
				},800)
			},
			getToc() {
				if (this.toc) {
					let nodes = this.nodes,
						toc = [],
						i = 0,
						j = 0;
					for (i in nodes) {
						if (nodes[i].type == 'heading') {
							toc[j] = nodes[i];
							toc[j].id = i;
							uni.createSelectorQuery().in(this).select('#toc-' + i).boundingClientRect(data => {
								if (data != null) {
									// console.log('getToc #toc-' + i, data.top);
									toc[j].top = data.top;
								} else {
									console.log('getToc #toc-' + i + ' error');
								}
							}).exec();
							j++;
						}
					}
					this.tocList = toc;
					if (toc.length > 0) {
						// console.log('update', JSON.parse(JSON.stringify(toc)));
						this.$emit('update:toclist', toc);
					}
				}

			},
			markedArray(content) {
				for (var i = 0; i < content.length; i++) {
					if (content[i].type == 'blockquote_start') {
						content[i].type = 'blockquote';
						content[i].nodes = [];
						var nodes = [];
						for (var j = i + 1; j < content.length; j++) {
							if (content[j].type == 'blockquote_end') {
								content.splice(j, 1);
								j = content.length + content.length;
							} else {
								nodes = nodes.concat(content[j]);
								content.splice(j, 1);
								j = i;
							}
						}
						content[i].nodes = nodes;
						this.markedArray(nodes);
					}
					if (content[i].type == 'list_start') {
						content[i].type = 'list';
						content[i].nodes = [];
						var nodes = [];
						for (var j = i + 1; j < content.length; j++) {
							if (content[j].type == 'list_start') {
								content[j].type = 'list';
								content[j].nodes = [];
								var cNodes = [];
								for (var k = j + 1; k < content.length; k++) {
									if (content[k].type == 'list_end') {
										content.splice(k, 1);
										k = content.length + content.length;
									} else {
										cNodes = cNodes.concat(content[k]);
										content.splice(k, 1);
										k = j;
									}
								}
								content[j].nodes = cNodes;
								this.markedArray(cNodes);
							} else {
								if (content[j].type == 'list_end') {
									content.splice(j, 1);
									j = content.length + content.length;
								} else {
									nodes = nodes.concat(content[j]);
									content.splice(j, 1);
									j = i;
								}
							}
						}
						content[i].nodes = nodes;
						this.markedArray(nodes);
					}
					if (content[i].type == 'list_item_start') {
						content[i].type = 'list_item';
						content[i].nodes = [];
						var nodes = [];
						for (var j = i + 1; j < content.length; j++) {
							if (content[j].type == 'list_item_end') {
								content.splice(j, 1);
								j = content.length + content.length;
							} else {
								nodes = nodes.concat(content[j]);
								content.splice(j, 1);
								j = i;
							}
						}
						content[i].nodes = nodes;
						// this.markedArray(nodes);
					}
				}
				return content;
			}
		}
	};
</script>

<style lang="scss"></style>
