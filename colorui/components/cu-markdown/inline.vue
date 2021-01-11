<template>
	<view class="cu-markdown-inline">
		<block v-for="(item, index) in nodes" :key="index">
			<block v-if="item.type == 'text'">
				<text :decode="true">{{ item.text }}</text>
			</block>
			<block v-if="item.type == 'del'">
				<view class="text-del inline-block"><inline :text="item.text"></inline></view>
			</block>
			<block v-if="item.type == 'br'"><view></view></block>
			<block v-if="item.type == 'tag'"><rich-text :nodes="item.nodes"></rich-text></block>
			<block v-if="item.type == 'code'"><cu-code :content="item.code" tag="code"></cu-code></block>
			<block v-if="item.type == 'em'">
				<view class="text-italic inline-block"><inline :text="item.text"></inline></view>
			</block>
			<block v-if="item.type == 'strong'">
				<view class="text-bold inline-block"><inline :text="item.text"></inline></view>
			</block>
			<block v-if="item.type == 'link' || item.type == 'autolink'">
				<!-- #ifdef MP -->
				<navigator :url="'/pages/webview/webview?url=' + item.url" class="link text-blue text-bottomline"><inline :text="item.title"></inline></navigator>
				<!-- #endif -->
				<!-- #ifndef MP -->
				<a :href="item.url" target="_blank" class="text-blue text-bottomline" :title="item.title"><inline :text="item.title"></inline></a>
				<!-- #endif -->
			</block>
			<block v-if="item.type == 'image'">
				<!-- <img :src="item.url" alt="" class="cu-img"/> -->
				<image :src="item.url" mode="widthFix" style="width: 100%"></image>
				
			</block>
			<block v-if="item.type == 'url'">
				<!-- #ifdef MP -->
				<navigator :url="'/pages/webview/webview?url=' + item.url" class="link text-blue text-bottomline">{{ item.url }}</navigator>
				<!-- #endif -->
				<!-- #ifndef MP -->
				<a :href="item.url" target="_blank" class="text-blue text-bottomline" :title="item.url">{{ item.url }}</a>
				<!-- #endif -->
			</block>
		</block>
	</view>
</template>

<script>
import marked from '@/colorui/components/cu-markdown/marked.js';
import inline from '@/colorui/components/cu-markdown/inline';
export default {
	name: 'inline',
	components: {
		inline
	},
	data() {
		return {
			nodes: [],
			test: ''
		};
	},
	props: {
		text: {
			type: String,
			default: ''
		}
	},
	created() {
		this.nodes = this.markedArray(marked.inlineLexer(this.text));
		// console.log(JSON.parse(JSON.stringify(this.nodes)));
	},
	methods: {
		markedArray(content) {
			for (var i = 0; i < content.length; i++) {
				if (content[i].type == 'tag') {
					content[i].nodes =  content[i].tag + content[i+1].text+content[i+2].tag;
					content.splice(i+1, 2);
				}
				if (content[i].type == 'anchorlink') {
					content[i].type = 'link';
					for (var j = i + 1; j < content.length; j++) {
						if (content[j].type == 'anchorlink' && content[j].title == content[i].anchor) {
							content[i].url = content[j+2].url
							content.splice(j, 3);
						}
					}
				}
			}
			
			return content;
		}
	}
};
</script>

<style lang="scss">
.cu-markdown-inline {
	display: inline-block;
	text-decoration: inherit;
	.link {
		cursor: pointer;
		display: inline;
	}
	rich-text {
		display: inline-block;
	}
}
</style>
