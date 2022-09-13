import App from './App'


// #ifndef VUE3
import Vue from 'vue'
Vue.config.productionTip = false

import navigate from "@/utils/navigate"
Vue.prototype.navigator = navigate

// 引入loadsh
import _ from 'lodash'
// 将loadsh挂载到全局
Vue.prototype.loadsh = _

import store from "@/store/index"

App.mpType = 'app'
const app = new Vue({
    ...App,
	store
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif