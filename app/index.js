import Vue from 'vue'

// 挂载app混入
import appMixin from '@/app/js/mixin.js'
Vue.mixin(appMixin)

// 挂载app过滤
// import apFilters from "@/app/js/filters.js"
// Object.keys(filters).forEach(key => {
// 	Vue.filter(key, filters[key])
// })
