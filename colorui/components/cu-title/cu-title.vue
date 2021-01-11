<template>
	<view>
		<view class="cu-title" :class="[align, tpl, bgClass, { line: inLine }, depth > 0 ? 'heading-' + depth : '']" :style="[{ backgroundColor: bgCss }]">
			<view class="anchor" :id="title"></view>
			<view class="action" :class="[hasLine ? 'hasLine' : '', hasDot ? 'hasDot' : '']">
				<block v-if="isIcon">
					<view class="text-main-a cui-titles" v-if="depth < 3"></view>
					<view class="text-main-a cui-title" v-if="depth == 3"></view>
					<view class="text-main-a cui-title icon-sm" v-if="depth > 3"></view>
				</block>
				<slot name="icon"></slot>
				<view class="action-title" :class="[textClass]" v-if="title != ''" :style="[{ textCss }]">
					{{ title }}
					<slot></slot>
					<view class="action-line" :class="[lineClass]" :style="[{ lineCss }]" v-if="hasLine">
						<view></view>
						<view></view>
					</view>
					<view class="action-dot" :class="[dotClass]" :style="[{ dotCss }]" v-if="hasDot">
						<view></view>
						<view></view>
					</view>
				</view>
				<view class="action-desc" :class="[descClass]" :style="[{ descCss }]" v-if="desc != ''">{{ desc }}</view>
			</view>
			<view class="more"><slot name="more"></slot></view>
		</view>
	</view>
</template>

<script>
export default {
	name: 'cuTitle',
	data() {
		return {
			descClass: this.$util.setColor(this.descColor, true),
			descCss: this.$util.setColor(this.descColor, false),

			dotClass: this.$util.setColor(this.dotColor, true),
			dotCss: this.$util.setColor(this.dotColor, false),
			lineClass: this.$util.setColor(this.lineColor, true),
			lineCss: this.$util.setColor(this.lineColor, false)
		};
	},
	props: {
		title: {
			type: String,
			default: ''
		},
		depth: {
			type: [Number, String],
			default: 0
		},
		desc: {
			type: String,
			default: ''
		},
		toc: {
			type: Boolean,
			default: true
		},
		bg: {
			type: String,
			default: 'bg-none'
		},
		text: {
			type: String,
			default: 'text-a'
		},
		descColor: {
			type: String,
			default: 'text-c'
		},
		dotColor: {
			type: String,
			default: 'bg-main-a'
		},
		lineColor: {
			type: String,
			default: 'bg-main-a'
		},
		isIcon: {
			type: Boolean,
			default: false
		},
		toc: {
			type: Boolean,
			default: false
		},
		hasDot: {
			type: Boolean,
			default: false
		},
		hasLine: {
			type: Boolean,
			default: false
		},
		align: {
			type: String,
			default: 'left'
		},
		tpl: {
			type: String,
			default: 'default'
		},
		inLine: {
			type: Boolean,
			default: false
		}
	},
	watch: {
		descColor(val) {
			this.descClass = this.$util.setColor(val, true);
			this.descCss = this.$util.setColor(val, false);
		},
		dotColor(val) {
			this.dotClass = this.$util.setColor(val, true);
			this.dotCss = this.$util.setColor(val, false);
		},
		lineColor(val) {
			this.lineClass = this.$util.setColor(val, true);
			this.lineCss = this.$util.setColor(val, false);
		}
	},
	created() {},
	mounted() {
		if (this.toc) {
			this.$nextTick(() => {
				uni.createSelectorQuery()
					.in(this)
					.select('#' + this.title)
					.boundingClientRect(data => {
						if (data != null) {
							uni.$emit('toclists-' + this.$root._uid, { id: this._uid, text: this.title, depth: this.depth, content: data });
						} else {
							console.log('title-' + this._uid + ' data error');
						}
					})
					.exec();
			});
		}
	},
	methods: {}
};
</script>

<style></style>
