<template>
	<view class="ui-code border radius" :class="[tag, 'language-' + lang,bg]">
		<block v-if="rich">
			<scroll-view :scroll-y="scroll" scroll-x class="scroll-view" :class="scroll ? 'scroll' : ''">
				<rich-text :nodes="nodes" class="rich-text"></rich-text>
				<slot></slot>
			</scroll-view>
		</block>
		<view class="rich-text" v-else :class="text">
			<text decode="true">{{ nodes }}</text>
			<slot></slot>
		</view>
		<view class="copy-btn sm" v-if="tag != 'code'" @tap="copyCode">
			<text class="uicon-file-copy icon-xl text-c"></text>
		</view>
	</view>
</template>

<script>
import Prism from './prism.js';
export default {
	name: 'uiCode',
	data() {
		return {
			nodes: [],
			rich: false
		};
	},
	props: {
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
		this.initCode();
	},
	watch: {
		content() {
			this.initCode();
		}
	},
	methods: {
		initCode() {
			if (this.tag == 'pre') {
				let langArr = new Array();
				langArr = this.SupportList();
				// console.log(langArr)
				if (langArr.indexOf(this.lang) == -1) {
					this.nodes = this.content;
				} else {
					this.nodes = Prism.highlight(this.content, Prism.languages[this.lang], this.lang);
					this.rich = true;
				}
			}
			if (this.tag == 'code') {
				this.nodes = this.content;
			}
		},
		SupportList() {
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
		copyCode() {
			// console.log(this.content)
			this.$util.copyText(this.content);
		}
	}
};
</script>

<style lang="scss">

	
</style>
