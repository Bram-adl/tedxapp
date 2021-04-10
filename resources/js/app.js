// @ts-nocheck
import './bootstrap'

import Vue from 'vue'
import Vuesax from 'vuesax'
import VueCarousel from 'vue-carousel'
import App from './App.vue'
import router from './router'

import 'vuesax/dist/vuesax.css'

Vue.use(Vuesax, {})
Vue.use(VueCarousel)

Vue.config.productionTip = false

window.$eventBus = new Vue()

const vm = new Vue({
  render: h => h(App),
  router
}).$mount('#app')