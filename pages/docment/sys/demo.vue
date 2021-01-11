<template>
	<cu-sys :loading="loading" :bg="bg" :img="bgimg">
		<app-nav backtext="系统 - 演示" shadow></app-nav>
		<view class="p-4">
			<view class="m-4 radius bg-white" :class="cur == 1 ? 'bg-main-a' : ''" @click="cur = 1">
				<cu-title title="背景图填充" text="text-black">
					<block slot="more">
						<text class="icon-xl" :class="cur == 1 ? 'cui-check-round' : 'cui-round'"></text>
					</block>
				</cu-title>
				<view class="p-4 solid-top" v-if="cur == 1 ">
					<view class="">
						<cu-code tag="pre" lang="html" :content="code"></cu-code>
					</view>
					模糊 <switch checked="true" @change="" />
					纯色遮罩 <switch checked="true" @change="" />
					渐变遮罩 <switch checked="true" @change="" />
				</view>
			</view>
			<view class="m-4 p-4 radius" :class="cur == 2 ? 'bg-main-a' : 'bg-white'" @click="cur = 2">背景图宽度自适应</view>
		</view>
		<cu-fixed bottom class="touch-none">
			<view class="text-right p-4">
				<navigator url="/pages/docment/sys/sys" class="cu-btn bg-main-a shadow icon touch-all lg"><text class="cui-file-text"></text></navigator>
			</view>
		</cu-fixed>
	</cu-sys>
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
			code: '<template>\n  <cu-sys>\n    ...业务代码\n  </cu-sys>\n</template>'
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
