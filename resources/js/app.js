// @ts-nocheck
import './bootstrap'

import Vue from 'vue'
import Vuesax from 'vuesax'
import App from './App.vue'

import 'vuesax/dist/vuesax.css'

Vue.use(Vuesax, {})

Vue.config.productionTip = false

const vm = new Vue({
  render: h => h(App)
}).$mount('#app')