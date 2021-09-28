<template>
	<ui-sys :bg="bg" :img="bgimg" title="系统 - 演示">
		<!-- <ui-navbar backtext="系统 - 演示" shadow></ui-navbar> -->
		<view class="p-4">
			<view class="m-4 radius bg-white" :class="cur == 1 ? 'ui-BG-Main' : ''" @click="cur = 1">
				<ui-title title="背景图填充" text="text-black">
					<block slot="more">
						<text class="icon-xl" :class="cur == 1 ? 'cicon-check-round' : 'cicon-round'"></text>
					</block>
				</ui-title>
				<view class="p-4 border-top" v-if="cur == 1 ">
					<view class="">
						<ui-code tag="pre" lang="html" :content="code"></ui-code>
					</view>
					模糊 <ui-switch checked @change="" />
					纯色遮罩 <ui-switch checked @change="" />
					渐变遮罩 <ui-switch checked @change="" />
				</view>
			</view>
			<view class="m-4 p-4 radius" :class="cur == 2 ? 'ui-BG-Main' : 'bg-white'" @click="cur = 2">背景图宽度自适应</view>
		</view>
	</ui-sys>
</template>

<script>
let _this = null;
export default {
	data() {
		return {
			cur: 0,
			bg: '',
			bgimg: '',
			loading: false,
			code: '<template>\n  <ui-sys>\n    ...业务代码\n  </ui-sys>\n</template>'
		};
	},
	onLoad(e) {
		_this = this;
		if (e.cur) {
			_this.cur = e.cur;
		}
	},
	watch:{
		cur(cur){
			if (cur == 0) {
				_this.bg = 'bg-img';
			}
			if (cur == 1) {
				_this.bg = '';
				_this.bgimg='https://game.gtimg.cn/images/lol/act/a20200917psyops/bg-5.jpg';
			}
			if (cur == 2) {
				_this.bg = 'bg-img';
				_this.bgimg='https://game.gtimg.cn/images/lol/act/a20200917psyops/bg-2.jpg';
			}
		}
	},
	methods: {
	}
};
</script>

<style lang="scss"></style>
