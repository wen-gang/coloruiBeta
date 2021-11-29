<template>
	<view class="ui-code border radius" :class="[tag, 'language-' + lang, bg,{'hasTitle':title},ui]">
		<block v-if="rich">
			<scroll-view :scroll-y="scroll" scroll-x class="ui-scroll-view" :class="scroll ? 'ui-scroll' : ''">
				<rich-text :nodes="nodes" class="ui-rich-text"></rich-text>
				<slot></slot>
			</scroll-view>
		</block>
		<view class="ui-rich-text" v-else :class="text">
			<text decode="true">{{ nodes }}</text>
			<slot></slot>
		</view>
		<view class="ui-copy-btn sm" v-if="tag != 'code'" @tap="_copyCode"><text class="_icon-copy icon-xl text-c"></text></view>
		<view class="ui-code-title ui-TC-2" v-if="title">{{ title == true ? '示例代码:' : title }}</view>		
	</view>
</template>

<script>
import Prism from './prism.js';
export default {
	name: 'UiCode',
	data() {
		return {
			nodes: [],
			rich: false,
			
		};
	},
	props: {
		ui: {
			type: String,
			default: ''
		},
		title: {
			type: [String, Boolean],
			default: false
		},
		content: {
			type: String,
			default: ''
		},
		bg: {
			type: String,
			default: 'ui-BG'
		},
		text: {
			type: String,
			default: 'ui-TC-Main'
		},
		tag: {
			type: String,
			default: 'code'
		},
		lang: {
			type: String,
			default: 'null'
		},
		scroll: {
			type: Boolean,
			default: false
		}
	},
	created() {
		this._initCode();
	},
	watch: {
		content() {
			this._initCode();
		}
	},
	methods: {
		_initCode() {
			if (this.tag == 'pre') {
				let langArr = new Array(), nodes =[];
				langArr = this._supportList(); 
				if (langArr.indexOf(this.lang) == -1) {
					nodes = this.content; 
				} else {
					nodes = Prism.highlight(this.content, Prism.languages[this.lang], this.lang); 
					this.rich = true;
				}
				this.nodes = nodes
			}
			if (this.tag == 'code') {
				this.nodes = this.content;
			}
		},
		_supportList() {
			var langs = new Array();
			let i = 0;
			for (let language in Prism.languages) {
				if (Object.prototype.toString.call(Prism.languages[language]) !== '[object Function]') {
					langs[i] = language;
					i++;
				}
			}
			return langs;
		},
		_copyCode() {
			// console.log(this.content)
			this.$util.copyText(this.content);
		}
	}
};
</script>

<style lang="scss"> 
</style>
