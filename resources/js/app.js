// @ts-nocheck
import './bootstrap'

import Vue from 'vue'
import Vuesax from 'vuesax'
import VueCarousel from 'vue-carousel'
import App from './App.vue'
import router from './router'
import store from './store'

import 'vuesax/dist/vuesax.css'

Vue.use(Vuesax, {})
Vue.use(VueCarousel)

Vue.filter('formatPrice', function (price) {
  if (!price) return ""
  
  let reverse = price.toString().split("").reverse().join("");
  let ribuan = reverse.match(/\d{1,3}/g);
  ribuan = ribuan.join(".").split("").reverse().join("");

  return ribuan;
})

Vue.config.productionTip = false

window.$eventBus = new Vue()

const vm = new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')