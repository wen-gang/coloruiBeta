<template>
  <view class="cu-demo">
    <view class="cu-demo-view">
      <slot name="component" v-if="navCur == 0"></slot>
      <slot name="view" v-if="navCur == 1"></slot>
    </view>
    <view class="cu-demo-more" @tap="show = !show">
      <cu-popover :tips="show ? '收起代码' : '显示代码'" :hover="true">
      	<block slot="button">
          <text class="icon-xl"><text class="cui-unfold-more icon-90"></text></text>
      	</block>
      </cu-popover>
    </view>
    <view class="cu-demo-box" :class="show ? 'show' : 'hide'">
      <view class="cu-demo-nav flex justify-center" :class="show ? 'show' : 'hide'"><cu-nav :nav="['组件模式', '静态结构']" :cur.sync="navCur" tpl="dot"></cu-nav></view>
      <view class="cu-demo-code"><cu-code :content="navCur == 0 ? componentCode : viewCode" tag="pre" lang="html"></cu-code></view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      navCur: 0,
      show: false,
      componentCode: '',
      viewCode: ''
    };
  },
  props: {
    md: {
      type: String,
      default: ''
    }
  },
  created() {
    this.$util.request('/static/code/' + this.md + '-component.vue').then(res => {
      this.componentCode = res;
    });
    this.$util.request('/static/code/' + this.md + '-view.vue').then(res => {
      this.viewCode = res;
    });
  },
  methods: {}
};
</script>

<style></style>
