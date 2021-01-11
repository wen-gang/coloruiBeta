<template>
  <view class="refresh-body" @touchstart="TouchStart" @touchmove="TouchMove" @touchend="TouchEnd" id="refresh-body">
    <view :style="[{ height: moveY + 'px' }]" :class="transition ? 'show' : 'hide'" class="refresh-style">
      <text class="cui-loading1 text-xl" :class="refresh ? 'icon-spin' : ''"></text>
      <view class="padding-xs">{{ refresh ? '正在刷新' : 100 > moveY ? '下拉刷新' : '松开刷新' }}</view>
    </view>
    <slot></slot>
  </view>
</template>

<script>
export default {
  data() {
    return {
      body: '',
      touchStartX: '',
      touchStartY: '',
      moveY: 0,
      refresh: false,
      transition: false
    };
  },
  mounted() {
    this.$nextTick(()=>{
    	uni.createSelectorQuery()
    		.in(this)
    		.select('#refresh-body')
    		.boundingClientRect(data => {
    			if (data != null) {
    				_this.body = data;
    			} else {
    				console.log('refresh-body data error');
    			}
    		})
    		.exec(); 
    })
  },
  methods: {
    // Touch触摸开始
    TouchStart(e) {
      this.touchStartX = e.changedTouches[0].clientX;
      this.touchStartY = e.changedTouches[0].clientY;
    },

    // Touch计算方向
    TouchMove(e) {
      let moveX = e.changedTouches[0].clientX - this.touchStartX;
      let moveY = e.changedTouches[0].clientY - this.touchStartY;
      let windowHeight = uni.getSystemInfoSync().windowHeight;
      if (Math.abs(moveX) < Math.abs(moveY) && Math.abs(moveY) > 30 && e.changedTouches[0].pageY < windowHeight && moveY > 0 && !this.refresh) {
        this.moveY = Math.round(moveY / 3);
      }
    },

    // Touch触摸结束
    TouchEnd(e) {
      if (this.moveY > 100) {
        this.back(100);
        this.refresh = true;
        this.$emit('refresh')
        setTimeout(() => {
          this.back(0);
          setTimeout(() => {
            this.refresh = false;
          }, 1000);
        }, 2000);
      } else {
        this.back(0);
      }
    },
    back(num) {
      if (this.moveY > num) {
        setTimeout(() => {
          this.moveY = this.moveY - 1;
          this.back(num);
        }, 2);
      }
    }
  }
};
</script>

<style lang="scss">
.refresh-body {
  position: relative;
  .refresh-style {
    overflow: hidden;
    background-color: #ffffff;
    width: 100%;
    z-index: 999;

    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    &.show {
      // transition: all 0.6s ease-in-out;
    }
    &.hide {
      // transition: all 0s ease-in-out;
    }
  }
}
</style>
