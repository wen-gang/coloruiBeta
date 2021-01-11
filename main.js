import Vue from 'vue'
import App from '@/App'

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
	...App
})
// 挂载 vuex
import store from '@/store'
Vue.prototype.$store = store

// 挂载常用封装
import util from '@/colorui/js/util.js'
Vue.prototype.$util = util;

// 挂载ColorUI系统混入
import mixin from '@/colorui/js/mixin.js'
Vue.mixin(mixin)

// 挂载过滤
import filters from "@/colorui/js/filters.js"
Object.keys(filters).forEach(key => {
	Vue.filter(key, filters[key])
})

// 挂载app混入
import appMixin from '@/app/js/mixin.js'
Vue.mixin(appMixin)

// 挂载app过滤
import apFilters from "@/colorui/js/filters.js"
Object.keys(filters).forEach(key => {
	Vue.filter(key, filters[key])
})

//挂载云空间口令--start
const uniClient = uniCloud.init({
	provider: 'aliyun',
	spaceId: '5e8b7a75-3f07-4a3b-a5ae-9f376b90166a',
	clientSecret: 'y1GmB4haXDt7hGlHvuSbNA=='
})
Vue.prototype.$api = uniClient;
//挂载云空间口令--end

app.$mount();
